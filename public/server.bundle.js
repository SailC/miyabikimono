/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"zh-cn": {
		"apple-store-url": "https://itunes.apple.com/us/app/busgazer-pittsburgh/id936235643?mt=8&_branch_match_id=399387738945819974",
		"google-play-url": "https://play.google.com/store/apps/details?id=com.busgazer.oba&_branch_match_id=399387738945819974",
		"nav-home": "主页",
		"nav-web": "Web App",
		"nav-combo": "特色套餐",
		"nav-booking": "网上预约",
		"nav-faq": "预约流程和常见问题",
		"nav-girls": "她们来过",
		"nav-about": "关于我们",
		"nav-social": "联系方式",
		"button-calendar": "开始预约",
		"hero-title-1": "江户和装工房",
		"hero-subtitle-1": "和服是一次相遇",
		"hero-title-2": "江户和装工房",
		"hero-subtitle-2": "和服租赁 物美价廉",
		"hero-title-3": "江户和装工房",
		"hero-subtitle-3": "在线预约 简单方便",
		"cloth-type": "衣服类型",
		"belt": "腰带绑法",
		"gender": "适用人群",
		"event": "推荐场合",
		"sort1": "受欢迎程度 (从高到低)",
		"sort2": "价格 (从低到高)",
		"sort3": "价格 (从高到低)",
		"search-place-holder": "输入关键字检索",
		"search": "搜索",
		"answererName": "客服小雅",
		"boss-name": "店长阿乐",
		"boss-quote": "这两年当中，承蒙大家的错爱, 我们遇到各行各业不同的顾客，她们从事IT，空姐，摄影师等等能够与您们相遇都是我们前世的缘分, 感恩您们选择了我们，愿接下来的路，还能有您们的陪伴和支持，和新的旅程的开始",
		"prev": "上一页",
		"next": "下一页",
		"combo-desc": "套餐特点",
		"combo-acc": "包含物件",
		"combo-hair": "发型设计",
		"combo-book": "开始预约",
		"combo-photo": "客人风采",
		"contact-name1": "客服一号线",
		"contact-name2": "客服二号线",
		"email-name": "电子邮件",
		"location-1": "浅草分店: 东京都台东区浅草3-30-2末崎ビル",
		"location-2": "上野分店: 东京都台东区台东4-9-2",
		"nav-calendar": "选择来店日期和时间",
		"notes-title-1": "支付方式",
		"notes-title-2": "来店时间确认",
		"note1": "套餐的选择和支付可以等到您来到店里之后再进行",
		"note2": "当前预约的时间是(东京时间)：",
		"confirm-time": "我确定预约时间没有错误",
		"repick-time": "重新预约",
		"date": "日期",
		"time": "时间",
		"hour": "时钟",
		"minute": "分钟",
		"next-step": "下一步",
		"weeks": [
			"周日",
			"周一",
			"周二",
			"周三",
			"周四",
			"周五",
			"周六"
		],
		"nav-confirm": "确认预约信息",
		"question1": "欢迎使用江户和装工房~雅的网上预约，请问您的名字是? ",
		"placeHolder1": "请输入您的姓名",
		"input-placeholder": "输入回复...",
		"input-placeholder-required": "请务必回答这个问题",
		"user-reponse-missing": "没有",
		"user-reponse-missing-group": "我不知道答案",
		"input-placeholder-error": "您的输入格式不正确",
		"entry-not-found": "找不到这一项",
		"group-placeholder": "点击按钮来选择",
		"input-no-filter": "找不到包含关键字的结果",
		"user-reponse-and": " 和",
		"general": "默认类型1 | 默认类型2",
		"say-hello": "很高兴认识你",
		"question2": "请问您要来我们哪家分店呢?",
		"location1": "浅草",
		"location2": "上野",
		"question3_1": "请问同行的有几位男士呢?如果没有,请输入0",
		"placeHolder3_1": "请输入来店的男士人数",
		"question3_2": "请问同行的有几位女士呢?如果没有请,输入0",
		"placeHolder3_2": "请输入来店的女士人数",
		"question3_3": "请问同行的有几位儿童呢?如果没有,请输入0",
		"placeHolder3_3": "请输入来店的儿童人数",
		"question4": "您的Email是?请务必填写",
		"placeHolder4": "输入您的Email,请务必填写",
		"question5": "请留下您的微信号或者qq号?如果没有,请直接按提交按钮",
		"placeHolder5": "请输入您的微信号或者qq号",
		"question6": "您的联系电话是?如果没有,请直接按提交按钮",
		"placeHolder6": "请输入您的联系电话",
		"question7": "您是通过哪种方式了解到本店的?",
		"placeHolder7": "请选择了解到本店的渠道",
		"via1": "大众点评",
		"via2": "搜索引擎",
		"via3": "朋友介绍",
		"via4": "新浪微博",
		"via5": "Facebook",
		"via6": "杂志",
		"via7": "旅游攻略",
		"via8": "其他",
		"question8": "您还有什么特殊的要求或者留言吗？如果没有,请直接按提交按钮",
		"placeHolder8": "请输入您的特殊要求",
		"question9": "请检查一下您的预约信息,如果想要修改,请单击您之前回复的消息对话框,然后输入要更改的信息或者选择相应的答案",
		"confirm-answer": "已经检查过了，确认预约信息无误！",
		"placeHolder9": "请点击按钮以继续",
		"table-name": "姓名",
		"table-time": "预约时间（东京时间）",
		"table-location": "预约分店",
		"table-male-num": "来店男士人数",
		"table-female-num": "来店女士人数",
		"table-children-num": "来店儿童人数",
		"table-phone": "联系电话",
		"table-email": "电子邮箱",
		"table-wechat": "微信号或qq号",
		"table-requirement": "特殊要求",
		"confirm-title-1": "非常感谢!",
		"confirm-msg-1": "恭喜你完成表格的填写！预约确认的邮件稍后会发送至您的邮箱",
		"confirm-title-2": "重新预约?",
		"confirm-msg-2": "如需修改预订信息，请点击重新预订按钮",
		"nav-return": "返回主页"
	},
	"zh-tw": {
		"apple-store-url": "https://itunes.apple.com/us/app/busgazer-pittsburgh/id936235643?mt=8&_branch_match_id=399387738945819974",
		"google-play-url": "https://play.google.com/store/apps/details?id=com.busgazer.oba&_branch_match_id=399387738945819974",
		"nav-home": "主頁",
		"nav-web": "Web App",
		"nav-combo": "特色套餐",
		"nav-booking": "網上預約",
		"nav-faq": "預約流程和常見問題",
		"nav-girls": "她們來過",
		"nav-about": "關於我們",
		"nav-social": "聯繫方式",
		"button-calendar": "開始預約",
		"hero-title-1": "江戶和裝工房",
		"hero-subtitle-1": "和服是一次相遇",
		"hero-title-2": "江戶和裝工房",
		"hero-subtitle-2": "和服租賃 物美價廉",
		"hero-title-3": "江戶和裝工房",
		"hero-subtitle-3": "在線預約 簡單方便",
		"cloth-type": "衣服類型",
		"belt": "腰帶綁法",
		"gender": "適用人群",
		"event": "推薦場合",
		"sort1": "受歡迎程度 (從高到低)",
		"sort2": "價格 (從低到高)",
		"sort3": "價格 (從高到低)",
		"search-place-holder": "輸入關鍵字檢索",
		"search": "搜索",
		"answererName": "客服小雅",
		"boss-name": "店長阿樂",
		"boss-quote": "這兩年當中，承蒙大家的錯愛, 我們遇到各行各業不同的顧客，她們從事IT，空姐，攝影師等等能夠與您們相遇都是我們前世的緣分, 感恩您們選擇了我們，願接下來的路，還能有您們的陪伴和支持，和新的旅程的開始",
		"prev": "上一頁",
		"next": "下一頁",
		"combo-desc": "套餐特點",
		"combo-acc": "包含物件",
		"combo-hair": "髮型設計",
		"combo-book": "開始預約",
		"combo-photo": "客人風采",
		"contact-name1": "客服一號線",
		"contact-name2": "客服二號線",
		"email-name": "電子郵件",
		"location-1": "淺草分店: 東京都台東區淺草3-30-2末崎ビル",
		"location-2": "上野分店: 東京都台東區台東4-9-2",
		"nav-calendar": "選擇來店日期和時間",
		"notes-title-1": "支付方式",
		"notes-title-2": "來店時間確認",
		"note1": "套餐的選擇和支付可以等到您來到店里之後再進行",
		"note2": "當前預約的時間是(東京時間)：",
		"confirm-time": "我確定預約時間沒有錯誤",
		"repick-time": "重新預約",
		"date": "日期",
		"time": "時間",
		"hour": "時鐘",
		"minute": "分鐘",
		"next-step": "下一步",
		"weeks": [
			"週日",
			"週一",
			"週二",
			"週三",
			"週四",
			"週五",
			"週六"
		],
		"nav-confirm": "確認預約信息",
		"question1": "歡迎使用江戶和裝工房~雅的網上預約，請問您的名字是? ",
		"placeHolder1": "請輸入您的姓名",
		"input-placeholder": "輸入回复...",
		"input-placeholder-required": "請務必回答這個問題",
		"user-reponse-missing": "沒有",
		"user-reponse-missing-group": "我不知道答案",
		"input-placeholder-error": "您的輸入格式不正確",
		"entry-not-found": "找不到這一項",
		"group-placeholder": "點擊按鈕來選擇",
		"input-no-filter": "找不到包含關鍵字的結果",
		"user-reponse-and": " 和",
		"general": "默認類型1 | 默認類型2",
		"say-hello": "很高興認識你",
		"question2": "請問您要來我們哪家分店呢?",
		"location1": "淺草",
		"location2": "上野",
		"question3_1": "請問同行的有幾位男士呢?如果沒有,請輸入0",
		"placeHolder3_1": "請輸入來店的男士人數",
		"question3_2": "請問同行的有幾位女士呢?如果沒有請,輸入0",
		"placeHolder3_2": "請輸入來店的女士人數",
		"question3_3": "請問同行的有幾位兒童呢?如果沒有,請輸入0",
		"placeHolder3_3": "請輸入來店的兒童人數",
		"question4": "您的Email是?請務必填寫",
		"placeHolder4": "輸入您的Email,請務必填寫",
		"question5": "請留下您的微信號或者qq號?如果沒有,請直接按提交按鈕",
		"placeHolder5": "請輸入您的微信號或者qq號",
		"question6": "您的聯繫電話是?如果沒有,請直接按提交按鈕",
		"placeHolder6": "請輸入您的聯繫電話",
		"question7": "您是通過哪種方式了解到本店的?",
		"placeHolder7": "請選擇了解到本店的渠道",
		"via1": "大眾點評",
		"via2": "搜索引擎",
		"via3": "朋友介紹",
		"via4": "新浪微博",
		"via5": "Facebook",
		"via6": "雜誌",
		"via7": "旅遊攻略",
		"via8": "其他",
		"question8": "您還有什麼特殊的要求或者留言嗎？如果沒有,請直接按提交按鈕",
		"placeHolder8": "請輸入您的特殊要求",
		"question9": "請檢查一下您的預約信息,如果想要修改,請單擊您之前回复的消息對話框,然後輸入要更改的信息或者選擇相應的答案",
		"confirm-answer": "已經檢查過了，確認預約信息無誤！",
		"placeHolder9": "請點擊按鈕以繼續",
		"table-name": "姓名",
		"table-time": "預約時間（東京時間）",
		"table-location": "預約分店",
		"table-male-num": "來店男士人數",
		"table-female-num": "來店女士人數",
		"table-children-num": "來店兒童人數",
		"table-phone": "聯繫電話",
		"table-email": "電子郵箱",
		"table-wechat": "微信號或qq號",
		"table-requirement": "特殊要求",
		"confirm-title-1": "非常感謝!",
		"confirm-msg-1": "恭喜你完成表格的填寫！預約確認的郵件稍後會發送至您的郵箱",
		"confirm-title-2": "重新預約?",
		"confirm-msg-2": "如需修改預訂信息，請點擊重新預訂按鈕",
		"nav-return": "返回主頁"
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
* Wallop.js
*
* @fileoverview Minimal JS library to show & hide things
*
* @author Pedro Duarte
* @author http://pedroduarte.me/wallop
*
*/
(function(global){
  function Wallop(selector, options) {
    if (!selector) { throw new Error('Missing selector. Refer to Usage documentation: https://github.com/peduarte/wallop#javascript'); }

    for (var i = 0; i < selectorPool.length; i++) {
      if (selectorPool[i] === selector) {
        throw new Error('An instance of Wallop with this selector already exists.');
      }
    }

    this.options = {
      buttonPreviousClass: 'Wallop-buttonPrevious',
      buttonNextClass: 'Wallop-buttonNext',
      itemClass: 'Wallop-item',
      currentItemClass: 'Wallop-item--current',
      showPreviousClass: 'Wallop-item--showPrevious',
      showNextClass: 'Wallop-item--showNext',
      hidePreviousClass: 'Wallop-item--hidePrevious',
      hideNextClass: 'Wallop-item--hideNext',
      carousel: true
    };

    // Whitelist elements which contain `length`
    this.whitelist = {
      'form': true
    };

    if (selector.length > 0 && !this.whitelist[selector]) {
      throw new Error('Selector cannot be an array, Refer to Usage documentation: https://github.com/peduarte/wallop#javascript');
    } else {
      this.$selector = selector;
    }

    this.options = extend(this.options, options);
    this.event = null;

    // "Global vars"
    this.reset();
    this.buttonPrevious = this.$selector.querySelector(' .' + this.options.buttonPreviousClass);
    this.buttonNext = this.$selector.querySelector(' .' + this.options.buttonNextClass);

    this.bindEvents();
    this.createCustomEvent();

    // If there is no active item, start at 0
    if (this.currentItemIndex === -1) {
      this.currentItemIndex = 0;
      addClass(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass);
    }

    // Update button states to make sure the correct state is set on initialization
    this.updateButtonStates();

    // Wrapped in timeout function so event can
    // be listened from outside at anytime
    var _this = this;
    setTimeout(function() {
      _this.event.detail.currentItemIndex = _this.currentItemIndex;
      _this.$selector.dispatchEvent(_this.event);
    }, 0);
  }

  var selectorPool = [];

  var WS = Wallop.prototype;

  // Update prev/next disabled attribute
  WS.updateButtonStates = function () {
    if ((!this.buttonPrevious && !this.buttonNext) || this.options.carousel) { return; }

    if (this.currentItemIndex === this.lastItemIndex) {
      this.buttonNext.setAttribute('disabled', 'disabled');
    } else if (this.currentItemIndex === 0) {
      this.buttonPrevious.setAttribute('disabled', 'disabled');
    }
  };

  // Reset all settings by removing classes and attributes added by goTo() & updateButtonStates()
  WS.removeAllHelperSettings = function () {
    removeClass(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass);
    removeClass($$(this.options.hidePreviousClass, this.$selector), this.options.hidePreviousClass);
    removeClass($$(this.options.hideNextClass, this.$selector), this.options.hideNextClass);
    removeClass($$(this.options.showPreviousClass, this.$selector), this.options.showPreviousClass);
    removeClass($$(this.options.showNextClass, this.$selector), this.options.showNextClass);

    if (!this.buttonPrevious && !this.buttonNext) { return; }

    this.buttonPrevious.removeAttribute('disabled');
    this.buttonNext.removeAttribute('disabled');
  };

  // Method to add classes to the right elements depending on the index passed
  WS.goTo = function (index) {
    if (index === this.currentItemIndex) { return; }

    // Fix the index if it's out of bounds and carousel is enabled
    index = index === -1 && this.options.carousel ? this.lastItemIndex : index;
    index = index === this.lastItemIndex + 1 && this.options.carousel ? 0 : index;

    // Exit when index is out of bounds
    if (index < 0 || index > this.lastItemIndex) { return; }

    this.removeAllHelperSettings();

    var isForwards = (index > this.currentItemIndex || index === 0 && this.currentItemIndex === this.lastItemIndex) && !(index === this.lastItemIndex && this.currentItemIndex === 0);
    addClass(this.allItemsArray[this.currentItemIndex], isForwards ? this.options.hidePreviousClass : this.options.hideNextClass);
    addClass(this.allItemsArray[index], this.options.currentItemClass + ' ' + (isForwards ? this.options.showNextClass : this.options.showPreviousClass));

    this.currentItemIndex = index;

    this.updateButtonStates();

    this.event.detail.currentItemIndex = this.currentItemIndex;
    this.$selector.dispatchEvent(this.event);
  };

  // Previous item handler
  WS.previous = function () {
    this.goTo(this.currentItemIndex - 1);
  };

  // Next item handler
  WS.next = function () {
    this.goTo(this.currentItemIndex + 1);
  };

  // Update global variables
  WS.reset = function () {
    this.allItemsArray = Array.prototype.slice.call(this.$selector.querySelectorAll(' .' + this.options.itemClass));
    this.currentItemIndex = this.allItemsArray.indexOf(this.$selector.querySelector(' .' + this.options.currentItemClass));
    this.lastItemIndex = this.allItemsArray.length - 1;
  };

  // Attach click handlers
  WS.bindEvents = function () {
    selectorPool.push(this.$selector);

    var _this = this;

    if (this.buttonPrevious) {
      this.buttonPrevious.addEventListener('click', function (event) {
        event.preventDefault();
        _this.previous();
      });
    }

    if (this.buttonNext) {
      this.buttonNext.addEventListener('click', function (event) {
        event.preventDefault();
        _this.next();
      });
    }

  };

  // Method to bind custom event
  WS.on = function (eventName, callback) {
    this.$selector.addEventListener(eventName, callback, false);
  };

  // Method to unbind custom event
  WS.off = function (eventName, callback) {
    this.$selector.removeEventListener(eventName, callback, false);
  };

  // Create custom Event
  WS.createCustomEvent = function () {
    var _this = this;
    this.event = new CustomEvent('change', {
      detail: {
        wallopEl: _this.$selector,
        currentItemIndex: Number(_this.currentItemIndex)
      },
      bubbles: true,
      cancelable: true
    });
  };

  // Helper functions
  function $$(element, container) {
    if (!element) { return; }
    if (!container) {
      container = document;
    }
    return container.querySelector('.' + element);
  }

  function addClass(element, className) {
    if (!element) { return; }
    element.className = (element.className + ' ' + className).trim();
  }

  function removeClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(className, '').trim();
  }

  function extend(origOptions, userOptions){
    var extendOptions = {}, attrname;
    for (attrname in origOptions) { extendOptions[attrname] = origOptions[attrname]; }
    for (attrname in userOptions) { extendOptions[attrname] = userOptions[attrname]; }
    return extendOptions;
  }

  // Pollyfill for CustomEvent() Constructor - thanks to Internet Explorer
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.CustomEvent ? window.CustomEvent.prototype : {};
  window.CustomEvent = CustomEvent;

  // Exports to multiple environments
  if(true){ //AMD
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return Wallop; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports){ //node
    module.exports = Wallop;
  } else { // browser
    // use string because of Google closure compiler ADVANCED_MODE
    /* jslint sub:true */
    global['Wallop'] = Wallop;
  }
}(this));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.CalendarSection = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _CalendarWidget = __webpack_require__(49);

