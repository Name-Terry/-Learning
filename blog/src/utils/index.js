import { useState, useEffect, useCallback } from "react";

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
String.prototype.firstUpperCase = function () {
	return this.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
		return $1.toUpperCase() + $2.toLowerCase();
	});
};

function getFileName(path, loc = "$2") {
	const reg = /(.*\/)*([^.]+).*/gi;
	// $1 相对路径  $2 文件名  $3 文件后缀
	return path.replace(reg, loc);
}

// 深拷贝
function deepClone(target) {
	// 定义一个变量
	let result;
	// 如果当前需要深拷贝的是一个对象的话
	if (typeof target === "object") {
		// 如果是一个数组的话
		if (Array.isArray(target)) {
			result = []; // 将result赋值为一个数组，并且执行遍历
			for (let i in target) {
				// 递归克隆数组中的每一项
				result.push(deepClone(target[i]));
			}
			// 判断如果当前的值是null的话；直接赋值为null
		} else if (target === null) {
			result = null;
			// 判断如果当前的值是一个RegExp对象的话，直接赋值
		} else if (target.constructor === RegExp) {
			result = target;
		} else {
			// 否则是普通对象，直接for in循环，递归赋值对象的所有值
			result = {};
			for (let i in target) {
				result[i] = deepClone(target[i]);
			}
		}
		// 如果不是对象的话，就是基本数据类型，那么直接赋值
	} else {
		result = target;
	}
	// 返回最终结果
	return result;
}

// 获取浏览器滚动条位置
const useScrollHeight = () => {
	const [scrollheight, setScrollHeight] = useState(0);

	const scroll = useCallback(() => {
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		setScrollHeight(scrollTop);
	}, []);

	useEffect(() => {
		// 滚动条监听函数
		window.addEventListener("scroll", scroll);
		return () => {
			window.removeEventListener("scroll", scroll);
		};
	}, [scroll]);
	return scrollheight;
};

export { getFileName, deepClone, useScrollHeight };
