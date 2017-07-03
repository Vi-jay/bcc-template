const utils = Object.create(null);
import _ from "lodash/array";

void function () {
    //----------------------------------------------工具变量
    const class2type = {},
        toString = class2type.toString,
        getProto = Object.getPrototypeOf,
        hasOwn = class2type.hasOwnProperty,
        fnToString = hasOwn.toString,
        ObjectFunctionString = fnToString.call(Object),
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i,
        rcheckableType = ( /^(?:checkbox|radio)$/i ),
        rCRLF = /\r?\n/g;
    //-----------------------------------------------工具函数
    const isPlainObject = (obj) => {
            let proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            //如果为空 或者不是一个对象 则返回false
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            //如果没有原型
            if (!proto) {
                return true;
            }
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            //获取原型的构造器函数
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            //如果构造器是一个函数 并且构造器toString是[object Function] 则返回true;
        },
        type = (obj) => {
            if (obj == null) {
                return obj + "";
            }
            // Support: Android <=2.3 only (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" :
                typeof obj;
        },
        isFunction = (obj) => {
            return type(obj) === "function";
        },
        isArrayLike = (obj) => {
            // Support: real iOS 8.2 only (not reproducible in simulator)
            // `in` check used to prevent JIT error (gh-2145)
            // hasOwn isn't used here due to false negatives
            // regarding Nodelist length in IE
            let length = !!obj && "length" in obj && obj.length,
                types = type(obj);

            if (types === "function" || obj === window) {
                return false;
            }

            return types === "array" || length === 0 ||
                typeof length === "number" && length > 0 && ( length - 1 ) in obj;
        };
    //-----------------------------------------------------------------------------
    //接受三个参数 1,是否深拷贝/boolean 2,目标对象 3,需要把属性拷贝到目标对象上的对象
    //接受两个参数 1,目标对象 2,需要把属性拷贝到目标对象上的对象   两个参数时默认为不深拷贝
    utils.extend = function extend() {
        let options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        //这个是有三个参数的情况下 第一个参数是否深拷贝 第二个参数是目标对象 第三个参数是拷贝对象
        //如果第一个参数是true 则给deep赋值true  （要求是布尔值只会是true）
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            //target等于第二个参数 如果第二个参数没有则为{}
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        //如果target不是对象 也不是函数 则给target赋值为一个空对象
        //这种情况是 第一个参数乱写了一些字符串或者其他 则把目标对象设为空
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        //如果只有一个参数 则target=当前jquery对象
        //这种情况是把目标对象设置为当前对象 把传入的一个参数作为拷贝参数拷贝进来
        if (i === length) {
            target = this;
            i--;
        }
        //如果三种情况都不是 默认是浅拷贝
        for (; i < length; i++) {

            // Only deal with not-null/undefined values
            if (( options = arguments[i] ) != null) {

                // Extend the base object
                for (name in options) {
                    //获取到第i个参数上的对象
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    //判断当前对象是否已经有该参数对象上的配置  如果有就直接跳过
                    if (target === copy) {
                        continue;
                    }
                    //如果需要深拷贝并且需要copy的配置不为空    并且copy是一个简单对象或者是一个数组
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && ( isPlainObject(copy) ||
                        ( copyIsArray = Array.isArray(copy) ) )) {
                        //如果copy是数组
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                            //判断src是否存在并且是否是一个数组 如果是的话则返回src 否则就返回一个空数组
                        } else {
                            //如果不是数组
                            clone = src && isPlainObject(src) ? src : {};
                            //判断src是否存在并且是否是一个对象 如果是的话则返回src 否则就返回一个空对象
                        }
                        // Never move original objects, clone them
                        //继续往里拷贝
                        target[name] = extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        //如果copy不是一个对象或者数组则直接赋值
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        //返回已经修改过的对象
        return target;
    };
    utils.extend(true, utils, {
        //可遍历类数组,第一个参数是数组或者类数组 第二个是回调函数
        each: (arr, callback) => {
            let [i, length] = [0, arr.length];
            if (arr && arr.length && typeof arr === "object") {
                for (; i < length; i++) {
                    callback(arr[i], i, arr);
                }
            } else {
                return false;
            }
            return true;
        },
        //可遍历数组和类数组 返回一个新的数组 新数组中值为回调函数中返回的内容
        map: (elems, callback, arg) => {
            var length, value,
                i = 0,
                ret = [];

            // 如果是数组或者类数组
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // 否则当对象遍历
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return ret;
        },
        //把数组或者类数组集合转换成序列化数组
        serializeArray: function (eles) {
            function isHTMLElement(obj) {
                var d = document.createElement("div");
                if (obj && obj.nodeType) {
                    try {
                        d.appendChild(obj.cloneNode(true));
                        return obj.nodeType===1?true:false;
                    } catch (e) {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            return utils.map(eles, function (item) {
                // Can add propHook for "elements" to filter or add form elements
                return isHTMLElement(item)&&item;
            })
            //过滤节点
                .filter(function (item, index, arr) {
                    var type = item.type;

                    // 这个对象有name并且没有disabled
                    return item.name && !item.getAttribute("disabled") &&
                        rsubmittable.test(item.nodeName) && !rsubmitterTypes.test(type) &&
                        ( item.checked || !rcheckableType.test(type) );
                })
                .map(function (item, index, arr) {
                    var val = item.value;

                    if (val == null) {
                        return null;
                    }

                    if (Array.isArray(val)) {
                        return utils.map(val, function (_val) {
                            return {name: item.name, value: _val.replace(rCRLF, "\r\n")};
                        });
                    }

                    return {name: item.name, value: val.replace(rCRLF, "\r\n")};
                });
        },
        //把类数组集合转换成数组
        makeLikeArrayToArray:function (obj) {
            return Array.prototype.slice.call(obj);
        },
        //序列化表单
        serialize:function (form) {
            var arr=this.serializeArray(form),serializeJson={};
            console.log(arr);
            this.each(arr,function (item) {
                serializeJson[item.name]=item.value;
            });
            return JSON.stringify(serializeJson);
        }
    });
    //添加第三方工具包
    utils.extend(true,utils,_);
}();


module.exports = utils;