var _CalendarWidget2 = _interopRequireDefault(_CalendarWidget);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(71);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarSection = function CalendarSection(props) {
  var language = props.language,
      isleftHidden = props.isleftHidden,
      isRightHidden = props.isRightHidden,
      m = props.m,
      handleChange = props.handleChange,
      handleSave = props.handleSave,
      repickTime = props.repickTime;

  return _react2.default.createElement(
    'section',
    { className: 'calendar-section section container', id: 'calendar-section' },
    _react2.default.createElement(
      'div',
      { className: 'title has-text-centered is-2 font-tang' },
      _dict2.default[language]['nav-calendar']
    ),
    _react2.default.createElement(
      'div',
      { className: 'calendar-widget columns container' },
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('column', 'calendar-column', { 'is-hidden': isleftHidden }) },
        _react2.default.createElement(_CalendarWidget2.default, {
          moment: m,
          onChange: handleChange,
          onSave: handleSave,
          lang: language
          // initForm={initDialogForm}
        })
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('column', 'messages', { 'is-hidden': isRightHidden }) },
        _react2.default.createElement(Message, { title: _dict2.default[language]['notes-title-1'],
          content: _dict2.default[language]['note1'],
          styleClass: 'is-primary',
          iconName: 'fa-money'
        }),
        _react2.default.createElement(Message, { title: _dict2.default[language]['notes-title-2'],
          content: _dict2.default[language]['note2'] + ' ' + m.format('LLLL'),
          styleClass: 'is-primary',
          iconName: 'fa-check-circle'
        }),
        _react2.default.createElement(
          'div',
          { className: 'text-button has-text-centered' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _path2.default.join(props.match.url, '/form'),
              className: 'button is-primary is-outlined' },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'title is-5 font-tang' },
              _dict2.default[language]['confirm-time']
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'button is-primary repick-time is-outlined',
              onClick: repickTime },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-clock-o' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'title is-5 font-tang' },
              _dict2.default[language]['repick-time']
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/',
              className: 'button is-primary is-outlined' },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-home' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'title is-5 font-tang' },
              _dict2.default[language]['nav-return']
            )
          )
        )
      )
    )
  );
};

var Message = function Message(props) {
  return _react2.default.createElement(
    'article',
    { className: 'message ' + props.styleClass },
    _react2.default.createElement(
      'div',
      { className: 'message-header' },
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa ' + props.iconName + ' is-small' })
        ),
        props.title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'message-body' },
      _react2.default.createElement(
        'p',
        null,
        props.content
      )
    )
  );
};
exports.CalendarSection = CalendarSection;
exports.Message = Message;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("blacklist");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(54),
    isArrayLike = __webpack_require__(55),
    isIndex = __webpack_require__(62),
    isObject = __webpack_require__(6);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(59),
    objectToString = __webpack_require__(60);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(57);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(63);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = function NoMatch(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'section',
    { className: 'hero is-fullheight' },
    _react2.default.createElement(
      'div',
      { className: 'hero-body' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'has-text-centered' },
          _react2.default.createElement('img', { src: '/images/404.gif' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'has-text-centered' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
              'button',
              { className: 'button is-primary' },
              '\u8FD4\u56DE\u4E3B\u9875'
            )
          )
        )
      )
    )
  );
};

exports.default = NoMatch;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var app = __webpack_require__(18);
var debug = __webpack_require__(83)('miyabi:server');
var http = __webpack_require__(84);

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function () {
  console.log('Production Express server running at localhost:' + port);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

// express middleware & utils
var express = __webpack_require__(4);
var path = __webpack_require__(5);
var favicon = __webpack_require__(19);
var compression = __webpack_require__(20);

// var logger = require('morgan')
// var cookieParser = require('cookie-parser')
var bodyParser = __webpack_require__(21);
var expressValidator = __webpack_require__(22);

// express routes
var index = __webpack_require__(23);
var emailRouter = __webpack_require__(80);
// init app
var app = express();

// pug setup
app.set('views', path.join(__dirname, 'views')); // A directory for the application's views.
app.set('view engine', 'pug');
// app.locals.basedir = path.join(__dirname, '../public') // Pug: The root directory of all absolute inclusion.

// middleware setup
// app.use(logger('dev'))
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public'))); // static file look up
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')));

// send all requests to index.html so browserHistory in React Router works
app.use('/email', emailRouter);
app.use('*', index);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export app
module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(4);
var router = express.Router();
// var path = require('path')

var React = __webpack_require__(0);
var ReactDOMServer = __webpack_require__(24);
var Router = __webpack_require__(25);
var App = __webpack_require__(26);

/* GET home page. */
router.get('/', function (req, res, next) {
  var StaticRouter = Router.StaticRouter;
  var context = {};
  var html = ReactDOMServer.renderToString(React.createElement(
    StaticRouter,
    {
      location: req.url,
      context: context
    },
    React.createElement(App, null)
  ));

  if (context.url) {
    res.writeHead(30, {
      Location: context.url
    });
    res.end();
  } else {
    res.write('\n      <!DOCTYPE html>\n      <html lang="en">\n        <head>\n          <meta charset=utf-8/>\n          <meta name="viewport" content="width=device-width">\n          <title>\u6C5F\u6237\u548C\u88C5\u5DE5\u623F\u96C5 - \u6D45\u8349\u548C\u670D\u79DF\u8D41</title>\n          <link rel="shortcut icon" type="image/png" href="/images/logo1.png"/>\n          <link rel="stylesheet"\n          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\n          <link rel=\'stylesheet\' href=\'/main.css\' />\n          <link rel=\'stylesheet\' href=\'/conversational-form.min.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--fade.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--slide.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--rotate.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--scale.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--fold.css\' />\n          <link rel=\'stylesheet\' href=\'/wallop--vertical-slide.css\' />\n        </head>\n\n        <body>\n          <div id=app>' + html + '</div>\n          <script src="/conversational-form.min.js"></script>\n          <script src="/bundle.js"></script>\n          <script src="https://fast.wistia.com/embed/medias/phknks26n7.jsonp" async></script>\n          <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>\n        </body>\n      </html>\n    ');
    res.end();
  }
  // res.sendFile(path.join(__dirname, '/../../public/index.html'))
});

module.exports = router;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _HomePage = __webpack_require__(27);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _BookingPage = __webpack_require__(48);

var _BookingPage2 = _interopRequireDefault(_BookingPage);

var _NoMatch = __webpack_require__(16);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      lang: 'zh-cn'
    };
    _this.onLangChange = _this.onLangChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onLangChange',
    value: function onLangChange(event) {
      var language = event.target.value;
      // TODO: to be implemented , setState(lang)
      if (language === '简体中文') {
        this.setState({
          lang: 'zh-cn'
        });
      } else if (language === '正體中文') {
        this.setState({
          lang: 'zh-tw'
        });
      } else if (language === 'English') {
        console.log('en');
      } else {
        console.log('jp');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
              return _react2.default.createElement(_HomePage2.default, _extends({}, props, {
                lang: _this2.state.lang,
                onLangChange: _this2.onLangChange
              }));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/booking', render: function render(props) {
              return _react2.default.createElement(_BookingPage2.default, _extends({}, props, {
                lang: _this2.state.lang
              }));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NoMatch2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _HeroSection = __webpack_require__(28);

var _ProductSection = __webpack_require__(29);

var _ProductSection2 = _interopRequireDefault(_ProductSection);

var _QaSection = __webpack_require__(37);

var _QaSection2 = _interopRequireDefault(_QaSection);

var _GirlsSection = __webpack_require__(42);

var _GirlsSection2 = _interopRequireDefault(_GirlsSection);

var _AboutSection = __webpack_require__(45);

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _FooterSection = __webpack_require__(47);

var _FooterSection2 = _interopRequireDefault(_FooterSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_HeroSection.HeroSection, { lang: this.props.lang,
          onLangChange: this.props.onLangChange }),
        _react2.default.createElement(_ProductSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_QaSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_GirlsSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_AboutSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_FooterSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'ballon', to: '/booking' },
          _react2.default.createElement(
            'svg',
            { className: 'booking-ballon ', version: '1.1 ', xmlns: 'http://www.w3.org/2000/svg ',
              width: '24', height: '24', viewBox: '0 0 24 24 ' },
            _react2.default.createElement(
              'title',
              null,
              'calendar'
            ),
            _react2.default.createElement('path', { d: 'M7.5 9h3v3h-3zM12 9h3v3h-3zM16.5 9h3v3h-3zM3 18h3v3h-3zM7.5 18h3v3h-3zM12 18h3v3h-3zM7.5 13.5h3v3h-3zM12 13.5h3v3h-3zM16.5 13.5h3v3h-3zM3 13.5h3v3h-3zM19.5 0v1.5h-3v-1.5h-10.5v1.5h-3v-1.5h-3v24h22.5v-24h-3zM21 22.5h-19.5v-16.5h19.5v16.5z ' })
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHead = exports.HeroSection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _Wallop = __webpack_require__(7);

var _Wallop2 = _interopRequireDefault(_Wallop);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// default to Chinese simplified
var language = 'zh';
var text = _dict2.default['zh'];
var langChangeListener;

var NavLeft = function NavLeft() {
  return _react2.default.createElement(
    'div',
    { className: 'nav-left' },
    _react2.default.createElement(
      'a',
      { className: 'nav-item' },
      _react2.default.createElement('img', { src: '/images/logo-head.png', alt: 'Logo' })
    )
  );
};

var NavToggle = function NavToggle(props) {
  var isActive = props.isActive,
      toggleListener = props.toggleListener;

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)('nav-toggle', { 'is-active': isActive }), onClick: toggleListener },
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null)
  );
};

var NavRight = function NavRight(props) {
  var isActive = props.isActive,
      toggleListener = props.toggleListener;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('nav-right', 'nav-menu', { 'is-active': isActive }), onClick: toggleListener },
    _react2.default.createElement(
      'span',
      { className: 'nav-item', onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
        } },
      _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'p',
          { className: 'control' },
          _react2.default.createElement(
            'span',
            { className: 'select is-small is-primary has-text-centered' },
            _react2.default.createElement(
              'select',
              { onChange: langChangeListener },
              _react2.default.createElement(
                'option',
                { selected: language === 'zh-cn' },
                '\u7B80\u4F53\u4E2D\u6587'
              ),
              _react2.default.createElement(
                'option',
                { selected: language === 'zh-tw' },
                '\u6B63\u9AD4\u4E2D\u6587'
              ),
              _react2.default.createElement(
                'option',
                { selected: language === 'en' },
                'English'
              ),
              _react2.default.createElement(
                'option',
                { selected: language === 'ja' },
                '\u65E5\u672C\u8A9E'
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { href: '#product-section', className: 'button is-primary' },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-female' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon is-small' },
          _react2.default.createElement('i', { className: 'fa fa-plus' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-male' })
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { href: '#qa-section', className: 'button is-primary' },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-question-circle' })
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { href: '#girls-section', className: 'button is-primary' },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-camera' })
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { href: '#about-section', className: 'button is-primary' },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-users' })
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { href: '#footer', className: 'button is-primary' },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-wechat' })
        )
      )
    )
  );
};

var HeroHead = function (_React$Component) {
  _inherits(HeroHead, _React$Component);

  function HeroHead(props) {
    _classCallCheck(this, HeroHead);

    var _this = _possibleConstructorReturn(this, (HeroHead.__proto__ || Object.getPrototypeOf(HeroHead)).call(this, props));

    _this.state = {
      'isActive': false
    };

    _this.toggleListener = _this.toggleListener.bind(_this);
    return _this;
  }

  _createClass(HeroHead, [{
    key: 'toggleListener',
    value: function toggleListener() {
      this.setState({
        'isActive': !this.state.isActive
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'hero-head' },
        _react2.default.createElement(
          'header',
          { className: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(NavLeft, null),
            _react2.default.createElement(NavToggle, { toggleListener: this.toggleListener, isActive: this.state.isActive }),
            _react2.default.createElement(NavRight, { toggleListener: this.toggleListener, isActive: this.state.isActive })
          )
        )
      );
    }
  }]);

  return HeroHead;
}(_react2.default.Component);

var HeroBody = function HeroBody() {
  return _react2.default.createElement(
    'div',
    { className: 'hero-body' },
    _react2.default.createElement(WallopSlides, null)
  );
};

var Headlines = function Headlines(props) {
  var num = props.num;

  return _react2.default.createElement(
    'div',
    { className: 'container is-fluid has-text-centered' },
    _react2.default.createElement(
      'h1',
      { className: (0, _classnames2.default)('title', 'is-1', 'font-zhao') },
      ' ',
      text['hero-title-' + num],
      ' '
    ),
    _react2.default.createElement(
      'h2',
      { className: (0, _classnames2.default)('subtitle', 'is-3', 'font-zhao') },
      text['hero-subtitle-' + num]
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/booking', className: 'store-icon button is-primary is-inverted is-large' },
      _react2.default.createElement(
        'span',
        { className: 'icon' },
        _react2.default.createElement('i', { className: 'fa fa-calendar' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'font-tang' },
        text['button-calendar']
      )
    )
  );
};

var WallopSlides = function WallopSlides() {
  return _react2.default.createElement(
    'div',
    { className: 'Wallop Wallop--fade', id: 'heroWallop' },
    _react2.default.createElement(
      'div',
      { className: 'Wallop-list' },
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '1' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '2' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '3' })
      )
    )
  );
};

var WallopSlide = function WallopSlide(props) {
  var num = props.num;

  return _react2.default.createElement(
    'div',
    { className: 'columns container is-fluid' },
    _react2.default.createElement(
      'div',
      { className: 'column is-half' },
      _react2.default.createElement(Headlines, { num: num })
    ),
    _react2.default.createElement(
      'div',
      { className: 'column is-half has-text-centered' },
      _react2.default.createElement('img', { className: 'demo-img', src: '/images/mockup/' + num + '.png', alt: 'iphone demo 1' })
    )
  );
};

