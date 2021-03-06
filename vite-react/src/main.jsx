// 引入React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

// 重置默认样式
import "./assets/reset.css";
import "normalize.css";
// 处理svg图标
import "@/assets/svg";

// 统一状态管理
import store from "./redux/store";
import { Provider } from "react-redux";
// 引入全局方法
import "@/utils";

// 引入App组件
import App from "./App";
import Blog from "@/layouts/Blog";

ReactDOM.render(
	// 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/blog" to="/blog/index" />
				<Route exact path="/" component={App}></Route>
				<Route path="/blog" component={Blog}></Route>
				<Route component={Error}></Route>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
