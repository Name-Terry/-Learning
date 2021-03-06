// 重置默认样式
import "./util/reset.css";

// 处理svg图标
import "@/assets/svg";

// 引入React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// 统一状态管理
import store from "./redux/store";
import { Provider } from "react-redux";

// 引入全局方法
import "@/util";

// 引入App组件
import App from "./App";

import Layout from "@/containers/Layout";

ReactDOM.render(
	// 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App}></Route>
				<Route path="/blog" component={Layout}></Route>
				<Route component={Error}></Route>
			</Switch>
			{/* <App /> */}
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