var HeroSection = function (_React$Component2) {
  _inherits(HeroSection, _React$Component2);

  function HeroSection() {
    _classCallCheck(this, HeroSection);

    return _possibleConstructorReturn(this, (HeroSection.__proto__ || Object.getPrototypeOf(HeroSection)).apply(this, arguments));
  }

  _createClass(HeroSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var heroWallop = document.querySelector('#heroWallop');
      var heroSlider = new _Wallop2.default(heroWallop);
      setInterval(function () {
        heroSlider.next();
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          lang = _props.lang,
          onLangChange = _props.onLangChange;

      langChangeListener = onLangChange;
      text = _dict2.default[lang];
      language = lang;
      return _react2.default.createElement(
        'section',
        { className: 'hero is-primary', id: 'hero-section' },
        _react2.default.createElement(HeroHead, null),
        _react2.default.createElement(HeroBody, null)
      );
    }
  }]);

  return HeroSection;
}(_react2.default.Component);

exports.HeroSection = HeroSection;
exports.HeroHead = HeroHead;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ShowCards = __webpack_require__(30);

var _ShowCards2 = _interopRequireDefault(_ShowCards);

var _Pages = __webpack_require__(33);

var _Pages2 = _interopRequireDefault(_Pages);

var _Filter = __webpack_require__(34);

var _Filter2 = _interopRequireDefault(_Filter);

var _Sort = __webpack_require__(35);

var _Sort2 = _interopRequireDefault(_Sort);

var _cards = __webpack_require__(36);

var _cards2 = _interopRequireDefault(_cards);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _jquery = __webpack_require__(8);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lastLang;
var language;
var text;
var allCards = _cards2.default;
var cardsPerPage = 6;

var ProductSection = function (_React$Component) {
  _inherits(ProductSection, _React$Component);

  function ProductSection(props) {
    _classCallCheck(this, ProductSection);

    var _this = _possibleConstructorReturn(this, (ProductSection.__proto__ || Object.getPrototypeOf(ProductSection)).call(this));

    _this.state = {
      pageIndex: 0,
      cards: _cards2.default,
      filters: {}
    };
    language = props.lang;
    lastLang = language;
    return _this;
  }

  _createClass(ProductSection, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (language === lastLang) {
        document.getElementById('product-section').scrollIntoView();
      }
      lastLang = language;
    }
  }, {
    key: 'toggleListener',
    value: function toggleListener() {
      (0, _jquery2.default)('html').toggleClass('filter-open');
    }
  }, {
    key: 'pageClickListener',
    value: function pageClickListener(pageNum, event) {
      this.setState({
        pageIndex: pageNum
      });
    }
  }, {
    key: 'sortClickListener',
    value: function sortClickListener(event) {
      var sortFunc = void 0;
      if (event.target.value === text['sort3']) {
        sortFunc = function sortFunc(a, b) {
          return parseInt(b.price) - parseInt(a.price);
        };
      } else if (event.target.value === text['sort2']) {
        sortFunc = function sortFunc(a, b) {
          return parseInt(a.price) - parseInt(b.price);
        };
      } else {
        sortFunc = function sortFunc(a, b) {
          return parseInt(b.popularity) - parseInt(a.popularity);
        };
      }
      var newCards = Array.from(this.state.cards);
      newCards.sort(sortFunc);
      this.setState({
        cards: newCards,
        pageIndex: 0
      });
    }
  }, {
    key: 'filterClickListener',
    value: function filterClickListener(fieldName, fieldVal, event) {
      var newFilters = this.state.filters;
      if (event.target.checked) {
        if (fieldName in newFilters) {
          if (!(fieldVal in newFilters[fieldName])) {
            newFilters[fieldName].push(fieldVal);
          }
        } else {
          newFilters[fieldName] = [fieldVal];
        }
      } else {
        var newVals = newFilters[fieldName].filter(function (val) {
          return val !== fieldVal;
        });
        newFilters[fieldName] = newVals;
      }
      var newCards = allCards.filter(function (card) {
        for (var _fieldName in newFilters) {
          var fieldVals = newFilters[_fieldName];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = fieldVals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _fieldVal = _step.value;

              if (card[language][_fieldName] !== _fieldVal) {
                return false;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        return true;
      });

      this.setState({
        pageIndex: 0,
        filters: newFilters,
        cards: newCards
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      text = _dict2.default[lang];
      language = lang;

      var pageNum = Math.floor((this.state.cards.length - 1) / cardsPerPage) + 1;
      return _react2.default.createElement(
        'section',
        { className: 'product-section section container', id: 'product-section' },
        _react2.default.createElement(
          'h1',
          { className: 'title has-text-centered font-tang is-2' },
          _dict2.default[language]['nav-combo']
        ),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'filter column is-one-quarter' },
            _react2.default.createElement(_Filter2.default, { cards: this.state.cards,
              filterClick: this.filterClickListener.bind(this),
              toggleListener: this.toggleListener,
              lang: lang
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'product column' },
            _react2.default.createElement(_Sort2.default, { sortClickListener: this.sortClickListener.bind(this),
              toggleListener: this.toggleListener,
              lang: lang
            }),
            _react2.default.createElement(_ShowCards2.default, { cards: this.state.cards,
              pageIndex: this.state.pageIndex,
              cardsPerPage: cardsPerPage,
              lang: language
            }),
            _react2.default.createElement(_Pages2.default, { pageIndex: this.state.pageIndex,
              pageNum: pageNum,
              pageClickListener: this.pageClickListener.bind(this),
              prev: _dict2.default[language]['prev'],
              next: _dict2.default[language]['next']
            })
          )
        )
      );
    }
  }]);

  return ProductSection;
}(_react2.default.Component);

exports.default = ProductSection;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(31);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowCards = function ShowCards(props) {
  var cards = props.cards,
      pageIndex = props.pageIndex,
      cardsPerPage = props.cardsPerPage,
      lang = props.lang;

  var showCardNum = cards.length;
  var beginCard = pageIndex * cardsPerPage;
  var endCard = (pageIndex + 1) * cardsPerPage >= showCardNum ? showCardNum : (pageIndex + 1) * cardsPerPage;
  var showCards = cards.slice(beginCard, endCard);
  showCards = showCards.map(function (card) {
    return _react2.default.createElement(_Card2.default, { key: card.id, card: card, lang: lang });
  });
  return _react2.default.createElement(
    'div',
    { className: 'product-list' },
    showCards
  );
};

exports.default = ShowCards;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _reactImages = __webpack_require__(32);

var _reactImages2 = _interopRequireDefault(_reactImages);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var language;

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.state = {
      isModalActive: false,
      gallerySlider: null,
      currentImage: 0
    };
    _this.toggleListener = _this.toggleListener.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    _this.gotoPrevious = _this.gotoPrevious.bind(_this);
    _this.gotoImage = _this.gotoImage.bind(_this);
    _this.handleClickImage = _this.handleClickImage.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: 'toggleListener',
    value: function toggleListener() {
      this.setState({
        isModalActive: !this.state.isModalActive
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'gotoImage',
    value: function gotoImage(index) {
      this.setState({
        currentImage: index
      });
    }
  }, {
    key: 'handleClickImage',
    value: function handleClickImage() {
      // only ten images
      if (this.state.currentImage === 10) return;
      this.gotoNext();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          lang = _props.lang,
          card = _props.card;

      language = lang;
      var BASE_DIR = '/images/service-section';
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-image' },
          _react2.default.createElement(
            'figure',
            { className: 'image is-3by2' },
            _react2.default.createElement('img', { src: BASE_DIR + '/big/' + card.url, alt: 'Image' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          _react2.default.createElement(
            'div',
            { className: 'media' },
            _react2.default.createElement(
              'div',
              { className: 'media-content' },
              _react2.default.createElement(
                'div',
                { className: 'title is-4' },
                _react2.default.createElement(
                  'span',
                  { className: 'font-tang' },
                  ' ',
                  card[language].name,
                  ' '
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'item-price button is-danger is-small' },
                  '￥' + card.price.toString()
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'div',
              { className: 'item-desc' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'item-feature font-tang button is-primary is-small is-outlined' },
                  _dict2.default[language]['combo-desc']
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  ' ',
                  card[language].desc,
                  ' '
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'item-desc' },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'item-feature font-tang button is-primary is-outlined is-small' },
                  _dict2.default[language]['combo-acc']
                ),
                card[language].acc
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'item-desc' },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'item-feature font-tang button is-primary is-outlined is-small' },
                  _dict2.default[language]['combo-hair']
                ),
                card[language].hair
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'item-link has-text-centered' },
              _react2.default.createElement(
                'a',
                { className: 'button', onClick: this.toggleListener },
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-small' },
                  _react2.default.createElement('i', { className: 'fa fa-camera' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'font-tang title is-5' },
                  _dict2.default[language]['combo-photo']
                )
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/booking', className: 'button' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-small' },
                  _react2.default.createElement('i', { className: 'fa fa-calendar' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'font-tang title is-5' },
                  _dict2.default[language]['combo-book']
                )
              )
            )
          ),
          _react2.default.createElement(_reactImages2.default, {
            currentImage: this.state.currentImage,
            images: Array.from(Array(11).keys()).map(function (id) {
              return { src: card.baseurl + '/' + id + '.jpg' };
            }),
            isOpen: this.state.isModalActive,
            onClickPrev: this.gotoPrevious,
            onClickNext: this.gotoNext,
            onClose: this.toggleListener,
            onClickImage: this.handleClickImage
          })
        )
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

exports.default = Card;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pages = function Pages(props) {
  var pageIndex = props.pageIndex,
      pageNum = props.pageNum,
      pageClickListener = props.pageClickListener,
      prev = props.prev,
      next = props.next;


  var pages = Array.from(Array(pageNum).keys(), function (i) {
    var boundPageClick = pageClickListener.bind(undefined, i);
    return _react2.default.createElement(
      'li',
      { key: i, onClick: boundPageClick },
      _react2.default.createElement(
        'a',
        { className: (0, _classnames2.default)('pagination-link', { 'is-current': i === pageIndex }) },
        i
      )
    );
  });
  var pagePrevListener = pageClickListener.bind(undefined, pageIndex - 1 <= 0 ? 0 : pageIndex - 1);
  var pageNextListener = pageClickListener.bind(undefined, pageIndex + 1 >= pageNum - 1 ? pageNum - 1 : pageIndex + 1);
  return _react2.default.createElement(
    'nav',
    { className: 'pagination is-centered' },
    _react2.default.createElement(
      'a',
      { className: 'pagination-previous', onClick: pagePrevListener },
      prev
    ),
    _react2.default.createElement(
      'a',
      { className: 'pagination-next', onClick: pageNextListener },
      next
    ),
    _react2.default.createElement(
      'ul',
      { className: 'pagination-list' },
      pages
    )
  );
};

exports.default = Pages;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var language;
var text;
var filterClickListener;

var CheckBox = function CheckBox(props) {
  var fieldName = props.fieldName,
      text = props.text,
      size = props.size;

  return _react2.default.createElement(
    'p',
    { className: 'control' },
    _react2.default.createElement(
      'label',
      { className: 'checkbox' },
      _react2.default.createElement('input', { type: 'checkbox', onChange: filterClickListener.bind(undefined, fieldName, text) }),
      text,
      _react2.default.createElement(
        'span',
        { className: 'tag is-light' },
        size
      )
    )
  );
};

var Field = function Field(props) {
  var fieldSet = props.fieldSet,
      fieldName = props.fieldName,
      cards = props.cards;

  return _react2.default.createElement(
    'div',
    { className: 'facet' },
    _react2.default.createElement(
      'h5',
      { className: 'facet-title font-tang title is-4' },
      text[fieldName]
    ),
    _react2.default.createElement(
      'div',
      { className: 'field' },
      Array.from(fieldSet, function (type) {
        var size = cards.filter(function (card) {
          return card[language][fieldName] === type;
        }).length;
        return _react2.default.createElement(CheckBox, {
          key: type,
          fieldName: fieldName,
          text: type,
          size: size
        });
      })
    )
  );
};

var Filter = function Filter(props) {
  var cards = props.cards,
      filterClick = props.filterClick,
      toggleListener = props.toggleListener,
      lang = props.lang;

  filterClickListener = filterClick;
  language = lang;
  text = _dict2.default[language];

  var clothType = new Set(cards.map(function (card) {
    return card[language]['cloth-type'];
  }).filter(function (x) {
    return x !== undefined;
  }));
  var belt = new Set(cards.map(function (card) {
    return card[language].belt;
  }).filter(function (x) {
    return x !== undefined;
  }));
  var gender = new Set(cards.map(function (card) {
    return card[language].gender;
  }).filter(function (x) {
    return x !== undefined;
  }));
  var event = new Set(cards.map(function (card) {
    return card[language].event;
  }).filter(function (x) {
    return x !== undefined;
  }));
  return _react2.default.createElement(
    'div',
    { className: 'filter-overlay' },
    _react2.default.createElement(
      'div',
      { className: 'filter-plate' },
      _react2.default.createElement('a', { className: 'delete is-large', onClick: toggleListener }),
      _react2.default.createElement(
        'div',
        { id: 'filters' },
        _react2.default.createElement(Field, { fieldSet: clothType,
          fieldName: 'cloth-type',
          cards: cards
        }),
        _react2.default.createElement(Field, { fieldSet: belt,
          fieldName: 'belt',
          cards: cards
        }),
        _react2.default.createElement(Field, { fieldSet: gender,
          fieldName: 'gender',
          cards: cards
        }),
        _react2.default.createElement(Field, { fieldSet: event,
          fieldName: 'event',
          cards: cards
        })
      )
    )
  );
};

exports.default = Filter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sort = function Sort(props) {
  var sortClickListener = props.sortClickListener,
      toggleListener = props.toggleListener,
      lang = props.lang;

  return _react2.default.createElement(
    'div',
    { className: 'field has-addons has-addons-right' },
    _react2.default.createElement(
      'p',
      { className: 'control' },
      _react2.default.createElement(
        'a',
        { className: 'button is-primary filter-icon', onClick: toggleListener },
        _react2.default.createElement(
          'span',
          { className: 'icon' },
          _react2.default.createElement('i', { className: 'fa fa-sliders' })
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u8FC7\u6EE4\u5668'
        )
      ),
      _react2.default.createElement(
        'span',
        { className: 'select' },
        _react2.default.createElement(
          'select',
          { onChange: sortClickListener },
          _react2.default.createElement(
            'option',
            null,
            _dict2.default[lang]['sort1']
          ),
          _react2.default.createElement(
            'option',
            null,
            _dict2.default[lang]['sort2']
          ),
          _react2.default.createElement(
            'option',
            null,
            _dict2.default[lang]['sort3']
          )
        )
      )
    )
  );
};

exports.default = Sort;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": "1",
		"url": "hualinvshi.jpg",
		"baseurl": "/images/combo-section/hualinvshi",
		"price": 5000,
		"popularity": 13,
		"zh-tw": {
			"name": "女士華麗和服",
			"desc": "選擇性最多的套餐，基本上各種花色都有，淡雅的，小家碧玉的，華麗的，一般而言，會有一款是您喜歡的風格的這是江戶和裝工房--雅的人氣套餐。在有限的預算內，這個套餐是性價比比較高的一款",
			"clothNum": "200件左右",
			"acc": "半幅帶，草履，襪子，包包，和服，和服內衣，襦袢，裝飾帶",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "人氣套餐",
			"belt": "半幅帶",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "女士华丽和服",
			"desc": "选择性最多的套餐，基本上各种花色都有，淡雅的，小家碧玉的，华丽的，一般而言，会有一款是您喜欢的风格的这是江户和装工房--雅的人气套餐。在有限的预算内，这个套餐是性价比比较高的一款",
			"clothNum": "200件左右",
			"acc": "半幅带，草履，袜子，包包，和服，和服内衣，襦袢，装饰带",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "人气套餐",
			"belt": "半幅带",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "2",
		"url": "gaojihefu.jpg",
		"baseurl": "/images/combo-section/gaojihefu",
		"price": 10000,
		"popularity": 14,
		"zh-tw": {
			"name": "女士高級和服",
			"desc": "和服質地上乘，用料高於華麗款，在腰帶部分有明顯的分別，有精緻美麗的裝飾繩，和服的選擇性很多，，讓你既可以艷麗又可以典雅，性價比高，肯定有一款是您喜歡的和服。店長推薦哦",
			"clothNum": "100件左右",
			"acc": "半幅帶，草履，襪子，包包，和服，和服內衣，襦袢，精緻裝飾帶，精緻髮飾",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "精緻套餐",
			"belt": "半幅帶",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "女士高级和服",
			"desc": "和服质地上乘，用料高于华丽款，在腰带部分有明显的分别，有精致美丽的装饰绳，和服的选择性很多，，让你既可以艳丽又可以典雅，性价比高，肯定有一款是您喜欢的和服。店长推荐哦",
			"clothNum": "100件左右",
			"acc": "半幅带，草履，袜子，包包，和服，和服内衣，襦袢，精致装饰带，精致发饰",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "精致套餐",
			"belt": "半幅带",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "3",
		"url": "chengren.jpg",
		"baseurl": "/images/combo-section/chengren",
		"price": 38000,
		"popularity": 11,
		"zh-tw": {
			"name": "成人禮振袖",
			"desc": "日本的女性的成年禮是在20歲，在日本的成人禮，都是在1月，那天滿20歲的人都是穿上華麗的振袖的和服去參加自己所在地區的成人禮，非常的華麗畢竟一生中只穿一次。振袖是日本未婚女士最高規格的和服",
			"clothNum": "50件以上",
			"acc": "袋帶，草履，刺繡襪子，包包，和服，和服內衣，襦袢，帶揚，精緻裝飾帶，精緻髮飾",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "袋帶",
			"event": "成人禮 婚宴喜事"
		},
		"zh-cn": {
			"name": "成人礼振袖",
			"desc": "日本的女性的成年礼是在20岁，在日本的成人礼，都是在1月，那天满20岁的人都是穿上华丽的振袖的和服去参加自己所在地区的成人礼，非常的华丽毕竟一生中只穿一次。振袖是日本未婚女士最高规格的和服",
			"clothNum": "50件以上",
			"acc": "袋带，草履，刺绣袜子，包包，和服，和服内衣，襦袢，带扬，精致装饰带，精致发饰",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "袋带",
			"event": "成人礼 婚宴喜事"
		}
	},
	{
		"id": "4",
		"url": "gaojichengren.jpg",
		"baseurl": "/images/combo-section/gaojichengren",
		"price": 72000,
		"popularity": 5,
		"zh-tw": {
			"name": "豪華成人禮振袖",
			"desc": "最上乘的正娟材質，燙金圖案，手工刺繡，華麗非凡，給你古代皇室的頂級體驗，在日本對於成人禮重視的程度，看看振袖和服就知道了，很多父母都會不惜成本去幫兒女參加一場自己是主角的成人禮",
			"clothNum": "20件以上",
			"acc": "袋帶，草履，刺繡襪子，包包，和服，和服內衣，襦袢，半衿，帶揚，精緻裝飾帶，精緻髮飾",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "袋帶",
			"event": "成人禮 婚宴喜事"
		},
		"zh-cn": {
			"name": "豪华成人礼振袖",
			"desc": "最上乘的正娟材质，烫金图案，手工刺绣，华丽非凡，给你古代皇室的顶级体验，在日本对于成人礼重视的程度，看看振袖和服就知道了，很多父母都会不惜成本去帮儿女参加一场自己是主角的成人礼",
			"clothNum": "20件以上",
			"acc": "袋带，草履，刺绣袜子，包包，和服，和服内衣，襦袢，半衿，带扬，精致装饰带，精致发饰",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "袋带",
			"event": "成人礼 婚宴喜事"
		}
	},
	{
		"id": "5",
		"url": "mingpaihefu.jpg",
		"baseurl": "/images/combo-section/mingpaihefu",
		"price": 20000,
		"popularity": 10,
		"zh-tw": {
			"name": "名牌和服",
			"desc": "想體驗更加豪華奢侈的和服？我們為了想要變得更加華貴的客人們準備了這個名牌和服套餐，用料更精細，所有物品都是精心挑選的，特別的準備只為特別的你，值得您嘗試",
			"clothNum": "20件",
			"acc": "袋帶，草履，刺繡襪子，包包，和服，和服內衣，襦袢，精緻髮飾 ，帶揚，帶締",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "精選套餐",
			"belt": "袋帶",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "名牌和服",
			"desc": "想体验更加豪华奢侈的和服？我们为了想要变得更加华贵的客人们准备了这个名牌和服套餐，用料更精细，所有物品都是精心挑选的，特别的准备只为特别的你，值得您尝试",
			"clothNum": "20件",
			"acc": "袋带，草履，刺绣袜子，包包，和服，和服内衣，襦袢，精致发饰 ，带扬，带缔",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "精选套餐",
			"belt": "袋带",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "6",
		"url": "kua.jpg",
		"baseurl": "/images/combo-section/kua",
		"price": 20000,
		"popularity": 9,
		"zh-tw": {
			"name": "畢業典禮用袴",
			"desc": "明治時代學習院女學部長、華族女校校長、女子禮法家下田歌子把男子馬乘袴改造後的海老茶袴作為女子校服。袴也多作為女子畢業著作為畢業典禮的禮服。鞋子可以是正裝草履，也可以是靴子，配靴子是大正時期留下的穿法",
			"clothNum": "20件",
			"acc": "半幅帶，草履，刺繡襪子，包包，和服，和服內衣",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"belt": "半幅帶",
			"event": "畢業典禮"
		},
		"zh-cn": {
			"name": "毕业典礼用袴",
			"desc": "明治时代学习院女学部长、华族女校校长、女子礼法家下田歌子把男子马乘袴改造后的海老茶袴作为女子校服。袴也多作为女子毕业着作为毕业典礼的礼服。鞋子可以是正装草履，也可以是靴子，配靴子是大正时期留下的穿法",
			"clothNum": "20件",
			"acc": "半幅带，草履，刺绣袜子，包包，和服，和服内衣",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"belt": "半幅带",
			"event": "毕业典礼"
		}
	},
	{
		"id": "7",
		"url": "fangwen.jpg",
		"baseurl": "/images/combo-section/fangwen",
		"price": 20000,
		"popularity": 8,
		"zh-tw": {
			"name": "訪問者",
			"desc": "訪問著並沒有已婚未婚的分別。訪問著是整體染上圖案的和服，它從下擺，左前袖，左肩到領子展開後是一幅圖畫，特徵是稱為「絵羽(えば)」的這種形式。適合訪問著的有：友人婚宴、派對、陪同入學典禮、茶會、同學會、相親等社交場合",
			"clothNum": "20件",
			"acc": "袋帶，草履，刺繡襪子，包包，和服，和服內衣，襦袢，精緻裝飾帶，精緻髮飾",
			"hair": "包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"belt": "袋帶",
			"event": "登門拜訪"
		},
		"zh-cn": {
			"name": "访问着",
			"desc": "访问着并没有已婚未婚的分别。访问着是整体染上图案的和服，它从下摆，左前袖，左肩到领子展开后是一幅图画，特徵是称为「絵羽(えば)」的这种形式。适合访问着的有：友人婚宴、派对、陪同入学典礼、茶会、同学会、相亲等社交场合",
			"clothNum": "20件",
			"acc": "袋带，草履，刺绣袜子，包包，和服，和服内衣，襦袢，精致装饰带，精致发饰",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"belt": "袋带",
			"event": "登门拜访"
		}
	},
	{
		"id": "8",
		"url": "nvshiyouhui.jpg",
		"baseurl": "/images/combo-section/hualinvshi",
		"price": 3000,
		"popularity": 12,
		"zh-tw": {
			"name": "女士優惠和服",
			"desc": "原件5000日元，每天從5000日元中抽選20件作為優惠套餐，非常的實惠。和服較為花色樸素，每天限定，先到先得，不支持事先預約以及預留，適合年長女士的花色居多",
			"clothNum": "20件",
			"acc": "半幅帶，草履，襪子，包包，和服，和服內衣，襦袢，裝飾帶",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "和服(春冬首選)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "半幅帶",
			"event": "登門拜訪"
		},
		"zh-cn": {
			"name": "女士优惠和服",
			"desc": "原件5000日元，每天从5000日元中抽选20件作为优惠套餐，非常的实惠。和服较为花色朴素，每天限定，先到先得，不支持事先预约以及预留，适合年长女士的花色居多",
			"clothNum": "20件",
			"acc": "半幅带，草履，袜子，包包，和服，和服内衣，襦袢，装饰带",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "特惠套餐",
			"belt": "半幅带",
			"event": "登门拜访"
		}
	},
	{
		"id": "9",
		"url": "nanshihefu.jpg",
		"baseurl": "/images/combo-section/nanshihefu",
		"price": 5000,
		"popularity": 1,
		"zh-tw": {
			"name": "男士和服",
			"desc": "和服的美麗可不僅僅只屬於愛美的女生，男生也可以感受男性和服的那種莊嚴感，江戶和裝工房—雅為男士們準備了50套以上服飾用於選擇。雖然沒有女士那麼多的選擇，花色也沒有那麼鮮豔，但是男人簡單就好",
			"clothNum": "50件以上",
			"acc": "腰帶，草履，襪子，包包，和服，和服內衣，襦袢",
			"hair": "不包含髮型設計",
			"cloth-type": "和服(春冬首選)",
			"gender": "男士",
			"belt": "角帶",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "男士和服",
			"desc": "和服的美丽可不仅仅只属于爱美的女生，男生也可以感受男性和服的那种庄严感，江户和装工房—雅为男士们准备了50套以上服饰用于选择。虽然没有女士那么多的选择，花色也没有那么鲜艳，但是男人简单就好",
			"clothNum": "50件以上",
			"acc": "腰带，草履，袜子，包包，和服，和服内衣，襦袢",
			"hair": "不包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "男士",
			"belt": "角带",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "10",
		"url": "ertonghefu.jpg",
		"baseurl": "/images/combo-section/ertonghefu",
		"price": 3500,
		"popularity": 6,
		"zh-tw": {
			"name": "兒童和服",
			"desc": "可愛的孩子們穿上了可愛的兒童和服一定會變得更加可愛吧，讓孩子們穿上一套和服，全家一起散步這種場景相信都是滿滿的溫馨，，從喜歡的顏色到喜歡的花紋，從開始選擇就可以讓孩子充滿歡樂。適用的身高為95cm到140cm",
			"clothNum": "50件以上",
			"acc": "兵兒帶，草履，襪子，包包，和服，和服內衣，襦袢，和服外套",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "和服(春冬首選)",
			"gender": "兒童",
			"belt": "兵兒帶",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "儿童和服",
			"desc": "可爱的孩子们穿上了可爱的儿童和服一定会变得更加可爱吧，让孩子们穿上一套和服，全家一起散步这种场景相信都是满满的温馨，，从喜欢的颜色到喜欢的花纹，从开始选择就可以让孩子充满欢乐。适用的身高为95cm到140cm",
			"clothNum": "50件以上",
			"acc": "兵儿带，草履，袜子，包包，和服，和服内衣，襦袢，和服外套",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "和服(春冬首选)",
			"gender": "儿童",
			"belt": "兵儿带",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "11",
		"url": "nvtongzhenxiu.jpg",
		"baseurl": "/images/combo-section/nvtongzhenxiu",
		"price": 7000,
		"popularity": 2,
		"zh-tw": {
			"name": "女童振袖和服",
			"desc": "日本最華麗的兒童和服，讓小朋友瞬間變成日本小公主，漫遊古色古香的淺草寺，穿上華麗的和服，讓孩子遇見一個不一樣的自己，留下一個美好的回憶。數量不多，選擇有限，先到先得哦。適用的身高115cm到140cm。",
			"clothNum": "6件",
			"acc": "豪華腰帶，草履，襪子，包包，和服，和服內衣，襦袢",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "和服(春冬首選)",
			"gender": "兒童",
			"feature": "奢華套餐",
			"event": "各種場合都適用"
		},
		"zh-cn": {
			"name": "女童振袖和服",
			"desc": "日本最华丽的儿童和服，让小朋友瞬间变成日本小公主，漫游古色古香的浅草寺，穿上华丽的和服，让孩子遇见一个不一样的自己，留下一个美好的回忆。数量不多，选择有限，先到先得哦。适用的身高115cm到140cm。",
			"clothNum": "6件",
			"acc": "豪华腰带，草履，袜子，包包，和服，和服内衣，襦袢",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "和服(春冬首选)",
			"gender": "儿童",
			"feature": "奢华套餐",
			"event": "各种场合都适用"
		}
	},
	{
		"id": "12",
		"url": "nvshiyuyi.jpg",
		"baseurl": "/images/combo-section/nvshiyuyi",
		"price": 3500,
		"popularity": 7,
		"zh-tw": {
			"name": "女士浴衣",
			"desc": "女士浴衣是夏天限定的套餐，提供浴衣的時間是6月1號到9月15日。浴衣是簡易和服，在材料和穿法上與正式的和服都是不一樣的，質地較薄，比較休閒，花色比較艷麗，在夏天參加花火大會和一些夏祭活動的最佳著裝",
			"clothNum": "300件左右",
			"acc": "半幅帶，木屐，包包，浴衣，浴衣內衣，各種小物，裝飾帶",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "浴衣(夏秋首選)",
			"gender": "女士",
			"event": "夏季火花大會",
			"belt": "半幅帶"
		},
		"zh-cn": {
			"name": "女士浴衣",
			"desc": "女士浴衣是夏天限定的套餐，提供浴衣的时间是6月1号到9月15日。浴衣是简易和服，在材料和穿法上与正式的和服都是不一样的，质地较薄，比较休闲，花色比较艳丽，在夏天参加花火大会和一些夏祭活动的最佳着装",
			"clothNum": "300件左右",
			"acc": "半幅带，木屐，包包，浴衣，浴衣内衣，各种小物，装饰带",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "浴衣(夏秋首选)",
			"gender": "女士",
			"event": "夏季火花大会",
			"belt": "半幅带"
		}
	},
	{
		"id": "13",
		"url": "nanshiyuyi.jpg",
		"baseurl": "/images/combo-section/nanshiyuyi",
		"price": 3500,
		"popularity": 4,
		"zh-tw": {
			"name": "男士浴衣",
			"desc": "男士浴衣是夏天限定的套餐，提供浴衣的時間是6月1號到9月15日。浴衣是簡易和服，在材料和穿法上與正式的和服都是不一樣的，質地較薄，比較休閒，花色比較艷麗，是在夏天參加花火大會和一些夏祭活動的最佳著裝",
			"clothNum": "100件左右",
			"acc": "角帶，木屐，包包，浴衣，浴衣內衣，各種小物",
			"hair": "不包含髮型設計",
			"cloth-type": "浴衣(夏秋首選)",
			"gender": "男士",
			"event": "夏季火花大會",
			"belt": "角帶"
		},
		"zh-cn": {
			"name": "男士浴衣",
			"desc": "男士浴衣是夏天限定的套餐，提供浴衣的时间是6月1号到9月15日。浴衣是简易和服，在材料和穿法上与正式的和服都是不一样的，质地较薄，比较休闲，花色比较艳丽，是在夏天参加花火大会和一些夏祭活动的最佳着装",
			"clothNum": "100件左右",
			"acc": "角带，木屐，包包，浴衣，浴衣内衣，各种小物",
			"hair": "不包含发型设计",
			"cloth-type": "浴衣(夏秋首选)",
			"gender": "男士",
			"event": "夏季火花大会",
			"belt": "角带"
		}
	},
	{
		"id": "14",
		"url": "ertongyuyi.jpg",
		"baseurl": "/images/combo-section/ertongyuyi",
		"price": 3000,
		"popularity": 3,
		"zh-tw": {
			"name": "兒童浴衣",
			"desc": "可愛的孩子們穿上了可愛的浴衣一定會變得更加可愛吧，讓孩子們穿上一套浴衣，全家一起散步這種場景相信都是滿滿的溫馨，從喜歡的顏色到喜歡的花紋，從開始選擇就可以讓孩子充滿歡樂",
			"clothNum": "50件以上",
			"acc": "兵兒帶，木屐，包包，浴衣",
			"hair": "髮型設計需要追加1000日元",
			"cloth-type": "浴衣(夏秋首選)",
			"gender": "兒童",
			"belt": "兵兒帶",
			"event": "夏季火花大會"
		},
		"zh-cn": {
			"name": "儿童浴衣",
			"desc": "可爱的孩子们穿上了可爱的浴衣一定会变得更加可爱吧，让孩子们穿上一套浴衣，全家一起散步这种场景相信都是满满的温馨，从喜欢的颜色到喜欢的花纹，从开始选择就可以让孩子充满欢乐",
			"clothNum": "50件以上",
			"acc": "兵儿带，木屐，包包，浴衣",
			"hair": "发型设计需要追加1000日元",
			"cloth-type": "浴衣(夏秋首选)",
			"gender": "儿童",
			"belt": "兵儿带",
			"event": "夏季火花大会"
		}
	}
];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FaqItem = __webpack_require__(38);

var _FaqItem2 = _interopRequireDefault(_FaqItem);

var _StepItem = __webpack_require__(39);

var _StepItem2 = _interopRequireDefault(_StepItem);

var _faq = __webpack_require__(40);

var _faq2 = _interopRequireDefault(_faq);

var _step = __webpack_require__(41);

var _step2 = _interopRequireDefault(_step);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var language;

var QaSection = function (_React$Component) {
  _inherits(QaSection, _React$Component);

  function QaSection() {
    _classCallCheck(this, QaSection);

    return _possibleConstructorReturn(this, (QaSection.__proto__ || Object.getPrototypeOf(QaSection)).apply(this, arguments));
  }

  _createClass(QaSection, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      language = lang;
      return _react2.default.createElement(
        'div',
        { className: 'section qa-section container', id: 'qa-section' },
        _react2.default.createElement(
          'h1',
          { className: 'title has-text-centered is-2 font-tang' },
          _dict2.default[language]['nav-faq']
        ),
        _react2.default.createElement(
          'div',
          { className: 'tile is-ancestor' },
          _react2.default.createElement(
            'div',
            { className: 'tile is-6 is-vertical is-parent' },
            _react2.default.createElement(StepItems, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tile is-parent' },
            _react2.default.createElement(
              'div',
              { className: 'tile is-child box' },
              _react2.default.createElement(FaqItems, null)
            )
          )
        )
      );
    }
  }]);

  return QaSection;
}(_react2.default.Component);

var StepItems = function StepItems() {
  return _react2.default.createElement(
    'div',
    { className: 'step-items' },
    Array.from(_step2.default, function (step) {
      return _react2.default.createElement(_StepItem2.default, {
        key: step.id,
        title: step.title[language],
        content: step.content[language],
        url: step.url
      });
    })
  );
};

var FaqItems = function FaqItems() {
  return _react2.default.createElement(
    'div',
    { className: 'faq-items' },
    Array.from(_faq2.default, function (faq) {
      return _react2.default.createElement(_FaqItem2.default, {
        key: faq.id,
        question: faq.question[language],
        answer: faq.answer[language],
        askerName: faq.askerName[language],
        askerUrl: faq.askerUrl,
        answererName: _dict2.default[language].answererName,
        answererUrl: '/images/faq-section/service_miyabi.png'
      });
    })
  );
};

exports.default = QaSection;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaqItem = function (_React$Component) {
  _inherits(FaqItem, _React$Component);

  function FaqItem() {
    _classCallCheck(this, FaqItem);

    var _this = _possibleConstructorReturn(this, (FaqItem.__proto__ || Object.getPrototypeOf(FaqItem)).call(this));

    _this.state = {
      isHidden: true
    };
    return _this;
  }

  _createClass(FaqItem, [{
    key: 'toggleListener',
    value: function toggleListener() {
      this.setState({
        isHidden: !this.state.isHidden
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          question = _props.question,
          answer = _props.answer,
          askerName = _props.askerName,
          answererName = _props.answererName,
          askerUrl = _props.askerUrl,
          answererUrl = _props.answererUrl;

      return _react2.default.createElement(
        'article',
        { className: 'media' },
        _react2.default.createElement(
          'figure',
          { className: 'media-left' },
          _react2.default.createElement(
            'p',
            { className: 'image is-64x64' },
            _react2.default.createElement('img', { src: askerUrl, className: 'button', onClick: this.toggleListener.bind(this) })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'media-content' },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'strong',
              null,
              askerName
            ),
            _react2.default.createElement(
              'a',
              { onClick: this.toggleListener.bind(this) },
              _react2.default.createElement(
                'p',
                null,
                question
              )
            )
          ),
          _react2.default.createElement(
            'article',
            { className: (0, _classnames2.default)('media', { 'is-hidden': this.state.isHidden }) },
            _react2.default.createElement(
              'figure',
              { className: 'media-left' },
              _react2.default.createElement(
                'p',
                { className: 'image is-48x48' },
                _react2.default.createElement('img', { src: answererUrl, className: 'button', onClick: this.toggleListener.bind(this) })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'media-content' },
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'strong',
                  null,
                  answererName
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  answer
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FaqItem;
}(_react2.default.Component);

exports.default = FaqItem;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepItem = function StepItem(props) {
  var title = props.title,
      content = props.content,
      url = props.url;

  return _react2.default.createElement(
    'div',
    { className: 'tile box' },
    _react2.default.createElement(
      'div',
      { className: 'columns is-mobile' },
      _react2.default.createElement(
        'div',
        { className: 'column is-6 step-image' },
        _react2.default.createElement(
          'figure',
          { className: 'image is-128x128' },
          _react2.default.createElement('img', { src: url })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'column step-content' },
        _react2.default.createElement(
          'p',
          { className: 'title' },
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          content
        )
      )
    )
  );
};
// const StepItem = (props) => {
//   const {title, content, url} = props
//   return (
//     <div class='tile is-child box'>
//       <div class='tile is-parent'>
//         <article class='tile is-child '>
//           <p class='title'>{title}</p>
//           <p>{content}</p>
//           <figure class='image is-square'>
//             <img src={url} />
//           </figure>
//         </article>
//       </div>
//     </div>
//   )
// }

exports.default = StepItem;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"question": {
			"zh-tw": "真的可以空手而來嗎",
			"zh-cn": "真的可以空手而来吗?"
		},
		"answer": {
			"zh-tw": "是的，完全沒有問題，我們提供和服浴衣穿戴所需所有服飾配件。",
			"zh-cn": "是的，完全没有问题，我们提供和服浴衣穿戴所需所有服饰配件。"
		},
		"askerName": {
			"zh-tw": "耳機君",
			"zh-cn": "耳机君"
		},
		"askerUrl": "/images/faq-section/boy-1.png"
	},
	{
		"id": 2,
		"question": {
			"zh-tw": "穿戴完整需要花費多少時間？",
			"zh-cn": "穿戴完整需要花费多少时间？"
		},
		"answer": {
			"zh-tw": "正常情況下，女性顧客需要花費15分鐘，男生顧客需要花費10分鐘時間。有選擇髮型設計的情況可能需要額外10分鐘時間。",
			"zh-cn": "正常情况下，女性顾客需要花费15分钟，男生顾客需要花费10分钟时间。 有选择发型设计的情况可能需要额外10分钟时间。"
		},
		"askerName": {
			"zh-tw": "短髮妹",
			"zh-cn": "短发妹"
		},
		"askerUrl": "/images/faq-section/girl-1.png"
	},
	{
		"id": 3,
		"question": {
			"zh-tw": "髮飾，頭飾可以單獨租借嗎？",
			"zh-cn": "发饰，头饰可以单独租借吗？"
		},
		"answer": {
			"zh-tw": "是的，可以。小物配件都是可以單獨租賃的。對於要求髮型設計服務的顧客，我們將免費提供這些飾品",
			"zh-cn": "是的，可以。小物配件都是可以单独租赁的。对于要求发型设计服务的顾客，我们将免费提供这些饰品。"
		},
		"askerName": {
			"zh-tw": "花輪同學",
			"zh-cn": "花轮同学"
		},
		"askerUrl": "/images/faq-section/boy-2.png"
	},
	{
		"id": 4,
		"question": {
			"zh-tw": "換下來的衣服可以幫忙保管嗎",
			"zh-cn": "换下来的衣服可以帮忙保管吗?"
		},
		"answer": {
			"zh-tw": "當然可以，我們提供帶鑰匙的箱子免費供客人保存私人物品。 （貴重品除外)",
			"zh-cn": "当然可以，我们提供带钥匙的箱子免费供客人保存私人物品。（贵重品除外）"
		},
		"askerName": {
			"zh-tw": "大辮子醬",
			"zh-cn": "大辫子酱"
		},
		"askerUrl": "/images/faq-section/girl-2.png"
	},
	{
		"id": 5,
		"question": {
			"zh-tw": "如果租賃物品產生破損污漬，我應該怎麼辦",
			"zh-cn": "如果租赁物品产生破损污渍，我应该怎么办？"
		},
		"answer": {
			"zh-tw": "對於可以修復洗淨範圍內的服飾物品，無需其他任何額外費用。如果損壞而無法再次使用的情況下 根據物品種類，需要進行相應賠償。請注意與諒解",
			"zh-cn": "对于可以修复洗净范围内的服饰物品，无需其他任何额外费用。如果损坏而无法再次使用的情况下 根据物品种类，需要进行相应赔偿。请注意与谅解。"
		},
		"askerName": {
			"zh-tw": "娃娃頭",
			"zh-cn": "娃娃头"
		},
		"askerUrl": "/images/faq-section/girl-3.png"
	},
	{
		"id": 6,
		"question": {
			"zh-tw": "租賃的時間限制有多長",
			"zh-cn": "租赁的时间限制有多长？"
		},
		"answer": {
			"zh-tw": "正常情況下，租賃時間為當天的10點到18點，根據情況，這個時間有可能變化，我們會另行通知",
			"zh-cn": "正常情况下，租赁时间为当天的10点到18点，根据情况，这个时间有可能变化，我们会另行通知。"
		},
		"askerName": {
			"zh-tw": "雙馬尾醬",
			"zh-cn": "双马尾酱"
		},
		"askerUrl": "/images/faq-section/girl-4.png"
	},
	{
		"id": 7,
		"question": {
			"zh-tw": "如果當天無法歸還，我應該怎麼辦",
			"zh-cn": "如果当天无法归还，我应该怎么办？"
		},
		"answer": {
			"zh-tw": "因為特殊情況，當天無法歸還的情況下，可以選擇追加1000円，延長租賃時間至翌日中午11時。",
			"zh-cn": "因为特殊情况，当天无法归还的情况下，可以选择追加1000円，延长租赁时间至翌日中午11时。"
		},
		"askerName": {
			"zh-tw": "阿姨",
			"zh-cn": "阿姨"
		},
		"askerUrl": "/images/faq-section/girl-5.png"
	},
	{
		"id": 8,
		"question": {
			"zh-tw": "最終接待時間是什麼時候？",
			"zh-cn": "最终接待时间是什么时候？"
		},
		"answer": {
			"zh-tw": "正常情況下，我們一天的最終接待時間是17點時。客人穿完衣服後，可能只有30分鐘左右的照相時間，18點之前也要歸還給我們，如果是要過夜的客人，只要是18點之前，我們都會提供服務的，時間根據節日可能產生些許調整，擔心的客人可以聯繫我們諮詢。",
			"zh-cn": "正常情况下，我们一天的最终接待时间是17点时。客人穿完衣服后，可能只有30分钟左右的照相时间，18点之前也要归还给我们，如果是要过夜的客人，只要是18点之前，我们都会提供服务的，时间根据节日可能产生些许调整，担心的客人可以联系我们咨询。"
		},
		"askerName": {
			"zh-tw": "眼鏡哥",
			"zh-cn": "眼镜哥"
		},
		"askerUrl": "/images/faq-section/boy-3.png"
	},
	{
		"id": 9,
		"question": {
			"zh-tw": "可以攜帶自己的服飾僅僅接受穿戴服務嗎？",
			"zh-cn": "可以携带自己的服饰仅仅接受穿戴服务吗？"
		},
		"answer": {
			"zh-tw": "當然可以，我們優惠提供僅僅提供穿戴服務的套餐。但是請不要遺漏所需穿戴的配件",
			"zh-cn": "当然可以，我们优惠提供仅仅提供穿戴服务的套餐。但是请不要遗漏所需穿戴的配件。"
		},
		"askerName": {
			"zh-tw": "小丸子的媽媽",
			"zh-cn": "小丸子的妈妈"
		},
		"askerUrl": "/images/faq-section/girl-6.png"
	},
	{
		"id": 10,
		"question": {
			"zh-tw": "關於尺寸，需要特別注意嗎？",
			"zh-cn": "关于尺寸，需要特别注意吗？"
		},
		"answer": {
			"zh-tw": "只要臀圍不超過110cm的，我們都是可以提供的，小孩的身高在95cm以上的我們也可以提供的",
			"zh-cn": "只要臀围不超过110cm的，我们都是可以提供的，小孩的身高在95cm以上的我们也可以提供的"
		},
		"askerName": {
			"zh-tw": "廣場舞阿姨",
			"zh-cn": "广场舞阿姨"
		},
		"askerUrl": "/images/faq-section/girl-7.png"
	},
	{
		"id": 11,
		"question": {
			"zh-tw": "冬天到了，對於穿和服有什麼需要注意的嗎？",
			"zh-cn": "冬天到了，对于穿和服有什么需要注意的吗？"
		},
		"answer": {
			"zh-tw": "冬天氣溫下降，雖然我們在和服裡面已經準備了襯衣，但為了更加保暖，請另行準備低領的打底衣。同時由於需要 穿上開指襪，所以也請不要穿戴連體的襪褲（能露出腳部即可）",
			"zh-cn": "冬天气温下降，虽然我们在和服里面已经准备了衬衣，但为了更加保暖，请另行准备低领的打底衣。同时由于需要 穿上开指袜，所以也请不要穿戴连体的袜裤（能露出脚部即可）"
		},
		"askerName": {
			"zh-tw": "中分哥",
			"zh-cn": "中分哥"
		},
		"askerUrl": "/images/faq-section/boy-4.png"
	},
	{
		"id": 12,
		"question": {
			"zh-tw": "孕婦是否適合穿著和服呢？",
			"zh-cn": "孕妇是否适合穿着和服呢？"
		},
		"answer": {
			"zh-tw": "孕婦基本不適合穿著和服。如果實在想要體驗的話，建議3個月以上6個月以內",
			"zh-cn": "孕妇基本不适合穿着和服。如果实在想要体验的话，建议3个月以上6个月以内"
		},
		"askerName": {
			"zh-tw": "小帥哥",
			"zh-cn": "小帅哥"
		},
		"askerUrl": "/images/faq-section/boy-5.png"
	},
	{
		"id": 13,
		"question": {
			"zh-tw": "如果超過營業時間或者需要隔夜的話囧麼辦。 。 。",
			"zh-cn": "如果超过营业时间或者需要隔夜的话囧么办。。。"
		},
		"answer": {
			"zh-tw": "我們需要追加隔夜費一天1000日元，請在付款的時候告知我們",
			"zh-cn": "我们需要追加隔夜费一天1000日元，请在付款的时候告知我们"
		},
		"askerName": {
			"zh-tw": "眼鏡姐姐",
			"zh-cn": "眼镜姐姐"
		},
		"askerUrl": "/images/faq-section/girl-8.png"
	},
	{
		"id": 14,
		"question": {
			"zh-tw": "小孩子和服的尺寸範圍？",
			"zh-cn": "小孩子和服的尺寸范围？"
		},
		"answer": {
			"zh-tw": "我們可以為小孩提供的尺寸範圍是95cm到140cm為止。",
			"zh-cn": "我们可以为小孩提供的尺寸范围是95cm到140cm为止。"
		},
		"askerName": {
			"zh-tw": "原住民妹妹",
			"zh-cn": "原住民妹妹"
		},
		"askerUrl": "/images/faq-section/girl-9.png"
	},
	{
		"id": 15,
		"question": {
			"zh-tw": "是否可以用信用卡付款？",
			"zh-cn": "是否可以用信用卡付款？"
		},
		"answer": {
			"zh-tw": "我們不能夠使用信用卡，支持現金支付。",
			"zh-cn": "我们不能够使用信用卡，支持现金支付。"
		},
		"askerName": {
			"zh-tw": "時尚黑GAL",
			"zh-cn": "时尚黑GAL"
		},
		"askerUrl": "/images/faq-section/girl-10.png"
	}
];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"title": {
			"zh-tw": "第1步：預約確認",
			"zh-cn": "第1步：预约确认"
		},
		"content": {
			"zh-tw": "按照約定時間到店，到店的親，麻煩您報上預約信息，例如預約姓名，人數，還有預約的時間，我們進行確認，套餐的選擇和支付，我們來店之後再進行",
			"zh-cn": "按照约定时间到店，到店的亲，麻烦您报上预约信息，例如预约姓名，人数，还有预约的时间，我们进行确认，套餐的选择和支付，我们来店之后再进行"
		},
		"url": "/images/faq-section/step1.jpg"
	},
	{
		"id": 2,
		"title": {
			"zh-tw": "第2步：和服挑選",
			"zh-cn": "第2步：和服挑选"
		},
		"content": {
			"zh-tw": "在1樓我們工作人員進行套餐介紹，介紹完之後，親可以從琳瑯滿目的和服當中選出一款最符合自己的。日本人常說，选和服就是一場相遇，第一眼看中的都是緣分。所以親不要猶豫哦。盡情的挑選吧",
			"zh-cn": "在1楼我们工作人员进行套餐介绍，介绍完之后，亲可以从琳琅满目的和服当中选出一款最符合自己的。日本人常说，选和服就是一场相遇，第一眼看中的都是缘分。所以亲不要犹豫哦。尽情的挑选吧"
		},
		"url": "/images/faq-section/step2.jpg"
	},
	{
		"id": 3,
		"title": {
			"zh-tw": "第3步：支付",
			"zh-cn": "第3步：支付"
		},
		"content": {
			"zh-tw": "挑選結束後，我們要進行先付款，支付結束後就可以馬上去二樓進行更衣了，男士我們是在3樓進行更衣的",
			"zh-cn": "挑选结束后，我们要进行先付款，支付结束后就可以马上去二楼进行更衣了，男士我们是在3楼进行更衣的"
		},
		"url": "/images/faq-section/step3.jpg"
	},
	{
		"id": 4,
		"title": {
			"zh-tw": "第4步：存放隨時物品",
			"zh-cn": "第4步：存放随时物品"
		},
		"content": {
			"zh-tw": "到達相應樓層之後，脫下鞋子，進入更衣室，找個空的櫃子，儲存貴重的物品",
			"zh-cn": "到达相应楼层之后，脱下鞋子，进入更衣室，找个空的柜子，储存贵重的物品"
		},
		"url": "/images/faq-section/step4.jpg"
	},
	{
		"id": 5,
		"title": {
			"zh-tw": "第5步：和服更衣",
			"zh-cn": "第5步：和服更衣"
		},
		"content": {
			"zh-tw": "選好和服後，由我們的工作人員引導到2樓，由我們專業的老師進行著裝，及髮型設計。這個過程，就可以經曆日本女人的變身，親的和服體驗之旅，從此刻開始",
			"zh-cn": "选好和服后，由我们的工作人员引导到2楼，由我们专业的老师进行着装，及发型设计。这个过程，就可以经历日本女人的变身，亲的和服体验之旅，从此刻开始"
		},
		"url": "/images/faq-section/step5.jpg"
	},
	{
		"id": 6,
		"title": {
			"zh-tw": "第6步：挑選配件",
			"zh-cn": "第6步：挑选配件"
		},
		"content": {
			"zh-tw": "和服變身完畢，親就可以來到1樓，挑選自己喜歡的日式小布袋，放自己隨身攜帶的貴重物品，天冷的話，可以繼續挑選各式小披肩哦。然後工作人員，進行最後著裝確認",
			"zh-cn": "和服变身完毕，亲就可以来到1楼，挑选自己喜欢的日式小布袋，放自己随身携带的贵重物品，天冷的话，可以继续挑选各式小披肩哦。然后工作人员，进行最后着装确认"
		},
		"url": "/images/faq-section/step6.jpg"
	},
	{
		"id": 7,
		"title": {
			"zh-tw": "第7步：遊玩觀光",
			"zh-cn": "第7步：游玩观光"
		},
		"content": {
			"zh-tw": "挑選完配件之後，親，就可以自由活動啦，區域不受限制哦，當然最推薦肯定是淺草古寺，古色古香。附近也有上野公園和天空樹，可供遊玩",
			"zh-cn": "挑选完配件之后，亲，就可以自由活动啦，区域不受限制哦，当然最推荐肯定是浅草古寺，古色古香。附近也有上野公园和天空树，可供游玩"
		},
		"url": "/images/faq-section/step7.jpg"
	},
	{
		"id": 8,
		"title": {
			"zh-tw": "第8步：和服歸還",
			"zh-cn": "第8步：和服归还"
		},
		"content": {
			"zh-tw": "和服歸還時間隨時都可以哦，只要在我們的營業結束時間之前歸還即可，即18:00之前。如果親，還是對我們的和服依依不捨的話，當然可以，只要再追加1000日元，就可以隔夜啦，隔天的11點前歸還即可。不過正絹和服必須在營業結束時間18:00之前歸還",
			"zh-cn": "和服归还时间随时都可以哦，只要在我们的营业结束时间之前归还即可，即18:00之前。如果亲，还是对我们的和服依依不舍的话，当然可以，只要再追加1000日元，就可以隔夜啦，隔天的11点前归还即可。不过正绢和服必须在营业结束时间18:00之前归还"
		},
		"url": "/images/faq-section/step8.jpg"
	}
];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _intro = __webpack_require__(43);

var _intro2 = _interopRequireDefault(_intro);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _girl = __webpack_require__(44);

var _girl2 = _interopRequireDefault(_girl);

var _Wallop = __webpack_require__(7);

var _Wallop2 = _interopRequireDefault(_Wallop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var language;

var GirlsSection = function (_React$Component) {
  _inherits(GirlsSection, _React$Component);

  function GirlsSection() {
    _classCallCheck(this, GirlsSection);

    return _possibleConstructorReturn(this, (GirlsSection.__proto__ || Object.getPrototypeOf(GirlsSection)).apply(this, arguments));
  }

  _createClass(GirlsSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var girlWallop = document.querySelector('#girlWallop');
      var girlSlider = new _Wallop2.default(girlWallop);
    }
  }, {
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      language = lang;
      return _react2.default.createElement(
        'div',
        { className: 'section girls-section container', id: 'girls-section' },
        _react2.default.createElement(
          'h1',
          { className: 'title has-text-centered is-2 font-tang' },
          _dict2.default[language]['nav-girls']
        ),
        _react2.default.createElement(_intro2.default, {
          bossName: _dict2.default[language]['boss-name'],
          bossQuote: _dict2.default[language]['boss-quote']
        }),
        _react2.default.createElement(WallopSlides, null)
      );
    }
  }]);

  return GirlsSection;
}(_react2.default.Component);

var GirlCard = function GirlCard(props) {
  var snapshot = props.snapshot,
      avatar = props.avatar,
      name = props.name,
      content = props.content,
      url = props.url;

  return _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
      'div',
      { className: 'column is-half' },
      _react2.default.createElement(
        'figure',
        { className: 'image' },
        _react2.default.createElement('img', { src: snapshot })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'column info' },
      _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          _react2.default.createElement(
            'div',
            { className: 'media' },
            _react2.default.createElement(
              'div',
              { className: 'media-left' },
              _react2.default.createElement(
                'figure',
                { className: 'image is-48x48 avatar' },
                _react2.default.createElement('img', { src: avatar, alt: 'Image' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'media-content' },
              _react2.default.createElement(
                'p',
                { className: 'title is-4' },
                name,
                _react2.default.createElement(
                  'a',
                  { target: '_blank', href: url },
                  _react2.default.createElement(
                    'span',
                    { className: 'icon' },
                    _react2.default.createElement('i', { className: 'fa fa-weibo' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                content
              )
            )
          )
        )
      )
    )
  );
};

var WallopSlides = function WallopSlides() {
  return _react2.default.createElement(
    'div',
    { className: 'Wallop Wallop--slide', id: 'girlWallop' },
    _react2.default.createElement(
      'div',
      { className: 'Wallop-list' },
      Array.from(_girl2.default, function (girl) {
        return _react2.default.createElement(
          'div',
          { className: 'Wallop-item', key: girl.id },
          _react2.default.createElement(GirlCard, {
            snapshot: girl.snapshot,
            avatar: girl.avatar,
            name: girl.name[language],
            content: girl.content[language],
            url: girl.url })
        );
      })
    ),
    _react2.default.createElement('button', { className: 'Wallop-buttonPrevious button is-primary' }),
    _react2.default.createElement('button', { className: 'Wallop-buttonNext button is-primary' })
  );
};

exports.default = GirlsSection;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
  var bossName = props.bossName,
      bossQuote = props.bossQuote;

  return _react2.default.createElement(
    'div',
    { className: 'box' },
    _react2.default.createElement(
      'article',
      { className: 'media' },
      _react2.default.createElement(
        'div',
        { className: 'media-left' },
        _react2.default.createElement(
          'figure',
          { className: 'image is-64x64' },
          _react2.default.createElement('img', { src: '/images/faq-section/service_miyabi.png', alt: 'Image' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'media-content' },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'p',
            { className: 'title is-5 font-tang' },
            _react2.default.createElement(
              'strong',
              null,
              bossName
            ),
            _react2.default.createElement('br', null),
            bossQuote
          )
        ),
        _react2.default.createElement(
          'nav',
          { className: 'level is-mobile' },
          _react2.default.createElement(
            'div',
            { className: 'level-left' },
            _react2.default.createElement(
              'a',
              { className: 'level-item', target: '_blank', href: 'http://weibo.com/mymiyabi' },
              _react2.default.createElement(
                'span',
                { className: 'icon is-small' },
                _react2.default.createElement('i', { className: 'fa fa-weibo' })
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'level-item', href: '#footer' },
              _react2.default.createElement(
                'span',
                { className: 'icon is-small' },
                _react2.default.createElement('i', { className: 'fa fa-weixin' })
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'level-item', target: '_blank', href: 'https://www.facebook.com/miyabinokimono' },
              _react2.default.createElement(
                'span',
                { className: 'icon is-small' },
                _react2.default.createElement('i', { className: 'fa fa-facebook-official' })
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Intro;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"snapshot": "/images/girls-section/1.png",
		"avatar": "/images/girls-section/avatar1.jpg",
		"name": {
			"zh-tw": "aki貓咪",
			"zh-cn": "aki猫咪"
		},
		"content": {
			"zh-tw": "時尚達人，新絲路平面模特。有真小林志玲之稱的aki也多次一同與志玲參加各種活動，可見其多有人氣",
			"zh-cn": "时尚达人，新丝路平面模特。有真小林志玲之称的aki也多次一同与志玲参加各种活动，可见其多有人气"
		},
		"url": "http://weibo.com/1749156250/F1rcx8Bas"
	},
	{
		"id": 2,
		"snapshot": "/images/girls-section/2.png",
		"avatar": "/images/girls-section/avatar2.jpg",
		"name": {
			"zh-tw": "白兔uSAgi",
			"zh-cn": "白兔uSAgi"
		},
		"content": {
			"zh-tw": "品珂簽約模特，電競女神。關於淺草寺，酒紅的和服，粉紅的🌸，迷人的你",
			"zh-cn": "品珂签约模特，电竞女神。关于浅草寺，酒红的和服，粉红的🌸，迷人的你"
		},
		"url": "http://weibo.com/1959620915/DqFHczVyQ"
	},
	{
		"id": 3,
		"snapshot": "/images/girls-section/3.png",
		"avatar": "/images/girls-section/avatar3.jpg",
		"name": {
			"zh-tw": "貓力molly",
			"zh-cn": "猫力molly"
		},
		"content": {
			"zh-tw": "旅記博主圈鼻祖人物, 一個自由的環球旅行者，在5月的尾巴，'貓力亂步'到了江戶和裝工房，體驗了一回'心'與'動'的和服文化！",
			"zh-cn": "旅记博主圈鼻祖人物, 一个自由的环球旅行者，在5月的尾巴，'猫力乱步'到了江户和装工房，体验了一回'心'与'动'的和服文化！"
		},
		"url": "http://weibo.com/1908834133/EDUBUyV4H"
	},
	{
		"id": 4,
		"snapshot": "/images/girls-section/4.png",
		"avatar": "/images/girls-section/avatar4.jpg",
		"name": {
			"zh-tw": "王幼宣幼乖",
			"zh-cn": "王幼宣幼乖"
		},
		"content": {
			"zh-tw": "微電商達人。主打粉色系寫產品。裝扮也別具一格",
			"zh-cn": "微电商达人。主打粉色系写产品。装扮也别具一格"
		},
		"url": "http://weibo.com/1739049744/E1eGdhAiS"
	},
	{
		"id": 5,
		"snapshot": "/images/girls-section/5.png",
		"avatar": "/images/girls-section/avatar5.jpg",
		"name": {
			"zh-tw": "林晶瑩lily",
			"zh-cn": "林晶莹lily"
		},
		"content": {
			"zh-tw": "知名旅遊博主，攜程簽約攝影師 寫的一手好文，拍的一手好照片。",
			"zh-cn": "知名旅游博主，携程签约摄影师 写的一手好文，拍的一手好照片。"
		},
		"url": "http://weibo.com/1719984830/EB8bAlXfj"
	},
	{
		"id": 6,
		"snapshot": "/images/girls-section/6.png",
		"avatar": "/images/girls-section/avatar6.jpg",
		"name": {
			"zh-tw": "顧子沫",
			"zh-cn": "顾子沫"
		},
		"content": {
			"zh-tw": "平面模特 最是人間4月，芳菲盡",
			"zh-cn": "平面模特 最是人间4月，芳菲尽"
		},
		"url": "http://weibo.com/2422449772/EDUrE1tkd"
	},
	{
		"id": 7,
		"snapshot": "/images/girls-section/7.png",
		"avatar": "/images/girls-section/avatar7.jpg",
		"name": {
			"zh-tw": "周若雪patty",
			"zh-cn": "周若雪patty"
		},
		"content": {
			"zh-tw": "微博旅行家，各大OTA平台遊記博主，美妝博主 把旅行當作一場時裝盛宴，走過40多個國家，體驗不同的時裝魅",
			"zh-cn": "微博旅行家，各大OTA平台游记博主，美妆博主 把旅行当作一场时装盛宴，走过40多个国家，体验不同的时装魅"
		},
		"url": "http://weibo.com/1877951477/DlBv0eZrb"
	},
	{
		"id": 8,
		"snapshot": "/images/girls-section/8.png",
		"avatar": "/images/girls-section/avatar8.jpg",
		"name": {
			"zh-tw": "鹿的角",
			"zh-cn": "鹿的角"
		},
		"content": {
			"zh-tw": "微博時尚達人，調皮可愛。",
			"zh-cn": "微博时尚达人，调皮可爱。"
		},
		"url": "http://weibo.com/2690354033/EDh6ioF86"
	}
];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _about = __webpack_require__(46);

var _about2 = _interopRequireDefault(_about);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var language;

var AboutSection = function (_React$Component) {
  _inherits(AboutSection, _React$Component);

  function AboutSection() {
    _classCallCheck(this, AboutSection);

    return _possibleConstructorReturn(this, (AboutSection.__proto__ || Object.getPrototypeOf(AboutSection)).apply(this, arguments));
  }

  _createClass(AboutSection, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      language = lang;
      return _react2.default.createElement(
        'div',
        { className: 'section about-section container', id: 'about-section' },
        _react2.default.createElement(
          'h1',
          { className: 'title has-text-centered is-2 font-tang' },
          _dict2.default[language]['nav-about']
        ),
        _react2.default.createElement(VideoPlayer, null),
        _react2.default.createElement(AboutItems, null)
      );
    }
  }]);

  return AboutSection;
}(_react2.default.Component);

var VideoPlayer = function VideoPlayer() {
  return _react2.default.createElement(
    'div',
    { className: 'video-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'video' },
      _react2.default.createElement(
        'div',
        { className: 'wistia_responsive_padding',
          style: { padding: '56.5% 0 0 0',
            position: 'relative'
          } },
        _react2.default.createElement(
          'div',
          { className: 'wistia_responsive_wrapper',
            style: {
              height: '100%',
              left: '0',
              position: 'absolute',
              top: '0',
              width: '100%'
            } },
          _react2.default.createElement(
            'span',
            { className: 'wistia_embed wistia_async_phknks26n7 popover=true popoverAnimateThumbnail=true videoFoam=true',
              style: {
                display: 'inline-block',
                height: '100%',
                width: '100%'
              } },
            '\xA0'
          )
        )
      )
    )
  );
};

var AboutItems = function AboutItems() {
  return _react2.default.createElement(
    'div',
    { className: 'about-items container' },
    Array.from(_about2.default, function (about) {
      return _react2.default.createElement(AboutItem, {
        key: about.id,
        title: about.title[language],
        content: about.content[language],
        url: about.url,
        reverse: about.id % 2 === 0
      });
    })
  );
};

var AboutItem = function AboutItem(props) {
  var title = props.title,
      content = props.content,
      url = props.url,
      reverse = props.reverse;

  if (reverse) {
    return _react2.default.createElement(
      'div',
      { className: 'tile box about-item' },
      _react2.default.createElement(
        'div',
        { className: 'columns is-mobile' },
        _react2.default.createElement(
          'div',
          { className: 'column about-content' },
          _react2.default.createElement(
            'p',
            { className: 'title' },
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            content
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'column is-6 about-image' },
          _react2.default.createElement(
            'figure',
            { className: 'image is-128x128' },
            _react2.default.createElement('img', { src: url })
          )
        )
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'tile box about-item' },
    _react2.default.createElement(
      'div',
      { className: 'columns is-mobile' },
      _react2.default.createElement(
        'div',
        { className: 'column is-6 about-image' },
        _react2.default.createElement(
          'figure',
          { className: 'image is-128x128' },
          _react2.default.createElement('img', { src: url })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'column about-content' },
        _react2.default.createElement(
          'p',
          { className: 'title' },
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          content
        )
      )
    )
  );
};

exports.default = AboutSection;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"title": {
			"zh-cn": "地理位置绝佳",
			"zh-tw": "地理位置絕佳"
		},
		"content": {
			"zh-cn": "进，可步行三分到达旅游胜地，浅草寺，退，可在有日本特色的，人烟稀少的街道取景拍摄，不想拍游客照的您，不想以人群作为背景的您，想要排除有日本味道照片的您，我们是您在浅草体验和服的最佳选择",
			"zh-tw": "進，可步行三分到達旅遊勝地，淺草寺，退，可在有日本特色的，人煙稀少的街道取景拍攝，不想拍遊客照的您，不想以人群作為背景的您，想要排除有日本味道照片的您，我們是您在淺草體驗和服的最佳選擇"
		},
		"url": "/images/about-section/0.jpg"
	},
	{
		"id": 2,
		"title": {
			"zh-cn": "物美价廉",
			"zh-tw": ""
		},
		"content": {
			"zh-cn": "江户和装工房—雅所有的套餐的价格都是明码实价的，所有的套餐都包括穿着和服所需要的所有的物品，有无发型也都清楚标注，绝无隐性消费。套餐之间可以自由的加价升级。拍照所用的小道具，油纸伞，面具，扇子，一律免费提供，数量有限，先到先得。",
			"zh-tw": "江戶和裝工房—雅所有的套餐的價格都是明碼實價的，所有的套餐都包括穿著和服所需要的所有的物品，有無髮型也都清楚標註，絕無隱性消費。套餐之間可以自由的加價升級。拍照所用的小道具，油紙傘，面具，扇子，一律免費提供，數量有限，先到先得。"
		},
		"url": "/images/about-section/2.jpg"
	},
	{
		"id": 3,
		"title": {
			"zh-cn": "尊重传统，专注细节",
			"zh-tw": "尊重傳統，專注細節"
		},
		"content": {
			"zh-cn": "提供最为传统的和服穿着，不省略任何一个步骤。江户和装工房--雅的和服老师平均资历都是达到25年以上的，和服对于她们而言不仅仅是一份工作，更多的是一种情怀，一份热衷。能够让更多喜爱和服文化的人们穿上漂亮的和服，并让正宗的和服文化传承下去, 对和服老师而言就是最大的安慰",
			"zh-tw": "提供最為傳統的和服穿著，不省略任何一個步驟。江戶和裝工房--雅的和服老師平均資歷都是達到25年以上的，和服對於她們而言不僅僅是一份工作，更多的是一種情懷，一份熱衷。能夠讓更多喜愛和服文化的人們穿上漂亮的和服，並讓正宗的和服文化傳承下去, 對和服老師而言就是最大的安慰"
		},
		"url": "/images/about-section/3.jpg"
	},
	{
		"id": 4,
		"title": {
			"zh-cn": "贴心中文服务",
			"zh-tw": "貼心中文服務"
		},
		"content": {
			"zh-cn": "免费的中文小客服，免费提供化妆品以及化妆台，免费提供带锁储物柜。一切的附加服务，都是为了让您更好的进行一次和服文化体验。添加我们的客服，妈妈就再也不会担心我在日本迷路了，有任何不懂的问题都可以咨询我的客服，我们一定尽力解答。",
			"zh-tw": "免費的中文小客服，免費提供化妝品以及化妝台，免費提供帶鎖儲物櫃。一切的附加服務，都是為了讓您更好的進行一次和服文化體驗。添加我們的客服，媽媽就再也不會擔心我在日本迷路了，有任何不懂的問題都可以諮詢我的客服，我們一定盡力解答。"
		},
		"url": "/images/about-section/1.jpg"
	},
	{
		"id": 5,
		"title": {
			"zh-cn": "和服种类众多",
			"zh-tw": "和服種類眾多"
		},
		"content": {
			"zh-cn": "合计1000件以上的和服在库，选择种类众多，总有一件和服是在等待着和您相遇的。”着物が出会い”、这是一家有200多年历史的和服店的86岁会长告诉我们的一句话，穿和服就是一场相遇。江户和装工房--雅和服种类众多，总有一件和服是为您等待的",
			"zh-tw": "合計1000件以上的和服在庫，選擇種類眾多，總有一件和服是在等待著和您相遇的。 ”著物が出會い”、這是一家有200多年曆史的和服店的86歲會長告訴我們的一句話，穿和服就是一場相遇。江戶和裝工房--雅和服種類眾多，總有一件和服是為您等待的"
		},
		"url": "/images/about-section/4.jpg"
	}
];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterSection = function FooterSection(props) {
  var lang = props.lang;

  return _react2.default.createElement(
    'div',
    { className: 'section footer-section container', id: 'footer-section' },
    _react2.default.createElement(
      'footer',
      { id: 'footer' },
      _react2.default.createElement(
        'ul',
        { className: 'contact-list has-text-centered' },
        _react2.default.createElement(
          'li',
          { className: 'email' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-envelope' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _dict2.default[lang]['email-name'],
            ': Service@mymiyabi.com'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'phone' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-phone' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _dict2.default[lang]['contact-name1'],
            ': 03-6802-3566'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'phone' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-phone-square' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _dict2.default[lang]['contact-name2'],
            ': 080-3353-7888'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'address' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-map-marker' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://goo.gl/maps/JP86SivD6C82', target: '_blank' },
              _dict2.default[lang]['location-1']
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'address' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-location-arrow' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://goo.gl/maps/24vBAU8ijTo', target: '_blank' },
              _dict2.default[lang]['location-2']
            )
          )
        )
      ),
      _react2.default.createElement('img', { src: '/images/barcode_tn.jpg', id: 'barcode' }),
      _react2.default.createElement(
        'a',
        { href: 'http://weibo.com/mymiyabi', target: '_blank', className: 'social-icn' },
        _react2.default.createElement('img', { src: '/images/icn/ic_sina-weibo.svg', alt: 'weibo', className: 'button' })
      ),
      _react2.default.createElement(
        'a',
        { href: 'https://www.facebook.com/miyabinokimono', target: '_blank', className: 'social-icn' },
        _react2.default.createElement('img', { src: '/images/icn/ic_facebook.svg', alt: 'facebook', className: 'button' })
      ),
      _react2.default.createElement(
        'a',
        { href: 'https://www.instagram.com/tokyo_kimono_miyabi', target: '_blank', className: 'social-icn' },
        _react2.default.createElement('img', { src: '/images/icn/ic_instagram.svg', alt: 'instagram', className: 'button' })
      ),
      _react2.default.createElement(
        'a',
        { href: 'http://m.dianping.com/appshare/shop/32347442', target: '_blank', className: 'social-icn' },
        _react2.default.createElement('img', { src: '/images/icn/ic_dianping.svg', alt: 'dianping', className: 'button' })
      ),
      _react2.default.createElement(
        'a',
        { href: '#hero-section', className: 'social-icn' },
        _react2.default.createElement('img', { src: '/images/icn/ic_up.svg', alt: 'dianping', className: 'button' })
      )
    )
  );
};

exports.default = FooterSection;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = __webpack_require__(9);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _CalendarSection = __webpack_require__(10);

var _FormSection = __webpack_require__(76);

var _FormSection2 = _interopRequireDefault(_FormSection);

var _ConfirmSection = __webpack_require__(79);

var _ConfirmSection2 = _interopRequireDefault(_ConfirmSection);

var _NoMatch = __webpack_require__(16);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import dict from '../dict'


var language;

var BookingPage = function (_React$Component) {
  _inherits(BookingPage, _React$Component);

  function BookingPage() {
    _classCallCheck(this, BookingPage);

    var _this = _possibleConstructorReturn(this, (BookingPage.__proto__ || Object.getPrototypeOf(BookingPage)).call(this));

    _this.state = {
      isRightHidden: true,
      isleftHidden: false,
      m: (0, _momentTimezone2.default)().tz('Asia/Tokyo'),
      data: {
        name: '',
        location: [''],
        number_male: '',
        number_female: '',
        number_children: '',
        phone: '',
        via: [''],
        wechat: ''
      }
    };
    return _this;
  }

  _createClass(BookingPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      language = this.props.lang;
      this.state.m.locale(language);
      var match = this.props.match;
      return _react2.default.createElement(
        'div',
        { className: 'booking-page' },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '' + match.url,
            render: function render(props) {
              return (
                // <CalendarSection
                _react2.default.createElement(_CalendarSection.CalendarSection, _extends({}, props, {
                  language: language,
                  isleftHidden: _this2.state.isleftHidden,
                  isRightHidden: _this2.state.isRightHidden,
                  m: _this2.state.m,
                  handleChange: _this2.handleChange.bind(_this2),
                  handleSave: _this2.handleSave.bind(_this2),
                  repickTime: _this2.repickTime.bind(_this2)
                }))
              );
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/form',
            render: function render(props) {
              return _react2.default.createElement(_FormSection2.default, _extends({}, props, {
                lang: language,
                setFormData: _this2.setFormData.bind(_this2)
              }));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/confirm',
            render: function render(props) {
              return _react2.default.createElement(_ConfirmSection2.default, _extends({}, props, {
                lang: language,
                data: _this2.state.data,
                moment: _this2.state.m
              }));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NoMatch2.default })
        )
      );
    }
  }, {
    key: 'setFormData',
    value: function setFormData(formData) {
      this.setState({
        data: formData
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(m) {
      this.setState({ m: m });
      // let currentTokyoTime = this.state.m.tz('Asia/Tokyo').format('YYYY-MM-DD-HH-mm')
      // setDateAnimation(currentTokyoTime.split('-'))
      // $('#step1-button').removeClass('hidden-section')
    }
  }, {
    key: 'handleSave',
    value: function handleSave(e) {
      this.setState({
        isRightHidden: false,
        isleftHidden: true
      });
    }
  }, {
    key: 'repickTime',
    value: function repickTime(e) {
      this.setState({
        isRightHidden: true,
        isleftHidden: false
      });
    }
  }]);

  return BookingPage;
}(_react2.default.Component);

exports.default = BookingPage;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(3);
var blacklist = __webpack_require__(11);
var React = __webpack_require__(0);
var Calendar = __webpack_require__(50);
var Time = __webpack_require__(69);
var dict = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'InputMoment',

  getInitialState: function getInitialState() {
    return {
      tab: 0
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prevMonthIcon: 'ion-ios-arrow-left',
      nextMonthIcon: 'ion-ios-arrow-right'
    };
  },
  render: function render() {
    var lang = this.props.lang;
    var DATE_TAB_NAME = dict[lang]['date'];
    var TIME_TAB_NAME = dict[lang]['time'];
    var SAVE_BUTTON_NAME = dict[lang]['next-step'];
    var tab = this.state.tab;
    var m = this.props.moment;
    var props = blacklist(this.props, 'className', 'moment', 'prevMonthIcon', 'nextMonthIcon', 'onSave', 'initForm');
    props.className = cx('m-input-moment', this.props.className);

    return React.createElement(
      'div',
      props,
      React.createElement(
        'div',
        { className: 'options' },
        React.createElement(
          'button',
          { type: 'button', className: cx('ion-calendar im-btn', { 'is-active': tab === 0 }), onClick: this.handleClickTab.bind(null, 0) },
          React.createElement(
            'span',
            { className: 'icon' },
            React.createElement('i', { className: 'fa fa-calendar is-small' })
          ),
          DATE_TAB_NAME
        ),
        React.createElement(
          'button',
          { type: 'button', className: cx('ion-clock im-btn', { 'is-active': tab === 1 }), onClick: this.handleClickTab.bind(null, 1) },
          React.createElement(
            'span',
            { className: 'icon' },
            React.createElement('i', { className: 'fa fa-clock-o is-small' })
          ),
          TIME_TAB_NAME
        )
      ),
      React.createElement(
        'div',
        { className: 'tabs' },
        React.createElement(Calendar, {
          className: cx('tab', { 'is-active': tab === 0 }),
          moment: m,
          onChange: this.props.onChange,
          prevMonthIcon: this.props.prevMonthIcon,
          nextMonthIcon: this.props.nextMonthIcon,
          weeks: dict[lang]['weeks']
        }),
        React.createElement(Time, {
          className: cx('tab', { 'is-active': tab === 1 }),
          moment: m,
          onChange: this.props.onChange,
          hour: dict[lang]['hour'],
          minute: dict[lang]['minute']
        })
      ),
      React.createElement(
        'button',
        { type: 'button', className: 'im-btn btn-save',
          onClick: this.handleSave },
        React.createElement(
          'span',
          { className: 'icon' },
          React.createElement('i', { className: 'fa fa-arrow-right is-small' })
        ),
        SAVE_BUTTON_NAME
      )
    );
  },
  handleClickTab: function handleClickTab(tab, e) {
    e.preventDefault();
    this.setState({ tab: tab });
  },
  handleSave: function handleSave(e) {
    e.preventDefault();
    if (this.state.tab === 1) {
      // $('#booking-section').removeClass('hidden-section')
      // let time = $('.date-time').text()
      // $(document).scrollTop($('cf-chat').offset().top)
      this.props.onSave();
      this.setState({ tab: 0 });
    } else {
      this.setState({ tab: 1 });
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(3);
var blacklist = __webpack_require__(11);
var React = __webpack_require__(0);
var range = __webpack_require__(51);
var chunk = __webpack_require__(66);
var moment = __webpack_require__(9);

var today = moment().tz('Asia/Tokyo');
var firstDayOfThisMonth = today.clone().date(1);

var Day = React.createClass({
  displayName: 'Day',

  render: function render() {
    var i = this.props.i;
    var w = this.props.w;
    var prevMonth = w === 0 && i > 7;
    var nextMonth = w >= 4 && i <= 14;
    var props = blacklist(this.props, 'i', 'w', 'd', 'className', 'm');
    props.className = cx({
      'prev-month': prevMonth,
      'next-month': nextMonth,
      'current-day': !prevMonth && !nextMonth && i === this.props.d,
      'is-disabled': false
    });

    return React.createElement(
      'td',
      props,
      i
    );
  }
});

module.exports = React.createClass({
  displayName: 'Calendar',

  render: function render() {
    var _this = this;

    var m = this.props.moment;
    var d = m.date();
    var d1 = m.clone().subtract(1, 'month').endOf('month').date();
    var d2 = m.clone().date(1).day();
    var d3 = m.clone().endOf('month').date();

    var days = [].concat(range(d1 - d2 + 1, d1 + 1), range(1, d3 + 1), range(1, 42 - d3 - d2 + 1));

    // var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']// en
    var weeks = this.props.weeks;
    // var weeks = this.props.week

    return React.createElement(
      'div',
      { className: cx('m-calendar', this.props.className) },
      React.createElement(
        'div',
        { className: 'toolbar' },
        React.createElement(
          'button',
          { type: 'button', className: 'prev-month', onClick: this.prevMonth },
          React.createElement(
            'span',
            { className: 'icon' },
            React.createElement('i', { className: 'fa fa-chevron-left is-small' })
          )
        ),
        React.createElement(
          'span',
          { className: 'current-date' },
          m.format('MMMM YYYY')
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'next-month', onClick: this.nextMonth },
          React.createElement(
            'span',
            { className: 'icon' },
            React.createElement('i', { className: 'fa fa-chevron-right is-small' })
          )
        )
      ),
      React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            weeks.map(function (w, i) {
              return React.createElement(
                'td',
                { key: i },
                w
              );
            })
          )
        ),
        React.createElement(
          'tbody',
          null,
          chunk(days, 7).map(function (row, w) {
            return React.createElement(
              'tr',
              { key: w },
              row.map(function (i) {
                return React.createElement(Day, { key: i, i: i, d: d, w: w,
                  onClick: _this.selectDate.bind(null, i, w),
                  m: _this.props.moment
                });
              })
            );
          })
        )
      )
    );
  },
  selectDate: function selectDate(i, w) {
    var prevMonth = w === 0 && i > 7;
    var nextMonth = w >= 4 && i <= 14;
    var m = this.props.moment.clone();

    m.date(i);
    if (prevMonth) {
      m.subtract(1, 'month');
    }
    if (nextMonth) {
      m.add(1, 'month');
    }
    if (m > today) {
      this.props.onChange(m);
    }
  },
  prevMonth: function prevMonth(e) {
    e.preventDefault();
    var m = this.props.moment.clone();
    m.subtract(1, 'month');
    if (m >= firstDayOfThisMonth) {
      this.props.onChange(m);
    }
  },
  nextMonth: function nextMonth(e) {
    e.preventDefault();
    var m = this.props.moment.clone();
    m.add(1, 'month');
    this.props.onChange(m);
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(52);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(53),
    isIterateeCall = __webpack_require__(12),
    toFinite = __webpack_require__(15);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(56),
    isLength = __webpack_require__(61);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObject = __webpack_require__(6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(58);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6),
    isSymbol = __webpack_require__(64);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(65);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(67),
    isIterateeCall = __webpack_require__(12),
    toInteger = __webpack_require__(68);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(15);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(3);
var React = __webpack_require__(0);
var InputSlider = __webpack_require__(70);

module.exports = React.createClass({
  displayName: 'Time',

  render: function render() {
    var m = this.props.moment;
    var HOUR_NAME = this.props.hour;
    var MINITUE_NAME = this.props.minute;

    return React.createElement(
      'div',
      { className: cx('m-time', this.props.className) },
      React.createElement(
        'div',
        { className: 'showtime' },
        React.createElement(
          'span',
          { className: 'time' },
          m.format('HH')
        ),
        React.createElement(
          'span',
          { className: 'separater' },
          ':'
        ),
        React.createElement(
          'span',
          { className: 'time' },
          m.format('mm')
        )
      ),
      React.createElement(
        'div',
        { className: 'sliders' },
        React.createElement(
          'div',
          { className: 'time-text' },
          HOUR_NAME
        ),
        React.createElement(InputSlider, {
          className: 'u-slider-time',
          xmin: 9,
          xmax: 18,
          x: m.hour(),
          onChange: this.changeHours
        }),
        React.createElement(
          'div',
          { className: 'time-text' },
          MINITUE_NAME
        ),
        React.createElement(InputSlider, {
          className: 'u-slider-time',
          xmin: 0,
          xmax: 59,
          x: m.minute(),
          onChange: this.changeMinutes
        })
      )
    );
  },
  changeHours: function changeHours(pos) {
    var m = this.props.moment;
    m.hours(parseInt(pos.x, 10));
    this.props.onChange(m);
  },
  changeMinutes: function changeMinutes(pos) {
    var m = this.props.moment;
    m.minutes(parseInt(pos.x, 10));
    this.props.onChange(m);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-input-slider");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(74)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./input-moment.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./input-moment.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)(undefined);
// imports


// module
exports.push([module.i, ".m-calendar {\n  display: inline-block;\n}\n.m-calendar table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n}\n.m-calendar td {\n  padding: 8px 0;\n  text-align: center;\n  cursor: pointer;\n  color: #dfe0e4;\n  border: 1px solid #dfe0e4;\n}\n.m-calendar thead td {\n  color: #28a1fc;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.m-calendar tbody td {\n  color: #666666;\n}\n.m-calendar tbody td:hover {\n  background: #28a1fc;\n  border-color: #28a1fc;\n  color: #ffffff;\n}\n.m-calendar .current-day {\n  color: #28a1fc;\n  font-weight: bold;\n}\n.m-calendar .prev-month,\n.m-calendar .next-month {\n  color: #999999;\n}\n.m-calendar .toolbar {\n  line-height: 30px;\n  color: #28a1fc;\n  text-align: center;\n  margin-bottom: 13px;\n}\n.m-calendar .toolbar button {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  color: #ffffff;\n  border: 1px solid #28a1fc;\n  border-radius: 50%;\n  background: #28a1fc;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n  outline: 0;\n  z-index: 5;\n  cursor: pointer;\n}\n.m-calendar .toolbar .prev-month {\n  float: left;\n}\n.m-calendar .toolbar .next-month {\n  float: right;\n}\n.m-calendar .toolbar .current-date {\n  color: #28a1fc;\n}\n.m-time {\n  color: #ffffff;\n}\n.m-time .showtime {\n  padding-top: 50px;\n  text-align: center;\n}\n.m-time .separater {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: bold;\n  color: #28a1fc;\n  width: 32px;\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n}\n.m-time .time-text {\n  position: relative;\n  left: -10px;\n  font-size: 15px;\n  color: #28a1fc;\n  margin-top: 7px;\n  margin-bottom: 10px;\n}\n.m-time .sliders {\n  padding: 0 10px;\n}\n.m-time .time {\n  width: 65px;\n  height: 65px;\n  display: inline-block;\n  font-size: 38px;\n  line-height: 65px;\n  background-color: #28a1fc;\n  border-radius: 3px;\n  text-align: center;\n}\n.u-slider-time {\n  position: relative;\n  display: inline-block;\n  background-color: #dfe0e4;\n  border-radius: 3px;\n  height: 4px;\n  width: 100%;\n  cursor: pointer;\n}\n.u-slider-time .value {\n  position: absolute;\n  background-color: #28a1fc;\n  border-radius: 3px;\n  top: 0;\n  height: 100%;\n}\n.u-slider-time .handle {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n}\n.u-slider-time .handle:after {\n  position: relative;\n  display: block;\n  content: '';\n  top: -10px;\n  left: -12px;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 3px solid #28a1fc;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.im-btn {\n  display: inline-block;\n  background-color: #ffffff;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  line-height: 1;\n}\n.im-btn:before {\n  margin-right: 6px;\n}\n.m-input-moment {\n  display: inline-block;\n  width: 300px;\n  padding: 12px 15px;\n  border-radius: 3px;\n  border: 1px solid #dfe0e4;\n}\n.m-input-moment .options {\n  width: 100%;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.m-input-moment .options button {\n  float: left;\n  width: 50%;\n  color: #28a1fc;\n  text-align: center;\n  font-size: 16px;\n  padding: 7px;\n  border: 1px solid #28a1fc;\n  border-radius: 3px;\n}\n.m-input-moment .options button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.m-input-moment .options button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.m-input-moment .options button.is-active {\n  color: #ffffff;\n  background-color: #28a1fc;\n}\n.m-input-moment .tab {\n  display: none;\n  height: 310px;\n}\n.m-input-moment .tab.is-active {\n  display: block;\n}\n.m-input-moment .tabs {\n  margin-bottom: 11px;\n}\n.m-input-moment .btn-save {\n  display: block;\n  margin-top: 10px;\n  width: 100%;\n  background-color: #28a1fc;\n  padding: 12px 0;\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(75);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 75 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _history = __webpack_require__(77);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cf */


var language;

var contextStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  zIndex: 250
};

var FormSection = function (_React$Component) {
  _inherits(FormSection, _React$Component);

  function FormSection() {
    _classCallCheck(this, FormSection);

    return _possibleConstructorReturn(this, (FormSection.__proto__ || Object.getPrototypeOf(FormSection)).apply(this, arguments));
  }

  _createClass(FormSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      initForm(this.props.setFormData);
    }
  }, {
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      language = lang;

      return _react2.default.createElement(
        'section',
        { className: 'form-section section', id: 'form-section' },
        _react2.default.createElement(
          'div',
          { style: contextStyle, id: 'robot-form-context' },
          _react2.default.createElement(
            'form',
            { id: 'robot-form' },
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language].question1,
              'cf-input-placeholder': _dict2.default[language].placeHolder1,
              className: 'input',
              type: 'text',
              name: 'name',
              required: true
            }),
            _react2.default.createElement(
              'radiogroup',
              {
                is: true,
                'cf-questions': _dict2.default[language]['say-hello'] + ' {previous-answer} ' + _dict2.default[language].question2
              },
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].location1,
                value: '\u6D45\u8349',
                name: 'location'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].location2,
                value: '\u4E0A\u91CE',
                name: 'location'
              })
            ),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question3_1'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder3_1'],
              className: 'input',
              type: 'text',
              name: 'number_male',
              required: true
            }),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question3_2'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder3_2'],
              className: 'input',
              type: 'text',
              name: 'number_female',
              required: true
            }),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question3_3'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder3_3'],
              className: 'input',
              type: 'text',
              name: 'number_children',
              required: true
            }),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question4'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder4'],
              className: 'input',
              type: 'text',
              name: 'email',
              required: true
            }),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question5'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder5'],
              className: 'input',
              type: 'text',
              name: 'wechat'
            }),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question6'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder6'],
              className: 'input',
              type: 'text',
              name: 'phone'
            }),
            _react2.default.createElement(
              'radiogroup',
              {
                is: true,
                'cf-questions': _dict2.default[language].question7
              },
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via1,
                value: '\u5927\u4F17\u70B9\u8BC4',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via2,
                value: '\u641C\u7D22\u5F15\u64CE',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via3,
                value: '\u670B\u53CB\u4ECB\u7ECD',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via4,
                value: '\u65B0\u6D6A\u5FAE\u535A',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via5,
                value: 'Facebook',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via6,
                value: '\u6742\u5FD7',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via7,
                value: '\u65C5\u6E38\u653B\u7565',
                name: 'via'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].via8,
                value: '\u5176\u4ED6',
                name: 'via'
              })
            ),
            _react2.default.createElement('input', {
              is: true,
              'cf-questions': _dict2.default[language]['question8'],
              'cf-input-placeholder': _dict2.default[language]['placeHolder8'],
              className: 'input',
              type: 'text',
              name: 'requirement'
            }),
            _react2.default.createElement(
              'radiogroup',
              {
                is: true,
                'cf-questions': _dict2.default[language].question9
              },
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language]['confirm-answer'],
                value: 'yes',
                name: 'yesorno'
              })
            )
          )
        )
      );
    }
  }]);

  return FormSection;
}(_react2.default.Component);

function initForm(setFormData) {
  if (window.ConversationalForm) {
    window.ConversationalForm.remove();
  }
  var conversationalForm = new cf.ConversationalForm({
    formEl: document.getElementById('robot-form'),
    context: document.getElementById('robot-form-context'),
    userImage: '/images/user.png',
    robotImage: '/images/faq-section/service_miyabi.png',
    dictionaryData: {
      'input-placeholder': _dict2.default[language]['input-placeholder'],
      'input-placeholder-required': _dict2.default[language]['input-placeholder-required'],
      'user-reponse-missing': _dict2.default[language]['user-reponse-missing'],
      'user-reponse-missing-group': _dict2.default[language]['user-reponse-missing-group'],
      'input-placeholder-error': _dict2.default[language]['input-placeholder-error'],
      'entry-not-found': _dict2.default[language]['entry-not-found'],
      'group-placeholder': _dict2.default[language]['group-placeholder'],
      'input-no-filter': _dict2.default[language]['input-no-filter'],
      'user-reponse-and': _dict2.default[language]['user-reponse-and'],
      'general': _dict2.default[language]['general']
    }, // empty will throw error
    submitCallback: function submitCallback() {
      var formData = conversationalForm.getFormData(true);
      setFormData(formData);
      _history2.default.push('/booking/confirm');
    }
  });
}

exports.default = FormSection;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(78);

exports.default = (0, _history.createBrowserHistory)({
  /* pass a configuration object here if needed */
});

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(1);

var _dict2 = _interopRequireDefault(_dict);

var _CalendarSection = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(2);

var _jquery = __webpack_require__(8);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmSection = function (_React$Component) {
  _inherits(ConfirmSection, _React$Component);

  function ConfirmSection() {
    _classCallCheck(this, ConfirmSection);

    return _possibleConstructorReturn(this, (ConfirmSection.__proto__ || Object.getPrototypeOf(ConfirmSection)).apply(this, arguments));
  }

  _createClass(ConfirmSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lang = _props.lang,
          data = _props.data,
          moment = _props.moment;

      data.time = moment.format('LLLL');
      data.language = lang;
      console.log(data);
      _jquery2.default.ajax({
        url: '/email',
        type: 'POST',
        data: data,
        success: function success(data) {},
        error: function error(err) {
          console.log(err);
        }
      });
      return _react2.default.createElement(
        'section',
        { className: 'confirm-section section container' },
        _react2.default.createElement(
          'h1',
          { className: 'title has-text-centered is-2 font-tang' },
          _dict2.default[lang]['nav-confirm']
        ),
        _react2.default.createElement(
          'table',
          { className: 'table is-striped' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-address-book' })
                ),
                _dict2.default[lang]['table-name']
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  data['name']
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-clock-o' })
                ),
                _dict2.default[lang]['table-time']
              ),
              _react2.default.createElement(
                'td',
                null,
                moment.format('LLLL')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-home' })
                ),
                _dict2.default[lang]['table-location']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['location'][0]
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-male' })
                ),
                _dict2.default[lang]['table-male-num']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['number_male']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-female' })
                ),
                _dict2.default[lang]['table-female-num']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['number_female']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-child' })
                ),
                _dict2.default[lang]['table-children-num']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['number_children']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-phone' })
                ),
                _dict2.default[lang]['table-phone']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['phone']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-envelope' })
                ),
                _dict2.default[lang]['table-email']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['email']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-weixin' })
                ),
                _dict2.default[lang]['table-wechat']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['wechat']
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'icon is-primary button' },
                  _react2.default.createElement('i', { className: 'fa fa-thumbs-o-up' })
                ),
                _dict2.default[lang]['table-requirement']
              ),
              _react2.default.createElement(
                'td',
                null,
                data['requirement']
              )
            )
          )
        ),
        _react2.default.createElement(_CalendarSection.Message, { title: _dict2.default[lang]['confirm-title-1'],
          content: _dict2.default[lang]['confirm-msg-1'] + data['email'],
          styleClass: 'is-danger',
          iconName: 'fa-heart'
        }),
        _react2.default.createElement(_CalendarSection.Message, { title: _dict2.default[lang]['confirm-title-2'],
          content: _dict2.default[lang]['confirm-msg-2'],
          styleClass: 'is-primary',
          iconName: 'fa-calendar'
        }),
        _react2.default.createElement(
          'div',
          { className: 'level' },
          _react2.default.createElement(
            'div',
            { className: 'level-item button-links has-text-centered' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'button is-primary' },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-home' })
              ),
              _react2.default.createElement(
                'span',
                { className: 'font-tang' },
                _dict2.default[lang]['nav-return']
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'level-item button-links has-text-centered' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/booking', className: 'button is-primary' },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-calendar' })
              ),
              _react2.default.createElement(
                'span',
                { className: 'font-tang' },
                _dict2.default[lang]['repick-time']
              )
            )
          )
        )
      );
    }
  }]);

  return ConfirmSection;
}(_react2.default.Component);

exports.default = ConfirmSection;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(4);
var router = express.Router();
var nodemailer = __webpack_require__(81);
var pug = __webpack_require__(82);
var path = __webpack_require__(5);

var language = 'zh-cn';

router.post('/', function (req, res, next) {
  try {
    var time = req.body.time;
    var name = req.body.name;
    var email = req.body.email;
    var wechat = req.body.wechat;
    var phone = req.body.phone;
    var requirement = req.body.requirement; // 此处var req会造成之后的bug， req貌似会影响的参数req的赋值
    var via = req.body['via[]'];
    var location = req.body['location[]'];
    var maleNumber = req.body.number_male;
    var femaleNumber = req.body.number_female;
    var childrenNumber = req.body.number_children;
    language = req.body.language;
  } catch (err) {
    console.log(err);
  }
  sendMail(name, location, maleNumber, femaleNumber, childrenNumber, email, phone, via, requirement, time, wechat, language);
  res.send({ success: true });
});

// setup email data with unicode symbols
function sendMail(name, location, maleNumber, femaleNumber, childrenNumber, email, phone, via, requirement, time, wechat, language) {
  //  var template = '/Users/chenqi/github_workspace/edomiyabi/public/assets/html/confirm_email.html';
  console.log('../views/email_' + language + '.pug');
  var template = path.join(__dirname, '../views/email_' + language + '.pug');
  var emailContent = pug.renderFile(template, {
    name: name,
    phone: phone,
    email: email,
    wechat: wechat,
    maleNumber: maleNumber,
    femaleNumber: femaleNumber,
    childrenNumber: childrenNumber,
    time: time,
    location: location,
    via: via,
    requirement: requirement
  });

  var transporter = nodemailer.createTransport({
    service: 'qiye.aliyun',
    auth: {
      user: 'Service@mymiyabi.com',
      pass: 'mymiyabi3344@'
    }
  });

  var mailOptionsToCustomer = {
    from: '\u6C5F\u6237\u548C\u88C5\u5DE5\u623F \uD83D\uDC58 <Service@mymiyabi.com>', // sender address
    to: email, // list of receivers
    subject: '您在江户和装工房的预约已下单 ✔', // Subject line
    html: emailContent
  };

  var mailOptionsToMiyabi = {
    from: '\u6C5F\u6237\u548C\u88C5\u5DE5\u623F \uD83D\uDC58 <Service@mymiyabi.com>', // sender address
    to: 'Service@mymiyabi.com', // list of receivers
    subject: '\uD83E\uDD11: \u6765\u81EA' + name + ' \u7684\u9884\u7EA6\u8BF7\u6C42 Email:' + email, // Subject line
    replyTo: '' + email,
    html: emailContent

    // send mail with defined transport object
  };transporter.sendMail(mailOptionsToCustomer, function (error, info) {
    if (error) {
      console.log(error);
    }
  });

  transporter.sendMail(mailOptionsToMiyabi, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = router;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);