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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
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
		"location-1": "江户和装工房--雅（浅草分店）: 东京都台东区浅草3-30-2末崎ビル",
		"location-2": "江户和装工房--雅（上野分店）: 东京都台东区台东4-9-2",
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
		"location3": "京都一号店",
		"location4": "京都二号店",
		"question3_1": "请问有几位男士呢?如果没有,请输入0",
		"placeHolder3_1": "请输入来店的男士人数",
		"question3_2": "请问有几位女士呢?如果没有请,输入0",
		"placeHolder3_2": "请输入来店的女士人数",
		"question3_3": "请问有几位儿童呢?如果没有,请输入0",
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
		"location-1": "江户和装工房--雅（淺草分店): 東京都台東區淺草3-30-2末崎ビル",
		"location-2": "江户和装工房--雅（上野分店): 東京都台東區台東4-9-2",
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
		"location3": "京都一号店",
		"location4": "京都二号店",
		"question3_1": "請問有幾位男士呢?如果沒有,請輸入0",
		"placeHolder3_1": "請輸入來店的男士人數",
		"question3_2": "請問有幾位女士呢?如果沒有請,輸入0",
		"placeHolder3_2": "請輸入來店的女士人數",
		"question3_3": "請問有幾位兒童呢?如果沒有,請輸入0",
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
	},
	"ko": {
		"apple-store-url": "https://itunes.apple.com/us/app/busgazer-pittsburgh/id936235643?mt=8&_branch_match_id=399387738945819974",
		"google-play-url": "https://play.google.com/store/apps/details?id=com.busgazer.oba&_branch_match_id=399387738945819974",
		"nav-home": "홈페이지",
		"nav-web": "Web App",
		"nav-combo": "특색 서비스",
		"nav-booking": "온라인 예약",
		"nav-faq": "항상 질문하는 것",
		"nav-girls": "그들이 여기에 있었다.",
		"nav-about": "우리에 관련 정보",
		"nav-social": "연락처",
		"button-calendar": "이메일",
		"hero-title-1": "에도기모노공방 아",
		"hero-subtitle-1": "기모노 매치",
		"hero-title-2": "에도기모노공방 아",
		"hero-subtitle-2": "기모노 렌트, 품질이 좋고 가격이 쌈.",
		"hero-title-3": "에도기모노공방 아",
		"hero-subtitle-3": "온라인 예약, 간단하고 편리함.",
		"cloth-type": "기모노 유형",
		"belt": "오비를 묶는 법",
		"gender": "적응 대상",
		"event": "추천 상황",
		"sort1": "인기도(높은 것에서 낮은 것으로 가는 순위로",
		"sort2": "가격(저가에서 고가로)",
		"sort3": "가격(고가에서 저가로)",
		"search-place-holder": "키워드를 입력해서 검석하기",
		"search": "검색",
		"answererName": "상담사 소아",
		"boss-name": "점장 아락",
		"boss-quote": "이 2년 동안 고객님 여러분들의 신뢰와 사랑을 받아 오면서 저희는 여러 영역에서 오신 고객님들과 만나게 되었습니다. 그 분들 중에 IT를 종사하고 있는 분들도 있고, 승무원, 사진사등도 있었습니다. 고객님과 만나게 된 것은 마치 전세의 연분같은 것이며 저희를 선택해 주셔서 너무 감사하고 있고 미레에도 당신들의 지지와 동행이 있었으면 좋겠고 저희와 같이 새로운 시작을 기대하십시다.，",
		"prev": "전페이지",
		"next": "다음페이지",
		"combo-desc": "세트 특점",
		"combo-acc": "포함물건",
		"combo-hair": "헤어스타일",
		"combo-book": "예약하기",
		"combo-photo": "고객님의 풍채",
		"contact-name1": "서비스 센트 1호선",
		"contact-name2": "서비스 센트 2호선",
		"email-name": "이메일",
		"location-1": "아사쿠사 지점: 도쿄도대동구아사쿠사3-30-2 마츠자키(末崎)빌딩",
		"location-2": "우에노 지점: 도쿄도대동구대동4-9-2",
		"nav-calendar": "가게 방문 날짜와 시간",
		"notes-title-1": "지불 방식",
		"notes-title-2": "방문 시간 확인",
		"note1": "세트의 선택과 지불은 오신 다음에 하셔돼 됩니다.",
		"note2": "선택한 날짜와 시간은 도쿄 당지 시간임.：",
		"confirm-time": "상기 예약 정보를 확인했으니 문제가 없습니다",
		"repick-time": "다시 한번 예약하기 ",
		"date": "날짜",
		"time": "시간",
		"hour": "시",
		"minute": "분",
		"next-step": "다음",
		"weeks": [
			"일요일",
			"월요일",
			"화요일",
			"수요일",
			"목요일",
			"금요일",
			"토요일"
		],
		"nav-confirm": "예약 정보 확인",
		"question1": "에도기모노공방-아의 온라인 예약으로 어서오십시오. 고객님의 성함이 어떻게 되실까요?",
		"placeHolder1": " 이름을 입력하기",
		"input-placeholder": "답장을 입력하기...",
		"input-placeholder-required": "이 질문을 반드시 회답을 해 주시기 바랍니다.",
		"user-reponse-missing": "없음",
		"user-reponse-missing-group": "저는 정답을 모릅니다.",
		"input-placeholder-error": "고객님이 입력하신 격식이 다르지 않음",
		"entry-not-found": " 이 항목을 찾을 수 없음.",
		"group-placeholder": "버튼을 글릭해서 선택하기",
		"input-no-filter": "키워드를 포함된 내용을 찾을 수 없음.",
		"user-reponse-and": " 하고",
		"general": "목인 유형1 |목연 유형2",
		"say-hello": "고객님과 만나서 반갑습니다",
		"question2": "어느 가게에 오실 생각이세요",
		"location1": "아사쿠사",
		"location2": "우에노",
		"location3": "교토 하나 상점",
		"location4": "교토 2 호점",
		"question3_1": "같이 오실 분들 중에 남성분들이 계세요? 만약 없으시면 0를 입력하시기 바랍니다.",
		"placeHolder3_1": "내점하실 남성신분의 인수를 입력하시기 바랍니다.",
		"question3_2": "같이 오실 분들 중에 여성분들이 계세요? 만약 없으시면 0를 입력하시기 바랍니다.",
		"placeHolder3_2": "내점하실 여성의 인수를 입력하시기 바랍니다.",
		"question3_3": "같이 오실 분들 중에 아이가 있어요? 만약 없으시면 0를 입력하시기 바랍니다.",
		"placeHolder3_3": "내점하실 여성의 인수를 입력하시기 바랍니다.",
		"question4": "고객님의 이메일 주소는 어떻게 될까요? 반드시 입력하시기 바랍니다.",
		"placeHolder4": "이메일 주소를 입력하시기 바랍니다. 반드시 입력해 주세요.",
		"question5": "请고객님의 카툭 아이디나 Twitter이이디는 어떻게 될까요? 없으시면 enter버튼을 입력하시거나 완료 버튼을 입력하시기 바랍니다.",
		"placeHolder5": "카툭 아이디나 Twitter 아이디를 입력하기",
		"question6": "고객님의 연락처는 어떻게 될까요? 없으시면 enter버튼을 입력하시거나 완료 버튼을 입력하시기 바랍니다.",
		"placeHolder6": "연락처를 입력하시기 ",
		"question7": "본점을 어떻게 알게 되셨습니까?",
		"placeHolder7": "저희 가게를 어떻게 알게 되셨습니까?",
		"via1": "대중점평",
		"via2": "검색엔진",
		"via3": "친구 소개",
		"via4": "신랑웨이버",
		"via5": "Facebook",
		"via6": "잡지",
		"via7": "여행공략",
		"via8": "기타",
		"question8": "특수한 요구할 상항이나 남길 메세지가 있으세요? 없으시면 enter버튼을 입력하시거나 완료 버튼을 입력하시기 바랍니다.",
		"placeHolder8": "당신의 특수 요구 사항을 입력해 주시기 바랍니다.",
		"question9": "고객님께서 예약 정보를 다시 한번 확인을 해 주기 바라며 만약 수정해야 할 정보가 있으면 전에 떴던 대화창 클릭하시고 나서 수정할 정보를 입력하거나 선택할 상항을 다시 한번 선택하시기 바랍니다. 만약 시간을 수정하고 싶을 경우 직접 캘린드에서 선택하시면 됩니다.",
		"confirm-answer": "상기 예약 정보를 확인했으니 문제가 없습니다. ",
		"placeHolder9": "버튼을 클릭해서 선택하기",
		"table-name": "이름",
		"table-time": "예약시간（토쿄시간）",
		"table-location": "예약 지점",
		"table-male-num": "내점 남성 인수",
		"table-female-num": "내점 여성 인수",
		"table-children-num": "내점 아동 인수",
		"table-phone": "연락처",
		"table-email": "이메일",
		"table-wechat": "카톡 아이디이나 Twitter아이디",
		"table-requirement": "툭수요구",
		"confirm-title-1": "너무 감사합니다!",
		"confirm-msg-1": "보를 입력하기가 완료됐습니다. 예약 이메일은 잠시 후에 고객님 이메일 수소에 발송해 드릴 예정입니다. 확인을 해 주시기 바랍니다.",
		"confirm-title-2": "다시 한번 예약하기 ?",
		"confirm-msg-2": "옝약 정보를 수정하려면 다시한번 다시 한번 예약 버튼을 예약해 주시기 바랍니다.",
		"nav-return": "멘페이지에 돌아가기"
	},
	"en": {
		"apple-store-url": "https://itunes.apple.com/us/app/busgazer-pittsburgh/id936235643?mt=8&_branch_match_id=399387738945819974",
		"google-play-url": "https://play.google.com/store/apps/details?id=com.busgazer.oba&_branch_match_id=399387738945819974",
		"nav-home": "Home page",
		"nav-web": "Web App",
		"nav-combo": "Special Plans",
		"nav-booking": "Online reservation",
		"nav-faq": "Reservation process and common questions",
		"nav-girls": "They have been here",
		"nav-about": "About us",
		"nav-social": "Contact information",
		"button-calendar": "Booking",
		"hero-title-1": "Miyabi Kimono",
		"hero-subtitle-1": "Come across the kimono for you",
		"hero-title-2": "Miyabi Kimono",
		"hero-subtitle-2": "Affordable kimono rent of high quality",
		"hero-title-3": "Miyabi Kimono",
		"hero-subtitle-3": "Simple and interactive online booking ",
		"cloth-type": " Cloth types",
		"belt": "Belt tied method",
		"gender": "Target User",
		"event": "Recommended occasions",
		"sort1": "Popularity (high to low)",
		"sort2": "Price (from low to high)",
		"sort3": "Price (from high to low)",
		"search-place-holder": "Enter the keyword search",
		"search": "search",
		"answererName": "Customer service Xiaoya",
		"boss-name": "Manager Ale",
		"boss-quote": "In the past two years, we have all the people we meet, we meet all walks of life different customers, they are engaged in IT, flight attendants, photographers and so on. We can meet with you is past fate. Thanks for choosing us, wish we can have your companionship and your support in the in the future. And expecting the beginning of the new journey",
		"prev": "prev page",
		"next": "next page",
		"combo-desc": "Plan features",
		"combo-acc": "Included accessories",
		"combo-hair": "Hair design",
		"combo-book": "Booking",
		"combo-photo": "Gallery",
		"contact-name1": "Customer Service Line 1",
		"contact-name2": "Customer Service Line 2",
		"email-name": "E-mail",
		"location-1": "Asakusa Branch: Asakusa, Taitung, Tokyo 3-30-2 Higashi Vagi",
		"location-2": "Ueno Branch: 4-9-2, Taitung, Taitung District, Tokyo",
		"nav-calendar": "Select the progress bar to choose the time to visit us",
		"notes-title-1": "Payment methods",
		"notes-title-2": "Confirm the time to visit us",
		"note1": "The selection and payment of the set can wait until you arrive at the store",
		"note2": "The current appointment time is（Tokyo）：",
		"confirm-time": "I'm sure there is no mistake in making an appointment",
		"repick-time": "Reappointment",
		"date": "Date",
		"time": "Time",
		"hour": "Hour",
		"minute": "minute",
		"next-step": "Next",
		"weeks": [
			"Sun",
			"Mon",
			"Tues",
			"Wed",
			"Thurs",
			"Fri",
			"Sat"
		],
		"nav-confirm": "Reservation confirmation",
		"question1": "Welcome to the use of Edo Kimono Studio-Elegance’s online booking system. May I have your name please?",
		"placeHolder1": "Please enter your name",
		"input-placeholder": "Enter into the answer...",
		"input-placeholder-required": "Please be sure to answer this question",
		"user-reponse-missing": "None",
		"user-reponse-missing-group": "I don’t know how to answer it",
		"input-placeholder-error": "Your input format is incorrect",
		"entry-not-found": "Can not find this item",
		"group-placeholder": "Click the button to select",
		"input-no-filter": "Can not find results that contain keywords",
		"user-reponse-and": " And",
		"general": "Default Type 1 | Default Type 2",
		"say-hello": "Nice to meet you",
		"question2": "Which branch of us would you like to visit?",
		"location1": "Asakusa",
		"location2": "Ueno",
		"location3": "Kyoto No.1",
		"location4": "Kyoto No.2",
		"question3_1": "How many male guests are coming with? If none, please enter 0.",
		"placeHolder3_1": "Please enter the number of male guests who come to the store",
		"question3_2": "How many ladies are coming? If none, please enter 0.",
		"placeHolder3_2": "Please enter the number of ladies who come to the store",
		"question3_3": "How many children are coming? If none, please enter 0.",
		"placeHolder3_3": "Please enter the number of children who come to the store",
		"question4": "May I have your e-mail address? Please be sure to fill in",
		"placeHolder4": "Please enter your e-mail, please fill in",
		"question5": "Your WeChat ID or your QQ number? If you do not have, press the Enter key or the Submit button",
		"placeHolder5": "Please enter your WeChat ID or your QQ number",
		"question6": "May I have your contact number? If you do not have, press the Enter key or the Submit button",
		"placeHolder6": "Please enter your contact number",
		"question7": "How did you learn about our shop?",
		"placeHolder7": "Press the button to select",
		"via1": "Dianping.com",
		"via2": "Search engine",
		"via3": "Friend introduction",
		"via4": "Sina microblog",
		"via5": "Facebook",
		"via6": "Magazines",
		"via7": "Travelling guidelines",
		"via8": "Other",
		"question8": "Are there any special request or message? If not, press the Enter key or the Submit button",
		"placeHolder8": "Please enter into your special request.",
		"question9": "Please check your reservation information. If you want to modify the information you have already entered, click the message dialog box you previously replied to, and then enter the information you want to change or select the appropriate answer. If you want to change the time, you can select a new time directly on the calendar.",
		"confirm-answer": "I confirm that the reservation information is correct and can be submitted.",
		"placeHolder9": "Click the button to continue",
		"table-name": "Name",
		"table-time": "Reservation time（Tokyo）",
		"table-location": "Branch ",
		"table-male-num": " The number of male guests",
		"table-female-num": " The number of ladies guests",
		"table-children-num": " The number of children guests",
		"table-phone": "Phone number",
		"table-email": "E-mail",
		"table-wechat": "Wechat ID or QQ ID",
		"table-requirement": "Special requirements",
		"confirm-title-1": "Thank you so much",
		"confirm-msg-1": "Congratulations on completing the form! Confirm email of the reservation later will be sent to your Email , please check! .",
		"confirm-title-2": "Reappointment?",
		"confirm-msg-2": "If you want to change anything, please click the re-order button.",
		"nav-return": "Return to the home page"
	},
	"ja": {
		"apple-store-url": "https://itunes.apple.com/us/app/busgazer-pittsburgh/id936235643?mt=8&_branch_match_id=399387738945819974",
		"google-play-url": "https://play.google.com/store/apps/details?id=com.busgazer.oba&_branch_match_id=399387738945819974",
		"nav-home": "ホーム",
		"nav-web": "ウェブアプリ",
		"nav-combo": "特別セット",
		"nav-booking": "オンライン予約",
		"nav-faq": "予約流れとよくある質問",
		"nav-girls": "彼女たちここにいっらしゃるでした",
		"nav-about": "私たちに関して",
		"nav-social": "連絡方法",
		"button-calendar": "予約する",
		"hero-title-1": "江戸和装工房",
		"hero-subtitle-1": "着物は出会い",
		"hero-title-2": "江戸和装工房",
		"hero-subtitle-2": "着物手頃な価格のレンタル",
		"hero-title-3": "江戸和装工房",
		"hero-subtitle-3": "オンライン予約、簡単便利",
		"cloth-type": "着物の種類",
		"belt": "帯の種類",
		"gender": "適用者",
		"event": "お勧めの使用場面",
		"sort1": "人気度 (トップから)",
		"sort2": "値段 (低価から高価へ)",
		"sort3": "値段 (高価から低価へ)",
		"search-place-holder": "キーワードを入力してください。",
		"search": "検索する",
		"answererName": "カスタマーサービス小雅",
		"boss-name": "店長アラク",
		"boss-quote": "これまで、2年の間我々皆様から愛情をいただきながら、いろいろ分野のお客様十出会いになりました。お客様の中に、IT分野で勤めでいる方もいっらしゃるし、スチュワーデスの方と撮影師の方もいっらしゃるんのです。お客様たちとのお出会いはある縁と言えましょう。我々を選択してくれて、感謝申し上げます。これからも、お客様の支持とともに、新しいりょこを期待しながら行きましょう。",
		"prev": "前のページ",
		"next": "次のページ",
		"combo-desc": "セットの特徴",
		"combo-acc": "含まれる物",
		"combo-hair": "ヘアセット",
		"combo-book": "予約する",
		"combo-photo": "お客様の風景",
		"contact-name1": "カスタマーサービスライン１",
		"contact-name2": "カスタマーサービスライン２",
		"email-name": "メール",
		"location-1": "江户和装工房--雅（浅草支店): 东京都台东区浅草3-30-2末崎ビル",
		"location-2": "江户和装工房--雅（上野支店)：東京台東区台東4-9-2",
		"nav-calendar": "来店時間の選択",
		"notes-title-1": "お会計方法",
		"notes-title-2": "来店時間の確認",
		"note1": "セット選びとお支払いは来店後になります。",
		"note2": "日付と時間の選択は東京の時間になります：",
		"confirm-time": "予約情報を確認しました",
		"repick-time": "予約をやり直す　",
		"date": "日付",
		"time": "時間",
		"hour": "時間",
		"minute": "分",
		"next-step": "次へ",
		"weeks": [
			"日曜日",
			"月曜日",
			"火曜日",
			"水曜日",
			"木曜日",
			"金曜日",
			"土曜日"
		],
		"nav-confirm": "予約情報を確認しました",
		"question1": "ようこそ江戸和装芳-雅のネット予約へ、お名前は? ",
		"placeHolder1": "お名前を記入してください",
		"input-placeholder": "回復を入力します...",
		"input-placeholder-required": "質問について、ご答えしてください。",
		"user-reponse-missing": "いいえ",
		"user-reponse-missing-group": "私は答えを知りません。",
		"input-placeholder-error": "ご入力する内容は正しくないです。",
		"entry-not-found": "この項目を見つからないです。",
		"group-placeholder": "ボタンを押して選択",
		"input-no-filter": "キーウードを含まれる結果を見つからないです。",
		"user-reponse-and": " と",
		"general": "デフォルトのタイプ1 | 2デフォルトのタイ",
		"say-hello": "ご来店ありがとうございます。",
		"question2": "希望のお店はどちらでしょうか?",
		"location1": "浅草",
		"location2": "上野",
		"location3": "京都一号店",
		"location4": "京都二号店",
		"question3_1": "ご来店する男性は何名様でしょうか？いなければは0を記入してください",
		"placeHolder3_1": "ご来店する男性の数を記入してください",
		"question3_2": "ご来店する女性は何名様でしょうか？いなければは0を記入してください",
		"placeHolder3_2": "ご来店する男性の数を記入してください",
		"question3_3": "ご来店するお子様は何名様でしょうか？いなければは0を記入してください",
		"placeHolder3_3": "ご来店するお子様の数を記入してください",
		"question4": "メールアドレス　　必須",
		"placeHolder4": "メールアドレスを記入ください　必須",
		"question5": "Wechat、またはQQのナンバーは？　なければ、Enterまたは提出ボタンを押してください",
		"placeHolder5": "WechatまたはQQナンバーを記入ください",
		"question6": "ご連絡先の電話番号は？　なければ、Enterまたは提出ボタンを押してください",
		"placeHolder6": "電話番号を記入ください",
		"question7": "どのような方法で当店を知りましたか?",
		"placeHolder7": "ボタンを押し、選択",
		"via1": "DIAN PING",
		"via2": " 検索エンジン",
		"via3": "お友達の紹介",
		"via4": "お友達の紹介",
		"via5": "Facebook",
		"via6": " 雑誌",
		"via7": "旅行ガイド",
		"via8": "その他",
		"question8": "何か特別なご要望、コメントは？　なければ、Enterまたは提出ボタンを押してください",
		"placeHolder8": "特別なご要望、コメントをご入力してください。",
		"question9": "予約情報を確認してください。訂正の場合は、お戻りボタンを選択し、再選択してください。お時間の訂正の場合は、カレンダーでお選べ直しください。",
		"confirm-answer": "約情報を確認しました。提出",
		"placeHolder9": "ボタンを押して続き",
		"table-name": "お名前",
		"table-time": "予約時間（東京時間）",
		"table-location": "支店名",
		"table-male-num": " 男性の数",
		"table-female-num": " 女性の数",
		"table-children-num": "子供の数",
		"table-phone": "携帯番号",
		"table-email": "メール",
		"table-wechat": "Wechat ID や QQ ID",
		"table-requirement": "特別なご要望、コメント",
		"confirm-title-1": "感謝の極みです。",
		"confirm-msg-1": "予約完了です。予約情報につきましては、あなたのメールアドレスにお送りします。以下の情報を再度確認してください。",
		"confirm-title-2": "予約をやり直しますか？",
		"confirm-msg-2": "訂正の場合は予約ボタンを再度押してください。.",
		"nav-return": "ホームへ"
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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

module.exports = require("jquery");

/***/ }),
/* 7 */
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
/* 8 */
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

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _CalendarWidget = __webpack_require__(52);

var _CalendarWidget2 = _interopRequireDefault(_CalendarWidget);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof document !== 'undefined') {
  __webpack_require__(74);
}


var CalendarSection = function CalendarSection(props) {
  var language = props.language,
      isleftHidden = props.isleftHidden,
      isRightHidden = props.isRightHidden,
      m = props.m,
      handleChange = props.handleChange,
      handleSave = props.handleSave,
      repickTime = props.repickTime;


  var lang = language;
  var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
  return _react2.default.createElement(
    'section',
    { className: 'calendar-section section container', id: 'calendar-section' },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
      _dict2.default[language]['nav-calendar']
    ),
    _react2.default.createElement(
      'div',
      { className: 'calendar-widget columns container' },
      _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('column', 'calendar-column', {
            'is-hidden': isleftHidden
          })
        },
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
        {
          className: (0, _classnames2.default)('column', 'messages', {
            'is-hidden': isRightHidden
          })
        },
        _react2.default.createElement(Message, {
          title: _dict2.default[language]['notes-title-1'],
          content: _dict2.default[language]['note1'],
          styleClass: 'is-primary',
          iconName: 'fa-money'
        }),
        _react2.default.createElement(Message, {
          title: _dict2.default[language]['notes-title-2'],
          content: _dict2.default[language]['note2'] + ' ' + m.format('LLLL'),
          styleClass: 'is-primary',
          iconName: 'fa-check-circle'
        }),
        _react2.default.createElement(
          'div',
          { className: 'text-button has-text-centered' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: _path2.default.join(props.match.url, '/form'),
              className: 'button is-primary is-outlined'
            },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              'span',
              { className: (0, _classnames2.default)('title', 'is-5', fontName2) },
              _dict2.default[language]['confirm-time']
            )
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'button is-primary repick-time is-outlined',
              onClick: repickTime
            },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-clock-o' })
            ),
            _react2.default.createElement(
              'span',
              { className: (0, _classnames2.default)('title', 'is-5', fontName2) },
              _dict2.default[language]['repick-time']
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'button is-primary is-outlined' },
            _react2.default.createElement(
              'span',
              { className: 'icon is-small' },
              _react2.default.createElement('i', { className: 'fa fa-home' })
            ),
            _react2.default.createElement(
              'span',
              { className: (0, _classnames2.default)('title', 'is-5', fontName2) },
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

var eq = __webpack_require__(57),
    isArrayLike = __webpack_require__(58),
    isIndex = __webpack_require__(65),
    isObject = __webpack_require__(7);

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
    getRawTag = __webpack_require__(62),
    objectToString = __webpack_require__(63);

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

var root = __webpack_require__(60);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(66);

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
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
if (typeof window === 'undefined') {
  global.window = {};
}

var app = __webpack_require__(20);
var debug = __webpack_require__(92)('miyabi:server');
var http = __webpack_require__(93);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

// express middleware & utils
var express = __webpack_require__(4);
var path = __webpack_require__(5);
var favicon = __webpack_require__(21);
var compression = __webpack_require__(22);

// var logger = require('morgan')
// var cookieParser = require('cookie-parser')
var bodyParser = __webpack_require__(23);
var expressValidator = __webpack_require__(24);

// express routes
var index = __webpack_require__(25);
var emailRouter = __webpack_require__(89);
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
  // res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export app
module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(27);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* GET home page. */
var router = _express2.default.Router();
var appHtml;
router.get('/', function (req, res, next) {
  var context = {};
  try {
    appHtml = _server2.default.renderToString(_react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.originalUrl, context: context },
      _react2.default.createElement(_App2.default, null)
    ));
  } catch (e) {
    console.log(e);
  }

  res.set({ 'content-type': 'text/html; charset=utf-8' });

  try {
    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(renderPage(appHtml));
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
  // res.sendFile(path.join(__dirname, '/../../public/index.html'))
});

function renderPage(appHtml) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1"/>\n        <meta name="description" content="\u6C5F\u6237\u548C\u88C5\u5DE5\u623F~\u96C5 \u662F\u6D45\u8349\u77E5\u540D\u7684\u548C\u670D\u79DF\u8D41\u5E97\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u6700\u5730\u9053\u7684\u548C\u670D\u7740\u88C5\uFF0C\u6700\u8D34\u5FC3\u7684\u670D\u52A1\u56E2\u961F\uFF0C\u6700\u4E13\u4E1A\u7684\u5316\u5986\u5E08\u548C\u6444\u5F71\u5E08\u3002\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u5728\u8FD9\u91CC\u7559\u4E0B\u7F8E\u597D\u7684\u56DE\u5FC6\u3002" />\n        <meta name="keywords" content="\u6D45\u8349,\u548C\u670D,\u8457\u7269,\u51FA\u79DF,\u79DF\u501F,\u6D74\u8863,KIMONO,\u548C\u670D\u79DF\u8D41,\u6444\u5F71\uFF0C\u5316\u5986\uFF0CMIYABI,\u632F\u8896,\u7159\u706B,\u82B1\u706B,\u548C\u670D\u5916\u62CD,\u548C\u670D\u63A8\u8350,\u6AFB\u82B1,\u8CDE\u6AFB,\u8CDE\u6953,\u6953\u8449,\u5152\u7AE5\u548C\u670D,\u9AEE\u578B,\u5922\u9928,\u6D45\u8349\u5BFA" />\n        <meta property="og:type" content="website" />\n        <meta property="og:url" content="https://hefumiyabi.com" />\n        <meta property="og:title" content="\u6C5F\u6237\u548C\u88C5\u5DE5\u574A~\u96C5 - \u6D45\u8349\u548C\u670D\u79DF\u8D41 Miyabi Kimono Rental in Asakusa" />\n        <meta property="og:description" content="\u6C5F\u6237\u548C\u88C5\u5DE5\u623F~\u96C5 \u662F\u6D45\u8349\u77E5\u540D\u7684\u548C\u670D\u79DF\u8D41\u5E97\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u6700\u5730\u9053\u7684\u548C\u670D\u7740\u88C5\uFF0C\u6700\u8D34\u5FC3\u7684\u670D\u52A1\u56E2\u961F\uFF0C\u6700\u4E13\u4E1A\u7684\u5316\u5986\u5E08\u548C\u6444\u5F71\u5E08\u3002\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u5728\u8FD9\u91CC\u7559\u4E0B\u7F8E\u597D\u7684\u56DE\u5FC6\u3002" />\n        <meta property="og:site_name" content="\u6C5F\u6237\u548C\u88C5\u5DE5\u623F~\u96C5" />\n        <meta property="og:image" content="https://hefumiyabi.com/images/cover.jpg" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <title>\u6C5F\u6237\u548C\u88C5\u5DE5\u623F\u96C5 - \u6D45\u8349\u548C\u670D\u79DF\u8D41</title>\n        <link rel="shortcut icon" type="image/png" href="/images/logo1.png"/>\n        <link rel="stylesheet"\n        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n        <link rel=\'stylesheet\' href=\'/main.css\' />\n        <link rel=\'stylesheet\' href=\'/conversational-form.min.css\' />\n        <link rel=\'stylesheet\' href=\'/wallop.css\' />\n        <link rel=\'stylesheet\' href=\'/wallop--fade.css\' />\n        <link rel=\'stylesheet\' href=\'/wallop--slide.css\' />\n        <link href=\'https://fonts.googleapis.com/css?family=Yeon+Sung\' rel=\'stylesheet\'>\n        <script>\n          (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n          })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n          ga(\'create\', \'UA-100094140-1\', \'auto\');\n          ga(\'send\', \'pageview\');\n        </script>\n        <script type=\'application/ld+json\'>\n          {\n            "@context": "http://schema.org",\n            "@type": "Organization",\n            "url": "https://hefumiyabi.com",\n            "logo": "https://hefumiyabi.com/images/logo1.png",\n            "contactPoint": [{\n              "@type": "ContactPoint",\n              "telephone": "+81-03-6802-3566",\n              "contactType": "customer service"\n            }]\n          }\n        </script>\n      </head>\n\n      <body>\n        <div id="app" itemscope="" itemtype="http://schema.org/WebPage">' + appHtml + '</div>\n        <script src="https://cf-4053.kxcdn.com/conversational-form/0.9.6/conversational-form.min.js"></script>\n        <script src="/bundle.js"></script>\n        <script src="https://fast.wistia.com/embed/medias/phknks26n7.jsonp" async></script>\n        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>\n      </body>\n    </html>\n   ';
}

module.exports = router;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _HomePage = __webpack_require__(29);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _BookingPage = __webpack_require__(51);

var _BookingPage2 = _interopRequireDefault(_BookingPage);

var _NoMatch = __webpack_require__(18);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var language = void 0;
    if (window.navigator) language = window.navigator.userLanguage || window.navigator.language;else language = 'en-us';
    var codeMap = new Map([['zh-cn', 'zh-cn'], ['zh-tw', 'zh-tw'], ['zh-hk', 'zh-tw'], ['zh-sg', 'zh-tw'], ['en-us', 'en'], ['ko', 'ko'], ['ko-kp', 'ko'], ['ko-kr', 'ko'], ['ja', 'ja']]);

    // console.log(language.toLowerCase());
    // console.log(codeMap);

    var code = codeMap.get(language.toLowerCase()) || 'en';
    // console.log(code);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      lang: code
    };
    _this.onLangChange = _this.onLangChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
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
        this.setState({
          lang: 'en'
        });
      } else if (language === '日本語') {
        this.setState({
          lang: 'ja'
        });
      } else {
        this.setState({
          lang: 'ko'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      try {
        return _react2.default.createElement(
          'div',
          { className: 'app' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, {
              exact: true,
              path: '/',
              render: function render(props) {
                return _react2.default.createElement(_HomePage2.default, _extends({}, props, {
                  lang: _this2.state.lang,
                  onLangChange: _this2.onLangChange
                }));
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, {
              path: '/booking',
              render: function render(props) {
                return _react2.default.createElement(_BookingPage2.default, _extends({}, props, { lang: _this2.state.lang }));
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _NoMatch2.default })
          )
        );
      } catch (e) {
        console.log(e);
      }
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

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

var _reactRouterDom = __webpack_require__(3);

var _HeroSection = __webpack_require__(30);

var _ProductSection = __webpack_require__(32);

var _ProductSection2 = _interopRequireDefault(_ProductSection);

var _QaSection = __webpack_require__(40);

var _QaSection2 = _interopRequireDefault(_QaSection);

var _GirlsSection = __webpack_require__(45);

var _GirlsSection2 = _interopRequireDefault(_GirlsSection);

var _AboutSection = __webpack_require__(48);

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _FooterSection = __webpack_require__(50);

var _FooterSection2 = _interopRequireDefault(_FooterSection);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

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
      var lang = this.props.lang;
      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(_HeroSection.HeroSection, {
          lang: this.props.lang,
          onLangChange: this.props.onLangChange
        }),
        _react2.default.createElement(_ProductSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_QaSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_GirlsSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_AboutSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(_FooterSection2.default, { lang: this.props.lang }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/booking',
            className: 'ballon store-icon button is-primary is-medium'
          },
          _react2.default.createElement(
            'span',
            { className: 'icon' },
            _react2.default.createElement('i', { className: 'fa fa-calendar' })
          ),
          _react2.default.createElement(
            'span',
            { className: fontName2 },
            _dict2.default[this.props.lang]['button-calendar']
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHead = exports.HeroSection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _Wallop = __webpack_require__(8);

var _Wallop2 = _interopRequireDefault(_Wallop);

var _reactRouterDom = __webpack_require__(3);

var _reactScrollchor = __webpack_require__(31);

var _reactScrollchor2 = _interopRequireDefault(_reactScrollchor);

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
      'span',
      {
        className: 'nav-item',
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
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
              ),
              _react2.default.createElement(
                'option',
                { selected: language === 'ko' },
                '\uD55C\uAD6D\uC5B4'
              )
            )
          )
        )
      )
    )
  );
};

var NavToggle = function NavToggle(props) {
  var isActive = props.isActive,
      toggleListener = props.toggleListener;

  return _react2.default.createElement(
    'span',
    {
      className: (0, _classnames2.default)('nav-toggle', { 'is-active': isActive }),
      onClick: toggleListener
    },
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
    {
      className: (0, _classnames2.default)('nav-right', 'nav-menu', { 'is-active': isActive }),
      onClick: toggleListener
    },
    _react2.default.createElement(
      'span',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactScrollchor2.default,
        { to: '#product-section', className: 'button is-primary nav-link' },
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
        _reactScrollchor2.default,
        { to: '#qa-section', className: 'button is-primary nav-link' },
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
        _reactScrollchor2.default,
        { to: '#girls-section', className: 'button is-primary nav-link' },
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
        _reactScrollchor2.default,
        { to: '#about-section', className: 'button is-primary nav-link' },
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
        _reactScrollchor2.default,
        { to: '#footer-section', className: 'button is-primary nav-link' },
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
      isActive: false
    };

    _this.toggleListener = _this.toggleListener.bind(_this);
    return _this;
  }

  _createClass(HeroHead, [{
    key: 'toggleListener',
    value: function toggleListener() {
      this.setState({
        isActive: !this.state.isActive
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
            _react2.default.createElement(NavToggle, {
              toggleListener: this.toggleListener,
              isActive: this.state.isActive
            }),
            _react2.default.createElement(NavRight, {
              toggleListener: this.toggleListener,
              isActive: this.state.isActive
            })
          )
        )
      );
    }
  }]);

  return HeroHead;
}(_react2.default.Component);

var HeroBody = function HeroBody(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hero-body' },
    _react2.default.createElement(WallopSlides, { lang: props.lang })
  );
};

var Headlines = function Headlines(props) {
  var num = props.num,
      lang = props.lang;


  var fontName = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-zhao';
  var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';

  return _react2.default.createElement(
    'div',
    { className: 'container is-fluid has-text-centered' },
    _react2.default.createElement(
      'h1',
      { className: (0, _classnames2.default)('title', 'is-1', fontName) },
      ' ',
      text['hero-title-' + num],
      ' '
    ),
    _react2.default.createElement(
      'h2',
      { className: (0, _classnames2.default)('subtitle', 'is-3', fontName) },
      text['hero-subtitle-' + num]
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/booking',
        className: 'store-icon button is-primary is-inverted is-large'
      },
      _react2.default.createElement(
        'span',
        { className: 'icon' },
        _react2.default.createElement('i', { className: 'fa fa-calendar' })
      ),
      _react2.default.createElement(
        'span',
        { className: fontName2 },
        text['button-calendar']
      )
    )
  );
};

var WallopSlides = function WallopSlides(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Wallop Wallop--fade', id: 'heroWallop' },
    _react2.default.createElement(
      'div',
      { className: 'Wallop-list' },
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '1', lang: props.lang })
      ),
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '2', lang: props.lang })
      ),
      _react2.default.createElement(
        'div',
        { className: 'Wallop-item' },
        _react2.default.createElement(WallopSlide, { num: '3', lang: props.lang })
      )
    )
  );
};

var WallopSlide = function WallopSlide(props) {
  var num = props.num,
      lang = props.lang;

  return _react2.default.createElement(
    'div',
    { className: 'columns container is-fluid' },
    _react2.default.createElement(
      'div',
      { className: 'column is-half' },
      _react2.default.createElement(Headlines, { num: num, lang: lang })
    ),
    _react2.default.createElement(
      'div',
      { className: 'column is-half has-text-centered' },
      _react2.default.createElement('img', {
        className: 'demo-img',
        src: '/images/mockup/' + num + '.png',
        alt: 'iphone demo 1'
      })
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
      if (typeof document !== 'undefined') {
        var heroWallop = document.querySelector('#heroWallop');
        var heroSlider = new _Wallop2.default(heroWallop);
        setInterval(function () {
          heroSlider.next();
        }, 3000);
      }
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
        { className: 'hero is-primary is-fullheight', id: 'hero-section' },
        _react2.default.createElement(HeroHead, null),
        _react2.default.createElement(HeroBody, { lang: this.props.lang })
      );
    }
  }]);

  return HeroSection;
}(_react2.default.Component);

exports.HeroSection = HeroSection;
exports.HeroHead = HeroHead;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-scrollchor");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ShowCards = __webpack_require__(33);

var _ShowCards2 = _interopRequireDefault(_ShowCards);

var _Pages = __webpack_require__(36);

var _Pages2 = _interopRequireDefault(_Pages);

var _Filter = __webpack_require__(37);

var _Filter2 = _interopRequireDefault(_Filter);

var _Sort = __webpack_require__(38);

var _Sort2 = _interopRequireDefault(_Sort);

var _cards = __webpack_require__(39);

var _cards2 = _interopRequireDefault(_cards);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(6);

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
      if (typeof document !== 'undefined') {
        if (language === lastLang) {
          document.getElementById('product-section').scrollIntoView();
        }
        lastLang = language;
      }
    }
  }, {
    key: 'toggleListener',
    value: function toggleListener() {
      $('html').toggleClass('filter-open');
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
      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';

      var pageNum = Math.floor((this.state.cards.length - 1) / cardsPerPage) + 1;
      return _react2.default.createElement(
        'section',
        { className: 'product-section section container', id: 'product-section' },
        _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
          _dict2.default[language]['nav-combo']
        ),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'filter column is-one-quarter' },
            _react2.default.createElement(_Filter2.default, {
              cards: this.state.cards,
              filterClick: this.filterClickListener.bind(this),
              toggleListener: this.toggleListener,
              lang: lang
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'product column' },
            _react2.default.createElement(_Sort2.default, {
              sortClickListener: this.sortClickListener.bind(this),
              toggleListener: this.toggleListener,
              lang: lang
            }),
            _react2.default.createElement(_ShowCards2.default, {
              cards: this.state.cards,
              pageIndex: this.state.pageIndex,
              cardsPerPage: cardsPerPage,
              lang: language
            }),
            _react2.default.createElement(_Pages2.default, {
              pageIndex: this.state.pageIndex,
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(34);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _reactImages = __webpack_require__(35);

var _reactImages2 = _interopRequireDefault(_reactImages);

var _reactRouterDom = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

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
      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
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
                  { className: (0, _classnames2.default)(fontName2) },
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
                  {
                    className: (0, _classnames2.default)(fontName2, 'item-feature', 'button', 'is-primary', 'is-small', 'is-outlined')
                  },
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
                  {
                    className: (0, _classnames2.default)(fontName2, 'item-feature', 'button', 'is-primary', 'is-small', 'is-outlined')
                  },
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
                  {
                    className: (0, _classnames2.default)(fontName2, 'item-feature', 'button', 'is-primary', 'is-small', 'is-outlined')
                  },
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
                  { className: (0, _classnames2.default)(fontName2, 'title', 'is-5') },
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
                  { className: (0, _classnames2.default)(fontName2, 'title', 'is-5') },
                  _dict2.default[language]['combo-book']
                )
              )
            )
          ),
          _react2.default.createElement(_reactImages2.default, {
            currentImage: this.state.currentImage,
            images: Array.from(Array(11).keys()).map(function (id) {
              return {
                src: card.baseurl + '/' + id + '.jpg'
              };
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
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

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
      _react2.default.createElement('input', {
        type: 'checkbox',
        onChange: filterClickListener.bind(undefined, fieldName, text)
      }),
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
      cards = props.cards,
      lang = props.lang;

  var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
  return _react2.default.createElement(
    'div',
    { className: 'facet' },
    _react2.default.createElement(
      'h5',
      { className: (0, _classnames2.default)('facet-title', 'title', 'is-4', fontName2) },
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
        _react2.default.createElement(Field, {
          fieldSet: clothType,
          fieldName: 'cloth-type',
          cards: cards,
          lang: lang
        }),
        _react2.default.createElement(Field, { fieldSet: belt, fieldName: 'belt', cards: cards, lang: lang }),
        _react2.default.createElement(Field, {
          fieldSet: gender,
          fieldName: 'gender',
          cards: cards,
          lang: lang
        }),
        _react2.default.createElement(Field, { fieldSet: event, fieldName: 'event', cards: cards, lang: lang })
      )
    )
  );
};

exports.default = Filter;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

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
/* 39 */
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
		},
		"ko": {
			"name": " 화려한 여성 기모노",
			"desc": "선택폭이 가장 넓은 기모노 체험 세트이며 다양한 종류의 기모노가 있다. 심플한 무늬부터 여성스런 무늬, 화려한 무늬까지 다양하게 준비되어 있다. 이 수많은 무늬중에서 당신의 마음에 드는것도 있을거라 생각한다. 이 세트는 에도 기모노 공방-아에서 제일 인기가 있는 세트이라고 할 수 있다. 만약 예산이 충분하다면 이 세트를 추천한다. ",
			"clothNum": "200벌정도",
			"acc": "한하바 오비, 조리, 양말, 가방, 기모노, 기모노 내의, 쥬방，장식띠",
			"hair": "머리스타일 설계는 1000엔 추가 필요",
			"cloth-type": "기모노(봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "인기세트",
			"belt": "한하바오비",
			"event": "각종 상황에 다 적용됨"
		},
		"en": {
			"name": "  Ladies’ gorgeous kimono",
			"desc": "Package features: We provide the most types for this package, including varieties of colors - elegant, Cinderella, gorgeous; in general, there will be a style that will attract you. This package is one of our popular packages. If you are in a limited budget, this package is relatively high in cost performance. ",
			"clothNum": "about 200 sets",
			"acc": "half band belt, Zori, socks, bags, kimono, kimono underwear, jacket loop, decorative belt",
			"hair": "hair design needs to pay additional 1,000 Yen",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "Popular set",
			"belt": "half band belt",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": "女性豪華セット",
			"desc": "セットの特徴：シンプルから派手、おしゃれ、色々なスタイルの着物があります。「江戸和装工坊 雅」当店のお勧めセットでもあり、一番お得なセットでもあります。",
			"clothNum": "about 200 sets",
			"acc": "半副帯、草履、靴下、バッグ、着物、着物の下着、襦袢、飾り帯",
			"hair": "ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用",
			"feature": "人気セット",
			"belt": "半副帯",
			"event": " いろいろな場面でご使用なれます。"
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
			"acc": "半幅带，草履，袜子，包包，和服，和服内衣，襦袢，精致装饰带，精致发",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"feature": "精致套餐",
			"belt": "半幅带",
			"event": "各种场合都适用"
		},
		"ko": {
			"name": " 여성 고급 기모노 ",
			"desc": "화려한 타임의 기모노에 비해 사용된 재질이 매우 우수하다. 더 좋은 재질의 아름다운 장식띠가 있으며 기모노의 선택폭도 더욱 넓다. 당신의 마음에 드는  스타일이 될 수 도 있고 우아한 타입이 될 수도 있으며 가격이 저렴하고 품질 매우 우수하다. 당신에게 어울리는 기모노 또한 반드시 있을 것이라 생각하며, 본 사에서 강력하게 추천하는 세트이다.",
			"clothNum": "100벌정도",
			"acc": "한하바 오비, 조리, 양말, 가방, 기모노, 기모노 내의, 쥬방, 정교한 장식띠, 정규한 머리 스타일",
			"hair": "헤어스타일 설계 포함됨",
			"cloth-type": "기모노(봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "정교한 세트",
			"belt": "한하바오비",
			"event": "각종 상황에 다 적용됨"
		},
		"en": {
			"name": "Ladies’ advanced kimono ",
			"desc": "This type of kimono is superior in quality. The material used is even better than the gorgeous kimono. You could find the obvious difference in the belt part; there are fine and beautiful decorative ropes, and a lot of choices are provided. You can be both bright and elegant wearing them, and this type of kimono is high cost-effective, there must be one that is your favorite. It is recommended be the manager.",
			"clothNum": "about 100 sets",
			"acc": "half band, Zori, socks, bags, kimono, kimono underwear, jacket loop, exquisite decorative belt, exquisite hair ornaments",
			"hair": "hair design included",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "Exquisite set",
			"belt": "half band belt",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": "女性高級着物セット ",
			"desc": "豪華セット」の素材より高級、特に帯の部分は明らかに違います。このセットの帯は、美しく上品な飾り帯を使用し、着物の種類も多いです。上品感とゴージャス感で、女性の美しさを引き立てます。店長のお勧めでもあります。",
			"clothNum": "about 100 sets",
			"acc": "半副帯、草履、靴下、バッグ、着物、着物の下着、襦袢、上品な飾り帯",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用 ",
			"feature": "精巧なセット",
			"belt": "半副帯",
			"event": " いろいろな場面でご使用なれます。"
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
		},
		"ko": {
			"name": "성인식 후리소데 ",
			"desc": "일본의 여성들의 성인식는 20살이 됐을 때 하는 것이다. 일본의 경우에는 성인식은 1월이며 성인의 날 그 날에 만 20살의 사람들은 화려한 후리소데를 입고 자기가 살고 있는 지방의 성인식에 참석하게 되어있다. 인생에서 단 한번만 입는 기모노 이기에 가장 화려하다. 후리소데는 일본의 미혼 여성들이 입는 제일 높은 등급의 기모노라고 한다.",
			"clothNum": "50벌 이상",
			"acc": "후쿠로오비, 조리, 자수 양말, 가방, 기모노, 기모노 내의, 쥬방, 오비아게, 정교한 장식띠, 정교한 머리스타일",
			"hair": "헤어스타일 설계 포함됨.",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "특별 세일 세트",
			"belt": "후쿠로오비",
			"event": "성인식, 결혼식"
		},
		"en": {
			"name": "Furisode for puberty rite",
			"desc": "Japanese women's puberty rite is at the age of 20. In Japan, women's puberty rite is usually held in January. During that day, 20-year-old people are wearing gorgeous furisode kimono to participate the puberty rite in their own area. The kimonos are really gorgeous; after all, we only have one puberty rite in our life. furisode kimono is the highest level kimono for Japan's unmarried women.",
			"clothNum": "over 50 sets ",
			"acc": " bag, Zori, embroidery socks, bags, kimono, kimono underwear, jacket loop, with Yang, exquisite decorative belt, exquisite hair ornaments",
			"hair": "hair design included.",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "sale set",
			"belt": "bag band",
			"event": " Adult wedding ceremony  wedding event."
		},
		"ja": {
			"name": "成人式の振袖セット",
			"desc": "日本女性の成人式は20歳、1月の時に綺麗な着物を着て、自分の地域の成人式へと行きます。振袖は日本の未婚女性の中でも、一番にいい着物となります。人生に一度だけしか着ない着物です。",
			"clothNum": "over 50 sets ",
			"acc": " 袋帯、草履、刺繍の靴下、バッグ、着物、着物の下着、襦袢、帯揚、上品な飾り帯、上品な髪飾り",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め)",
			"gender": "女性用",
			"feature": "割引セット",
			"belt": "袋帯",
			"event": "成人式、披露宴、結婚式、お尋ね等"
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
		},
		"ko": {
			"name": "화려한 성인식 후리소데",
			"desc": "비단 재질 중에 제일 고품질적인 정견(正绢）재질을 사용하고, 금박 인쇄, 수공적인 자수, 화려하고 불범하니 당신에게 고대의 왕실의 귀족이 된듯한 경험을 줄 수 있다. 일사람들의 성인례에 대한 중요도 후리소데로 통하여 알 수 있다. 많은 부모들은 자신의 딸 자기 인생의 주인공이 되는 성인식을 참석할 수 있도록 코스트를 불구하면서 도와 준다.",
			"clothNum": "20벌 이상",
			"acc": "후쿠로오비, 조리, 자수 양말, 가방, 기모노, 기모노 내의, 쥬방, 한에리, 정교한 장식띠, 정교한 머리스타일",
			"hair": "헤어스타일 설게 포함됨",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "특별 세일 세트",
			"belt": "후쿠로오비",
			"event": "성인식, 결혼식"
		},
		"en": {
			"name": " Luxury furisode for puberty rite",
			"desc": " Being the best silk material, gilding patterns, hand embroidery, extraordinary gorgeous, the luxury furisode for puberty rite gives you the best experience of the ancient royal family. In Japan, when you see furisode kimono, you will know how important the puberty rite is for Japanese. Many parents will spare no expense to help their children to participate in a puberty rite where they are the protagonist.",
			"clothNum": "over 20 sets",
			"acc": "bag band, Zori, embroidery socks, bags, kimono, kimono underwear, jacket loop, semi- belt, with Yang, exquisite decorative belt, exquisite hair ornaments",
			"hair": "hair design included.",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "sale set",
			"belt": "bag band",
			"event": "Adult wedding ceremony  wedding event"
		},
		"ja": {
			"name": " 豪華成人式振袖",
			"desc": " 正絹、熨斗、手作業の刺繍で出来上がっています。まるで城の中にいるように、自分をおしゃれにしましょう。日本での成人式の重要差は、振袖着物の作りからわかります。日本では、親は子供の成人式を精一杯応援し、サポートします。",
			"clothNum": "20セットを超えます",
			"acc": "袋帯、草履、刺繍の靴下、バッグ、着物、着物の下着、襦袢、帯揚、上品な飾り帯、上品な髪飾り",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用 ",
			"feature": "割引セット",
			"belt": "袋帯",
			"event": "成人式、披露宴、結婚式、お尋ね等"
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
		},
		"ko": {
			"name": " 명품 기모노",
			"desc": "일반적인 것 보다는 좀 더 화려한 기모노를 체험해보고 싶지 않은 가? 우리는 더 화려한 기모노를 체험하고 싶어하는 고객님들에게 이 명품 기모노 세트를 준비했다. 기모노에 사용된 재질 사용은 더욱 정교하며 모든 물품들은 전부 한땀한땀 공을들여 준비한 것이다. 특별한 당신을 위한 특별한 준비가 되어 있으니 꼭 한 번 해보는 것을 추천한다.",
			"clothNum": "20벌",
			"acc": "후쿠로오비, 조리, 자수양말, 가방, 기모노, 기모노 내의,쥬방, 정교한 머리 스타일, 오비아게, 오비시메",
			"hair": "헤어스타일 설게 포함됨",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "특별 추천 세트",
			"belt": "후쿠로오비",
			"event": "각종 상화에 적용됨"
		},
		"en": {
			"name": " Brand kimono",
			"desc": "Do you want to experience more luxurious kimonos? We provide this type brand kimono for customers who want to become more luxurious. This type of kimonos is made from more sophisticated materials, and all items are carefully selected. They are special preparation for you, which is worth trying.",
			"clothNum": "20벌",
			"acc": "bag band, Zori, embroidery socks, bags, kimono, kimono underwear, jacket loop, exquisite hair ornaments, with Yang, with the associations",
			"hair": "hair design included.",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "suggested set",
			"belt": "bag band",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": " ブランドの着物セット",
			"desc": "更におしゃれで豪華、もっとおしゃれになりたい！と言うお客様のために準備したブランドの着物セットです。このセットでは、素材が更に良く、全ての物全部心から選んでいます。",
			"clothNum": "20セット",
			"acc": "袋帯、草履、刺繍の靴下、バッグ、着物、着物の下着、襦袢、上品な髪飾り、帯揚、帯メ",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用 ",
			"feature": "お勧めセット",
			"belt": "袋帯",
			"event": " いろいろな場面でご使用なれます。"
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
		},
		"ko": {
			"name": " 졸업식용 하카마",
			"desc": "메이지 시대 학습원 여학부부장, 화족여학교교장, 여자예법가 시모타 가시(下田歌子)는 남자가 입는 하카마를 개량하여 나온 하카마는 여성의 유니폼으로 사용하게 되었다. 여자들에게 하카마는 졸업식에 착용하는 예복으로 사용되어 왔다. 신발은 쪼리가 될 수도 있고 부츠를 신을 수도 있다. 신발을 신는 방식은 대정시기부터 전해진 방식이다",
			"clothNum": "20벌",
			"acc": "한하바오비, 조리, 자수양말, 가방, 기모노, 기모노 내의",
			"hair": "헤어스타일 설게 포함됨",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"belt": "한하바오비",
			"event": "졸업식"
		},
		"en": {
			"name": " Kamishimo for graduation ceremony",
			"desc": " Meiji era learning school female school minister, the Chinese women's school principals, women's law and practice Shimoda song to the man riding a horse after the transformation of the old sea tea as a woman school uniforms. 袴 also more as a woman graduation as a graduation ceremony dress. Shoes can be fitted with grass, can also be boots, boots with the Taisho period is left to wear the law",
			"clothNum": "20sets",
			"acc": "half band, straw, embroidery socks, bags, kimono, kimono underwear ",
			"hair": "hair design included.",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"belt": "half band",
			"event": "Graduation ceremony"
		},
		"ja": {
			"name": " 卒業式用、袴セット",
			"desc": " 明治に入ると、女子教育の黎明期を迎えます。東京女学校や東京女子師範学校などが相次いで創立されました。そこで、女子生徒たちにどのような服装をさせるかが議論となりました。当時の学校は、いすに座って授業を受ける欧米式。従来の着物に帯というスタイルでは、帯や裾が乱れやすいという問題がありました。そのため、政府はこの時代としては例外的に女学生に男袴の着用を認めました。",
			"clothNum": "20セット",
			"acc": "半副帯、草履、刺繍の靴下、バッグ、着物、着物の下着",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用 ",
			"belt": "半副帯",
			"event": "卒業式"
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
			"name": "访问者",
			"desc": "访问者并没有已婚未婚的分别。访问者是整体染上图案的和服，它从下摆，左前袖，左肩到领子展开后是一幅图画，特徵是称为「絵羽(えば)」的这种形式。适合访问者的有：友人婚宴、派对、陪同入学典礼、茶会、同学会、相亲等社交场合",
			"clothNum": "20件",
			"acc": "袋带，草履，刺绣袜子，包包，和服，和服内衣，襦袢，精致装饰带，精致发饰",
			"hair": "包含发型设计",
			"cloth-type": "和服(春冬首选)",
			"gender": "女士",
			"belt": "袋带",
			"event": "登门拜访"
		},
		"ko": {
			"name": " 방문자",
			"desc": "방문자같은 경우에는 미혼과 기혼의 구별이 없다. 방문자의 기모노는 전체적으로 문양이 있는 기모노이다. 기모노의 스소, 좌측 마에아와세, 좌측 어깨에서 옷깃까지 전개된 문양이 마치 한 폭의 그림같으며 특별하게 에바(絵羽(えば))라는 형식으로 부른다. 방문자 세트의 경우는 결혼식, 파티, 입학식, 차회, 동호회, 선보기등 사적인 경우에 쓰는 일이 많다.",
			"clothNum": "20벌",
			"acc": "후쿠로오비, 조리, 자수 양말, 가방, 기모노, 기모노 내의, 쥬방, 정교한 장식띠, 정교한 머리 스타일",
			"hair": "헤어스타일 설게 포함됨",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"belt": "후쿠로오비",
			"event": "등문방문"
		},
		"en": {
			"name": " Visitors’",
			"desc": "Visitor’ kimonos do not separate married or unmarried types. Visitors’ kimono is painted with patterns overly. It forms a picture if the lower hem, left front sleeves, left shoulder and collar are unfolded, characterized by what is called as “絵羽(えば)”. Social occasions suitable for visitors’ kimono including: friends’ wedding, party, accompanying entrance ceremony, tea party, students reunion, blind date.",
			"clothNum": "20sets",
			"acc": "bag band, Zori, embroidery socks, bags, kimono, kimono underwear, jacket loop, exquisite decorative belt, exquisite hair ornaments",
			"hair": "hair design included.",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"belt": "bag band",
			"event": "Visiting someone"
		},
		"ja": {
			"name": " お尋ねセット",
			"desc": "お尋ねの着物は、結婚、未婚、関係なしに着れます。着物の下から左裾、左肩から襟まで絵羽と言う形の絵となっておりあます。このセットにお勧めな場面：披露宴、パーティー、入学式の付き添い、お茶会、同窓会、お見合い等",
			"clothNum": "20セット",
			"acc": "袋帯、草履、刺繍の靴下、バッグ、着物、着物の下着、襦袢、上品な飾り帯、上品な髪飾り",
			"hair": "ヘアスタイルのセットを含む",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用 ",
			"belt": "袋帯",
			"event": "お尋ね、訪問等"
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
		},
		"ko": {
			"name": "할인 여성 기모노",
			"desc": "원가는 5000엔이며 매일 그 중에 20개를 선택하여 할인된 기모노 대여세트로 매우 실질적이다. 기모노의 종류는 소박한 색깔이 많고 선착순으로 먼저 등록하신 분들에게 기회가 있다. 사전의 예약과 미리 등록 하시는 것이 불가능하며 노인과 같이 연장자 분들에게 안성맞춤인 종류가 많다.",
			"clothNum": "20벌",
			"acc": "한하바오비, 조리, 양말, 가방, 기모노, 기모노 내의,쥬방，장식띠",
			"hair": "헤어스타일 설계는 1000엔 추가 필요",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "여성",
			"feature": "특별 세일 세트",
			"belt": "한하바오비",
			"event": "등문방문"
		},
		"en": {
			"name": "Women's privilege kimono",
			"desc": "originally 5000 yen. However 20 kimonos will be selected as a discount package every day, which is very pricerite. The design and colors of Kimono are very simple; first comes first serves, it does not support appointment and reservations; however most of the design and color are suitable for the elderly ladies.",
			"clothNum": "about 20 sets",
			"acc": "half band, zori, socks, bags, kimono, kimono underwear, loop, decorative belt",
			"hair": "hair design needs additional 1,000 Yen",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Ladies ",
			"feature": "sale sets",
			"belt": "half band",
			"event": "Visiting someone"
		},
		"ja": {
			"name": "女性着物お得セット",
			"desc": "毎日5000円相当のセット商品の中から20セットを選び、お得割引の対象になります。着物はシンプルデザインが多く、中年や年輩の女性たちにピッタリです。また、当店は予約制ではなく、来た人から順番に早い者勝ちです。",
			"clothNum": "約 20 セット",
			"acc": "半副帯、草履、靴下、バッグ、着物、着物の下着、襦袢、飾り帯",
			"hair": "ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "女性用",
			"feature": "割引セット",
			"belt": "半副帯",
			"event": "お尋ね、訪問等"
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
		},
		"ko": {
			"name": "남성 기모노",
			"desc": "기모노의 아름다움은 미를 추구하는 여성들만이 선호하는 것이 아니고 남자들도 남성 기모노에 있는 그런 미을 체험해 볼 수 있다. 에도기모노공방- 아 는 남성들을 위해 50벌 이상의 남성기모노를 준비해 놓았다. 여성기모노처럼 선택폭이 넓지 않고, 색깔도 화려하다고 할 수는 없지만 편의성을 추구하는 남성들에게는 안성맞춤이라 생각한다.",
			"clothNum": "50벌이상",
			"acc": "오비, 조리, 양말, 가방, 기모노, 기모노 내의, 쥬방",
			"hair": "헤어 스타일에 포함되지 않음",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "남성",
			"belt": "오비",
			"event": "각종 상황에 적용됨"
		},
		"en": {
			"name": "Men's kimono",
			"desc": "The beauty of kimono is not only belonging to the beauty of ladies, men can also experience the masculine sense of kimono. Edo Kimono Studio - Elegance provides 50 sets of kimonos for male guests. Although male guests do not have that many choices as female guests, and the color of male kimono is not so bright, the simple style just fit every male guests.",
			"clothNum": "over 50sets",
			"acc": "belts, Zori, socks, bags, kimono, kimono underwear, jacket loop",
			"hair": "no hair design",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Men’s",
			"feature": "sale sets",
			"belt": "belts",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": "男性の着物セット",
			"desc": "着物の美しさは女性だけではなく、男性にもあります。江戸和装工房-雅は男性の着物を50セット以上準備しています。女性程、種類は多くないが、シンプルで男性向きにピッタリです。",
			"clothNum": " 50セットを超えます",
			"acc": "ベルト、草の靴、靴下、バッグ、着物、和装下着、ジャケットループ",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "男性用",
			"feature": "割引セット",
			"belt": "ベルト",
			"event": " いろいろな場面でご使用なれます。"
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
		},
		"ko": {
			"name": " 어린이 타입의 기모노 ",
			"desc": "귀여운 아이들이 귀여운 기모노를 입게 되면 더욱 귀엽게 될 것이라 생각한다. 기모노를 입은 귀여운 아이들과 함께 산책한다면 좋은 추억이 될 것이라 생각한다. 색깔부터 문양까지 수많은 기모노 중에서 아이의 마음에 드는걸 선책하게 해주는 것 또한 즐거운 추억이 되지 않을까 ? 사용 가능 신장은 95cm`~140cm의 범위에 있다. ",
			"clothNum": "50벌이상",
			"acc": "헤코오비, 조리, 양말, 가방, 기모노,기모노 내의，쥬방，기모노 외의",
			"hair": "헤어스타일 설계는 1000엔 추가 필요",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "아동",
			"belt": "헤코오비",
			"event": "각종 상황에 적용됨"
		},
		"en": {
			"name": "Child kimono ",
			"desc": "lovely children wearing a lovely child kimono will become cuter. The scene when the children put on a kimono and walk together with the family is full of warm and sweet. From the favorite color to the decorative design, the children are full of joy at the beginning of selecting. Our kimonos are applicable to children with height of 95cm to 140cm",
			"clothNum": "over 50sets",
			"acc": "Binger belt, Zori, socks, bags, kimonos, kimono underwear, jacket Loop, kimono jacket",
			"hair": " hair design needs to pay additional 1,000 Yen",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Children’",
			"belt": "Binger belt",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": "子供の着物セット ",
			"desc": "子供達の可愛いらしさプラス着物、家族全員で着物を着て、みんなで散歩をしましょう。着物は好きな色から好きな模様まで選べます。適用の身長：95-140cm",
			"clothNum": "50セットを超えます",
			"acc": "へこ帯、草履、靴下、バッグ、着物、着物の下着、襦袢",
			"hair": " ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "子供用",
			"belt": "へこ帯",
			"event": " いろいろな場面でご使用なれます。"
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
		},
		"ko": {
			"name": " 여자아이 후리소데",
			"desc": "일본에 제일 화려한 여성기모노이며 여자아이가 입게되면 흡사 공주와 같은 분위기를 자아낸다. 화려한 기모노를 입고 고풍스러운 아사쿠사 신사를 걸어다니며 관광한다면 색다른 경험과 동시에 잊을 수 없는 추억이 될 수 있을거라 생각한다. 선착순이니 빨리 예약하는 자에게 기회가 돌아간다. 사용 가능 신장은 115cm~140cm의 범위에 있다. ",
			"clothNum": "6벌",
			"acc": "호화스러운 오비, 조리, 양말, 가방, 기모노, 기모노 내의,쥬방",
			"hair": "헤어스타일 설계는 1000엔 추가 필요",
			"cloth-type": "기모노 (봄과 겨울에 추천)",
			"gender": "아동",
			"feature": "화려한 세트",
			"event": "각종 상황에 적용됨"
		},
		"en": {
			"name": " Girls’ Furisode kimono",
			"desc": "Japan's most beautiful children kimono, children wearing it will instantly become a small Japanese princess. Roaming in antique Asakusa Temple, wearing a gorgeous kimono, children will meet a different self, and have a good memory. However we do not have too many of the Girls’ Furisode kimono; and the choices are limited; you’d better come earlier to get the best ones. They are applicable to girls with height from 115cm to 140cm.",
			"clothNum": "6 sets",
			"acc": "luxury belt, Zori, socks, bags, kimono, kimono underwear, jacket loop",
			"hair": " hair design needs to pay additional 1,000 Yen",
			"cloth-type": "Kimono (spring and winter preferred)",
			"gender": "Children’",
			"feature": "Gorgeous set",
			"event": "Various occasions are applicable"
		},
		"ja": {
			"name": " 女の子振袖着物セット",
			"desc": "日本で一番豪華な女の子の着物、お姫様のカッコをして、浅草寺を散歩しよう。お子様に上品な着物を着させて、一番の思い出を残しましょう。数限定ですので、早い者勝ちです。適応身長115cm-140cm。",
			"clothNum": "6 セット",
			"acc": "豪華な帯、草履、靴下、バッグ、着物、着物の下着、襦袢",
			"hair": " ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": "着物（春冬のお勧め）",
			"gender": "子供用",
			"feature": "精選セット",
			"event": " いろいろな場面でご使用なれます。"
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
		},
		"ko": {
			"name": "여성 유카타",
			"desc": "여성 유카타는 여름에만 있는 한정 세트이며 유카타 대여 가능 기간은 6월 1일부터 9월 15일까지이다. 유카타는 간편한 기모노이라 할 수 있으며 재질과 입는 방법은 일반적인 기모노와 다르다. 재질은 얇고 활동성이 좋으며 무난한 문양은 까지 평상복으로 입기에 안성맞춤이다.",
			"clothNum": "300벌정도",
			"acc": "한하바오비, 나막신, 가방, 유카타, 유카타 내의, 각종 소물, 장식띠",
			"hair": "헤어스타일 설계는 1000엔 추가 필요.",
			"cloth-type": " 유카타(여름과 가을에 추천)",
			"gender": "여성",
			"event": "여름에 불꽃 축제",
			"belt": "한하바오비"
		},
		"en": {
			"name": "Lady’s yukata",
			"desc": "Ladies yukata is only offered in summer time (from June 1st to September 15th). yukata is a kind of simple kimono. It is different from other kimonos in the material and wearing methods. Its texture is thin, more casual, and with more beautiful colors, it is said to be as the best dress to participate in fireworks and some summer festival activities.",
			"clothNum": " about 300sets",
			"acc": "half band, clogs, bags, yukatas, yukata underwear, all kinds of small objects, decorative belt",
			"hair": "hair design needs to pay additional 1,000 Yen.",
			"cloth-type": " yukata (summer and autumn preferred)",
			"gender": "Ladies",
			"event": "Summer fireworks",
			"belt": "half band"
		},
		"ja": {
			"name": "女性浴衣セット",
			"desc": "女性用の浴衣は夏限定(6月1日から9月15日まで)となります。このセットの浴衣は便利差を最優先にした浴衣です。素材も、着方も一般の浴衣と異なります。薄め、カジュアル、派手目に出来上がっています。花火大会や祭りなどに最適です。",
			"clothNum": " 約300セット",
			"acc": "半幅帯、下駄、バッグ、浴衣、浴衣の下着、その他小物",
			"hair": "ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": " 浴衣  （夏秋のお勧め）",
			"gender": "女性用",
			"event": "花火大会",
			"belt": "半幅帯"
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
		},
		"ko": {
			"name": "남성 유카타",
			"desc": "남성 유카타는 여름에만 있는 한정 세트이며 유카타 대여 가능 기간은 6월 1일부터 9월 15일까지 이다. 유카타는 간편한 기모노이라 할 수 있으며 재질과 입는 방법이 일반적인 기모노와 다르다. 재질은 얇고 활동성이 좋으며 무난한 문양은 까지 평상복으로 입기에 안성맞춤이다.",
			"clothNum": "100벌정도",
			"acc": "가쿠오비, 나막신, 가방, 유카타, 유카타 내의, 각종 소물",
			"hair": "헤어스타일 설계 포함되지 않음.",
			"cloth-type": " 유카타(여름과 가을에 추천)",
			"gender": "남성",
			"event": "여름에 불꽃 축제",
			"belt": "카쿠오비"
		},
		"en": {
			"name": "Men's yukata",
			"desc": "Men's yukata is only offered in summer time (from June 1st to September 15th). yukata is a kind of simple kimono. It is different from other kimonos in the material and wearing methods. Its texture is thin, more casual, and with more beautiful colors, it is said to be as the best dress to participate in fireworks and some summer festival activities.",
			"clothNum": "about 100 sets ",
			"acc": "corner band, clogs, bags, yukatas, yukatas underwear, and various small things",
			"hair": "does not contain hair design",
			"cloth-type": " yukata (summer and autumn preferred)",
			"gender": "Men’s",
			"event": "Summer fireworks",
			"belt": "corner band"
		},
		"ja": {
			"name": "男性浴衣セット",
			"desc": "男性用の浴衣は夏限定(6月1日から9月15日まで)となります。このセットの浴衣は便利差を最優先にした浴衣です。素材も、着方も一般の浴衣と異なります。薄め、カジュアル、派手目に出来上がっています。花火大会や祭りなどに最適です。",
			"clothNum": "約100セット",
			"acc": "角帯、下駄、バッグ、浴衣、浴衣の下着、その他小物",
			"hair": "ヘアスタイルのセットは含まない。",
			"cloth-type": "浴衣  （夏秋のお勧め）",
			"gender": "男性用",
			"event": "花火大会",
			"belt": "角帯"
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
		},
		"ko": {
			"name": " 아동 유카타 ",
			"desc": "귀여운 아이들이 귀여운 유카타를 입게 되면 더 귀여워 지겠죠 ? 유카타를 입은 귀여운 아이들과 함께 가족끼리 나들이를 한다면 즐거운 추억이 되지 않을까요 ? 색깔부터 시작해 무늬까지, 시작부터 모든걸 지원해드립니다.",
			"clothNum": "50벌이상",
			"acc": "헤코오비, 나막신, 가방, 유카타",
			"hair": " 헤어스타일 설계는 1000엔 추가 필요. ",
			"cloth-type": " 유카타(여름과 가을에 추천)",
			"gender": "아동",
			"belt": "헤코오비",
			"event": "여름에 불꽃 축제"
		},
		"en": {
			"name": " Children's yukata ",
			"desc": "When lovely children put on a lovely yukata, they will become lovelier. The scene when the children put on a yukata and walk together with the family is full of warm and sweet. From the favorite color to the decorative design, the children are full of joy at the beginning of selecting.",
			"clothNum": "over 50 sets",
			"acc": " soldiers with, clogs, bags, yukatas",
			"hair": " hair design needs to add 1,000 Yen ",
			"cloth-type": " yukata (summer and autumn preferred)",
			"gender": "Children",
			"belt": "soldiers with",
			"event": "Summer fireworks"
		},
		"ja": {
			"name": " 子供浴衣セット ",
			"desc": "子供達の可愛いらしさプラス着物、家族全員で着物を着て、みんなで散歩をしましょう。着物は好きな色から好きな模様まで選べます。",
			"clothNum": "50セットを超えます",
			"acc": " へこ帯,下駄,バッグ、浴衣",
			"hair": " ヘアセットの場合、1000円の追加料金となります。",
			"cloth-type": " 浴衣（夏秋のお勧め）",
			"gender": "子供用",
			"belt": "へこ帯",
			"event": "花火大会"
		}
	}
];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FaqItem = __webpack_require__(41);

var _FaqItem2 = _interopRequireDefault(_FaqItem);

var _StepItem = __webpack_require__(42);

var _StepItem2 = _interopRequireDefault(_StepItem);

var _faq = __webpack_require__(43);

var _faq2 = _interopRequireDefault(_faq);

var _step = __webpack_require__(44);

var _step2 = _interopRequireDefault(_step);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _dict = __webpack_require__(2);

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
      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
      return _react2.default.createElement(
        'div',
        { className: 'section qa-section container', id: 'qa-section' },
        _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"question": {
			"zh-tw": "真的可以空手而來嗎",
			"zh-cn": "真的可以空手而来吗?",
			"ko": "진짜 빈 손으로 가도 될까요?",
			"en": "Can we really come without taking anything?",
			"ja": "手ぶらで来てもいいですか？"
		},
		"answer": {
			"zh-tw": "是的，完全沒有問題，我們提供和服浴衣穿戴所需所有服飾配件。",
			"zh-cn": "是的，完全没有问题，我们提供和服浴衣穿戴所需所有服饰配件。",
			"ko": "네, 전혀 문제가 없습니다. 저희는 기모노와 유카타를 입기에 관련한 모든 것을 제공해 드리는 것으로 되고 있습니다.",
			"en": "Yes, of course, we provide all necessary accessories needed wearing kimono andyukata.",
			"ja": " 手ぶらで来てもらって全然大丈夫です。着物や浴衣に必要な物は全てこちらで提供致しますので。"
		},
		"askerName": {
			"zh-tw": "耳機君",
			"zh-cn": "耳机君",
			"ko": "이어폰 씨",
			"en": "Mr earphone",
			"ja": "イヤホン君"
		},
		"askerUrl": "/images/faq-section/boy-1.png"
	},
	{
		"id": 2,
		"question": {
			"zh-tw": "穿戴完整需要花費多少時間？",
			"zh-cn": "穿戴完整需要花费多少时间？",
			"ko": "전부 갈아입는 시간은 얼마 정도 걸려요?",
			"en": "How long does it take to dress us up?",
			"ja": "着替え等にかかるお時間はどれくらいでしょうか？"
		},
		"answer": {
			"zh-tw": "正常情況下，女性顧客需要花費15分鐘，男生顧客需要花費10分鐘時間。有選擇髮型設計的情況可能需要額外10分鐘時間。",
			"zh-cn": "正常情况下，女性顾客需要花费15分钟，男生顾客需要花费10分钟时间。 有选择发型设计的情况可能需要额外10分钟时间。",
			"ko": "일반적으로 하며 여성고객님같은 경우에는 15분이 필요하고 남성 고객님같은 경우에는 15분을 걸립니다. 머리 스타일 설계까지 선택하신 고객님같은 경우에는 10분 정도의 액외 시간을 걸립니다.",
			"en": "Under normal circumstances, female customers need to spend 15 minutes on dressing, while male guests need 10 minutes. It may take an extra 10 minutes to choose a hairstyle design.",
			"ja": "通常の場合、女性のお客様は15程、男性は10程お時間が必要です。 ヘアデザインをする場合は、10分程の追加になる可能性もあります。"
		},
		"askerName": {
			"zh-tw": "短髮妹",
			"zh-cn": "短发妹",
			"ko": "단발 아가씨",
			"en": "Miss short hair",
			"ja": "短髪妹"
		},
		"askerUrl": "/images/faq-section/girl-1.png"
	},
	{
		"id": 3,
		"question": {
			"zh-tw": "髮飾，頭飾可以單獨租借嗎？",
			"zh-cn": "发饰，头饰可以单独租借吗？",
			"ko": "머리 장식은 따로 렌트하면 가능할까요?",
			"en": "Can hair ornaments, and headdress be rented alone?",
			"ja": "ヘア飾り、ヘアアクセサリー等はレンタル可能でしょうか？"
		},
		"answer": {
			"zh-tw": "是的，可以。小物配件都是可以單獨租賃的。對於要求髮型設計服務的顧客，我們將免費提供這些飾品",
			"zh-cn": "是的，可以。小物配件都是可以单独租赁的。对于要求发型设计服务的顾客，我们将免费提供这些饰品。",
			"ko": " 네, 가능합니다. 작은 물품들은 다 별로 렌트하기가 가능합니다. 헤어스타일을 설계하는 것으로 된 고객님들에게 공짜로 제공해 드립니다.",
			"en": "Yes, of course. Small pieces of accessories can be rent separately. For those who require hair design services, we will provide these accessories free of charge.",
			"ja": "ヘア飾り、ヘアアクセサリー等は別でレンタルできます。ヘアデザインを選んで頂い方には、無料でお貸しします。"
		},
		"askerName": {
			"zh-tw": "花輪同學",
			"zh-cn": "花轮同学",
			"ko": "화론 학생",
			"en": "Student Hwalun",
			"ja": "花輪学生"
		},
		"askerUrl": "/images/faq-section/boy-2.png"
	},
	{
		"id": 4,
		"question": {
			"zh-tw": "換下來的衣服可以幫忙保管嗎",
			"zh-cn": "换下来的衣服可以帮忙保管吗?",
			"ko": "자기의 옷은 보관해 줄 수 있을까요?",
			"en": "Can you help taking care of our belongings and changed clothes?",
			"ja": "服やお荷物のお預かりはできますか？"
		},
		"answer": {
			"zh-tw": "當然可以，我們提供帶鑰匙的箱子免費供客人保存私人物品。 （貴重品除外)",
			"zh-cn": "当然可以，我们提供带钥匙的箱子免费供客人保存私人物品。（贵重品除外）",
			"ko": "사적인 물품을 보관할 수 있도록 잠길 수 있는 캐비닛을 공짜로 제공해 드립니다.(귀중한 물품들 제외)",
			"en": "The key box is free for guests to save personal belongings. (Except for valuables)",
			"ja": "鍵つきのロッカーがありますので、無料で提供致します。（貴重品を除く）"
		},
		"askerName": {
			"zh-tw": "大辮子醬",
			"zh-cn": "大辫子酱",
			"ko": "변발 언니",
			"en": "Miss plait",
			"ja": "辮髪ちゃん"
		},
		"askerUrl": "/images/faq-section/girl-2.png"
	},
	{
		"id": 5,
		"question": {
			"zh-tw": "如果租賃物品產生破損污漬，我應該怎麼辦",
			"zh-cn": "如果租赁物品产生破损污渍，我应该怎么办？",
			"ko": "렌트로 받은 물품들은 파손이 되거나 더러워지게 됐을 경우 어떻게 하면 좋을 까요?",
			"en": "What should I do if the clothes or other things rented be damaged?",
			"ja": "借り物に汚れや破損が生じた場合、どうすればいいでしょう。"
		},
		"answer": {
			"zh-tw": "對於可以修復洗淨範圍內的服飾物品，無需其他任何額外費用。如果損壞而無法再次使用的情況下 根據物品種類，需要進行相應賠償。請注意與諒解",
			"zh-cn": "对于可以修复洗净范围内的服饰物品，无需其他任何额外费用。如果损坏而无法再次使用的情况下 根据物品种类，需要进行相应赔偿。请注意与谅解。",
			"ko": "원상태로 복귀하기가 가능한 복식물품들은 액외적으로 비용을 받지 않습니다. 만약 손해가 되어 다시 사용할 수 없는 경우는 물품의 종류대로 해 당 배상을 하셔야 합니다. 주의하시면서 이해를 해 주시기 바랍니다.",
			"en": "For any items that can be repaired, no additional cost is required. If it is damaged and cannot be reused any more, then you need to pay an appropriate compensation according to the types of things. Please note and understand.",
			"ja": "当店で修正、直せる破損の範囲内でしたら別料金は必要ありません。また、汚れの場合、当店できれいに洗える場合も別料金は必要ありません。破損があり、修正できない場合は、物によって弁償を請求します。"
		},
		"askerName": {
			"zh-tw": "娃娃頭",
			"zh-cn": "娃娃头",
			"ko": "와와두",
			"en": "wawato",
			"ja": "ワワトウ"
		},
		"askerUrl": "/images/faq-section/girl-3.png"
	},
	{
		"id": 6,
		"question": {
			"zh-tw": "租賃的時間限制有多長",
			"zh-cn": "租赁的时间限制有多长？",
			"ko": "가능한 렌트 시간은 얼마나 됩니까?",
			"en": "How long can I rent anything in your studio?",
			"ja": "レンタルの時間制限はどれくらいですか？"
		},
		"answer": {
			"zh-tw": "正常情況下，租賃時間為當天的10點到18點，根據情況，這個時間有可能變化，我們會另行通知",
			"zh-cn": "正常情况下，租赁时间为当天的10点到18点，根据情况，这个时间有可能变化，我们会另行通知。",
			"ko": "통상적으로 계산을 하면 렌트 시간은 당일의 10시부터 18시까지 되어 있지만 현화를 따라서 변해질 수 있으며 따로 연락해 드릴 수 있습니다.",
			"en": " Under normal circumstances, the rental time is from 10 am to 18 pm of that day. But it will change according to specific situation, and we will notify you if it happens.",
			"ja": "通常の場合、当日の10時-18時までになります。日にちによって時間の変更がある場合もあります。その時はまた通知致します。"
		},
		"askerName": {
			"zh-tw": "雙馬尾醬",
			"zh-cn": "双马尾酱",
			"ko": "쌍변발 언니",
			"en": "Miss Dual horsetail",
			"ja": "二つ辮髪ちゃん"
		},
		"askerUrl": "/images/faq-section/girl-4.png"
	},
	{
		"id": 7,
		"question": {
			"zh-tw": "如果當天無法歸還，我應該怎麼辦",
			"zh-cn": "如果当天无法归还，我应该怎么办？",
			"ko": "당일에 반환을 못 할 경우 어떻게 하면 좋을까요?",
			"en": "What if I cannot return the cloth by the end of the day?",
			"ja": "当日に返還できない時はどうしたらいいでしょう？"
		},
		"answer": {
			"zh-tw": "因為特殊情況，當天無法歸還的情況下，可以選擇追加1000円，延長租賃時間至翌日中午11時。",
			"zh-cn": "因为特殊情况，当天无法归还的情况下，可以选择追加1000円，延长租赁时间至翌日中午11时。",
			"ko": "특수 경우로 인하여 당일에 반환하기가 불가능한 경우 추가 비용 1000엔을 내신 다음에 렌트 시간은 다음 날 점심 11시까지 연장됩니다.",
			"en": "Due to exceptional cases, when you cannot return the things you rented, you can choose to pay extra 1000 yen to extend the rental time to 11:00 am of the next day.",
			"ja": "どうしても当日に返還できない場合は、1000円の追加料金で次の日の朝11時まで延長できます。"
		},
		"askerName": {
			"zh-tw": "阿姨",
			"zh-cn": "阿姨",
			"ko": "아주마",
			"en": "Aunty",
			"ja": "おばあさん"
		},
		"askerUrl": "/images/faq-section/girl-5.png"
	},
	{
		"id": 8,
		"question": {
			"zh-tw": "最終接待時間是什麼時候？",
			"zh-cn": "最终接待时间是什么时候？",
			"ko": "마지막에 접대하는 시간은 언제입니까?",
			"en": "What is the final reception time?",
			"ja": "来店は、一番遅くて何時まででしょうか？"
		},
		"answer": {
			"zh-tw": "正常情況下，我們一天的最終接待時間是17點時。客人穿完衣服後，可能只有30分鐘左右的照相時間，18點之前也要歸還給我們，如果是要過夜的客人，只要是18點之前，我們都會提供服務的，時間根據節日可能產生些許調整，擔心的客人可以聯繫我們諮詢。",
			"zh-cn": "正常情况下，我们一天的最终接待时间是17点时。客人穿完衣服后，可能只有30分钟左右的照相时间，18点之前也要归还给我们，如果是要过夜的客人，只要是18点之前，我们都会提供服务的，时间根据节日可能产生些许调整，担心的客人可以联系我们咨询。",
			"ko": "정상한 경우에는 우리의 영업 시간은 오후 17시까지 되어 있습니다. 고객님들은 기모노를 갈아입은 후에 30분쯤에 기모노를 입고 사진을 찍고 18시전까지 반환을 해야 합니다. 만약 연장을 하시고 싶은 고객님같은 경우에는 당일에 18시전까지 오시면 서비스를 제공할 수 있습니다. 시간은 휴가를 따라서 조정할 수 있기도하고 너무 걱정이 되시면 연락해 주셔도 됩니다.",
			"en": "Normally, our final reception time is 17:00 pm. After the guests wear the clothes, there rests only 30 minutes for them to take photos since they have to return everything before 18:00 pm. As for the overnight guests, as long as it is before 18:00 pm, we will provide services to them; however the time may alter a little in holidays, worried guests can contact us for advice.",
			"ja": "通常の場合、最終来店時間は、17時です。しかし、その場合、お客様の着替え等が済んでから、写真を撮る時間は恐らく30分程しかありません。18時までには回収致します。翌日までお借り頂くお客様に関しては、18時前でしたら接待させていただきます。日付と時間により、時間の調整する可能性もありますので、是非ご来店前にお電話ください。"
		},
		"askerName": {
			"zh-tw": "眼鏡哥",
			"zh-cn": "眼镜哥",
			"ko": "안경오빠",
			"en": "Brother glasses",
			"ja": "眼鏡お兄ちゃん"
		},
		"askerUrl": "/images/faq-section/boy-3.png"
	},
	{
		"id": 9,
		"question": {
			"zh-tw": "可以攜帶自己的服飾僅僅接受穿戴服務嗎？",
			"zh-cn": "可以携带自己的服饰仅仅接受穿戴服务吗？",
			"ko": "자기가 입고 싶은 것을 제공해 드리면 갈아 입는 서비스만 받을 수 있을 까요?",
			"en": "Can I just wear my own dress?",
			"ja": "自分の服や飾り等を持って行き、着替えのサービス等を受けてもよろしいでしょうか？"
		},
		"answer": {
			"zh-tw": "當然可以，我們優惠提供僅僅提供穿戴服務的套餐。但是請不要遺漏所需穿戴的配件",
			"zh-cn": "当然可以，我们优惠提供仅仅提供穿戴服务的套餐。但是请不要遗漏所需穿戴的配件。",
			"ko": " 몰론 가능합니다. 우리는 가격도 싸고 서비스도 좋은 갈아입는 세트를 제공합니다. 하지만 필요한 입을 물품을 누락이 없이 준비를 해 오셔야 할 것을 주의하시기 바랍니다.",
			"en": "Yes, of course, we offer a package that only provides a dressing service. But please do not forget to bring all the necessary accessories.",
			"ja": " もちろん、それは可能です。その場合、お得でサービス致します。忘れ物のないよう、お願いします。"
		},
		"askerName": {
			"zh-tw": "小丸子的媽媽",
			"zh-cn": "小丸子的妈妈",
			"ko": "소완자의 엄마",
			"en": "Mummy of meatball",
			"ja": "小丸子のママ"
		},
		"askerUrl": "/images/faq-section/girl-6.png"
	},
	{
		"id": 10,
		"question": {
			"zh-tw": "關於尺寸，需要特別注意嗎？",
			"zh-cn": "关于尺寸，需要特别注意吗？",
			"ko": " 사이즈를 관련하여 특별히 주의해야 할 것이 있으세요?",
			"en": "Do we need special attention on size?",
			"ja": "サイズについて、何か特別の注意点はありますか？"
		},
		"answer": {
			"zh-tw": "只要臀圍不超過110cm的，我們都是可以提供的，小孩的身高在95cm以上的我們也可以提供的",
			"zh-cn": "只要臀围不超过110cm的，我们都是可以提供的，小孩的身高在95cm以上的我们也可以提供的",
			"ko": "엉덩이 사이즈를 110cm를 초과하지 않으면 다 제공 드릴 수 있습니다. 아이의 키는 95cm이상에 있으면 제공할 수 있습니다. ",
			"en": "We are able to provide service for you as long as your hipline does not exceed 110cm, and children shall above 95cm height.",
			"ja": "ヒップサイズが110cmを超えなければ、全てこちらで対応できます。子供の場合、95cmを超えるサイズもこちらで用意できます。"
		},
		"askerName": {
			"zh-tw": "廣場舞阿姨",
			"zh-cn": "广场舞阿姨",
			"ko": "광장무아주마",
			"en": "Aunty square dance",
			"ja": "広場ダンスおばあさん"
		},
		"askerUrl": "/images/faq-section/girl-7.png"
	},
	{
		"id": 11,
		"question": {
			"zh-tw": "冬天到了，對於穿和服有什麼需要注意的嗎？",
			"zh-cn": "冬天到了，对于穿和服有什么需要注意的吗？",
			"ko": "겨울이 되면 기모노를 입을 때 뭘 주의해야 할까요",
			"en": "What should we pay attention to when wearing kimono in winter?",
			"ja": "冬の時、着物を着るのに何か注意点はありますか？"
		},
		"answer": {
			"zh-tw": "冬天氣溫下降，雖然我們在和服裡面已經準備了襯衣，但為了更加保暖，請另行準備低領的打底衣。同時由於需要 穿上開指襪，所以也請不要穿戴連體的襪褲（能露出腳部即可）",
			"zh-cn": "冬天气温下降，虽然我们在和服里面已经准备了衬衣，但为了更加保暖，请另行准备低领的打底衣。同时由于需要 穿上开指袜，所以也请不要穿戴连体的袜裤（能露出脚部即可）",
			"ko": "겨울에 기온이 떨어집니다. 우리는 기모노 속에 내의를 준비했지만 더 따뜻하게 하려고 하면 따로 준비를 하시고 오셔도 됩니다. 양말을 입고 조리를 입는 거라서 따로 스타킹을 입지 않았으면 좋겠어요. (발이 밖에 나올 수 있게 하시면 됩니다.)",
			"en": "Temperature falls in winter, although we have prepared a shirt inside kimono, in order to keep warm, please prepare low collar underwear. Also because you need to wear socks, so please do not wear conjoined pantyhose (your feet shall be revealed)",
			"ja": "冬の場合、気温が低いため、こちらで防寒の中に着る服は準備をしていますが、念のため、中に防寒の服を着て来てください。同時に、靴下は、指出しの靴下になるため、靴下とズボンが一体化している物を履いて来店するのは避けてください。"
		},
		"askerName": {
			"zh-tw": "中分哥",
			"zh-cn": "中分哥",
			"ko": "앞가르마 오빠",
			"en": "brother Centre parting",
			"ja": "中分お兄ちゃん"
		},
		"askerUrl": "/images/faq-section/boy-4.png"
	},
	{
		"id": 12,
		"question": {
			"zh-tw": "孕婦是否適合穿著和服呢？",
			"zh-cn": "孕妇是否适合穿着和服呢？",
			"ko": "임신 분들은 기모노를 입어도 상관 없으세요?",
			"en": "Are pregnant women suitable for wearing kimono?",
			"ja": "妊婦の場合、着物を着ていいですか？"
		},
		"answer": {
			"zh-tw": "孕婦基本不適合穿著和服。如果實在想要體驗的話，建議3個月以上6個月以內",
			"zh-cn": "孕妇基本不适合穿着和服。如果实在想要体验的话，建议3个月以上6个月以内",
			"ko": "임신하신 분들은 기모노를 안 입는 좋습니다. 만약 체험하고 싶으면 임신기간은 3개월부터 6개월까지 이내에 있으신 분이면 가능합니다.",
			"en": "Pregnant women are basically not suitable for wearing kimono. If you really want to experience it, we recommend coming between 3 months and 6 months.",
			"ja": "妊婦は着物をお避けください、どうしても着物体験をしたい妊婦の方は、妊娠から3ヶ月以上、6ヶ月以内であれば可能です。"
		},
		"askerName": {
			"zh-tw": "小帥哥",
			"zh-cn": "小帅哥",
			"ko": "멋진 오빠",
			"en": "Handsome guy",
			"ja": "イげマン"
		},
		"askerUrl": "/images/faq-section/boy-5.png"
	},
	{
		"id": 13,
		"question": {
			"zh-tw": "如果超過營業時間或者需要隔夜的話囧麼辦。 。 。",
			"zh-cn": "如果超过营业时间或者需要隔夜的话囧么办。。。",
			"ko": "만약에 영업 시간을 지나가거나 다음 날에 반환하기가 필요할 때 어떻게 하면 좋을까요...",
			"en": "What can I do if I exceed the business hours or need to use it overnight...",
			"ja": "翌日まで借りたい場合はどうすればいいでしょう？"
		},
		"answer": {
			"zh-tw": "我們需要追加隔夜費一天1000日元，請在付款的時候告知我們",
			"zh-cn": "我们需要追加隔夜费一天1000日元，请在付款的时候告知我们",
			"ko": "저희는 추가 비용 1000엔을 받을 것이며 청산을 할 때 말씀을 해 주시기 바랍니다.",
			"en": "You need to pay an extra 1,000 yen. Please inform us at the time of payment.",
			"ja": "翌日まで借りたい場合、お支払の時にお伝えください。"
		},
		"askerName": {
			"zh-tw": "眼鏡姐姐",
			"zh-cn": "眼镜姐姐",
			"ko": "안경언니",
			"en": "sister glasses",
			"ja": "眼鏡お姉ちゃん"
		},
		"askerUrl": "/images/faq-section/girl-8.png"
	},
	{
		"id": 14,
		"question": {
			"zh-tw": "小孩子和服的尺寸範圍？",
			"zh-cn": "小孩子和服的尺寸范围？",
			"ko": "애기의 기모노의 사이즈 범위는요?",
			"en": "What is the size range of children’s kimono?",
			"ja": "子供服のサイズは何がありますか？"
		},
		"answer": {
			"zh-tw": "我們可以為小孩提供的尺寸範圍是95cm到140cm為止。",
			"zh-cn": "我们可以为小孩提供的尺寸范围是95cm到140cm为止。",
			"ko": "애기같은 경우에는 저희는 제공할 수 있는 사이즈 범위는 95cm에서 150cm까지가 되어 있습니다.",
			"en": "We can provide a size range of 95cm to 140cm for children.",
			"ja": "子供服のサイズ範囲は95cm-140cmまであります。"
		},
		"askerName": {
			"zh-tw": "原住民妹妹",
			"zh-cn": "原住民妹妹",
			"ko": "원주민 동생",
			"en": "sister aborigines",
			"ja": "原住民妹"
		},
		"askerUrl": "/images/faq-section/girl-9.png"
	},
	{
		"id": 15,
		"question": {
			"zh-tw": "是否可以用信用卡付款？",
			"zh-cn": "是否可以用信用卡付款？",
			"ko": "신용카드로 계산하는 것도 가능할까요?",
			"en": "Can I pay by credit card?",
			"ja": "クレジットカード等の使用はできますか？"
		},
		"answer": {
			"zh-tw": "我們不能夠使用信用卡，支持現金支付。",
			"zh-cn": "我们不能够使用信用卡，支持现金支付。",
			"ko": "저희 가게는 신용카드로 계산할 수 없고요. 현금으로 계산을 하셔야 하는 것으로 되어 있습니다.",
			"en": "Credit cards cannot be used here, however we support cash payments.",
			"ja": "カード等でのお支払はできません。現金になります。"
		},
		"askerName": {
			"zh-tw": "時尚黑GAL",
			"zh-cn": "时尚黑GAL",
			"ko": "펜션흑GAL",
			"en": "fashion black GAL",
			"ja": "ペイシェント黒GAL"
		},
		"askerUrl": "/images/faq-section/girl-10.png"
	}
];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"title": {
			"zh-tw": "第1步：預約確認",
			"zh-cn": "第1步：预约确认",
			"ko": "첫 번째：예약 확인",
			"en": "Step1：Reservation confirmation",
			"ja": "第一：予約確認"
		},
		"content": {
			"zh-tw": "按照約定時間到店，到店的親，麻煩您報上預約信息，例如預約姓名，人數，還有預約的時間，我們進行確認，套餐的選擇和支付，我們來店之後再進行",
			"zh-cn": "按照约定时间到店，到店的亲，麻烦您报上预约信息，例如预约姓名，人数，还有预约的时间，我们进行确认，套餐的选择和支付，我们来店之后再进行",
			"ko": "예약시간대로 오신 분이 예약 정보를 말씀을 해 주시기 바란다. 예를 들고자 하면 인수, 예역시간, 우리는 정보를 가지고 확인을 한다. 세트의 선택, 지불은 오신 드음에 실시할 예정이다.",
			"en": "You should come to the shop in accordance with the agreed time. When you arrive at the shop, please tell us your reservation information, such as the name, number, as well as the time for us to make confirmation. Package selection and payment can be preceded after you come to the shop.",
			"ja": "予約のお時間までにご来店ください。お名前、予約情人节報等をお伝えください。例：予約人のご氏名、予約時間認証後、セット選びとお支払いは来店後になります。"
		},
		"url": "/images/faq-section/step1.jpg"
	},
	{
		"id": 2,
		"title": {
			"zh-tw": "第2步：和服挑選",
			"zh-cn": "第2步：和服挑选",
			"ko": "둘 번째：기모노의 선택",
			"en": "Step2: Kimono selection",
			"ja": "第二：着物選び："
		},
		"content": {
			"zh-tw": "在1樓我們工作人員進行套餐介紹，介紹完之後，親可以從琳瑯滿目的和服當中選出一款最符合自己的。日本人常說，选和服就是一場相遇，第一眼看中的都是緣分。所以親不要猶豫哦。盡情的挑選吧",
			"zh-cn": "在1楼我们工作人员进行套餐介绍，介绍完之后，亲可以从琳琅满目的和服当中选出一款最符合自己的。日本人常说，选和服就是一场相遇，第一眼看中的都是缘分。所以亲不要犹豫哦。尽情的挑选吧",
			"ko": "근무 인원들은 1층에서 세트 소개를 해 드릴 예정이고 소개를 드린 다음에 당신은 다종다양의 기모노 중에 자기가 제일 마음에 든 하나를 선택하시면 된다. 일본 사람들은 기모노를 선택하는 것은 한 만남이라고 항상 얘기를 하고 있으며 바로 첫 눈에 마음에 든 것은 연분이라고 생각을 하는 것을 의미한다. 그래서 주저하지 마시고 좋아하는 대로 선택하시면 된다. ",
			"en": "Our staff will introduce the package to you in the first floor, after that you could choose kimonos that fit you best from various dazzling kimonos. Japanese often say that kimono is an encountering, every first glance is predestination. So do not hesitate, just enjoy the selection.",
			"ja": "一階にて、当店のスタッフが着物のセット等につき、ご紹介致します。また、当店のスタッフとご一緒に、お客様に最もお似合いの着物を選びましょう。日本人は、“着物選びは出会い、運命”だと良く言いますので、ご遠慮なくお選びください。"
		},
		"url": "/images/faq-section/step2.jpg"
	},
	{
		"id": 3,
		"title": {
			"zh-tw": "第3步：支付",
			"zh-cn": "第3步：支付",
			"ko": "셋 번째：지불",
			"en": "Step3: Payment",
			"ja": "第三：お支払い"
		},
		"content": {
			"zh-tw": "挑選結束後，我們要進行先付款，支付結束後就可以馬上去二樓進行更衣了，男士我們是在3樓進行更衣的",
			"zh-cn": "挑选结束后，我们要进行先付款，支付结束后就可以马上去二楼进行更衣了，男士我们是在3楼进行更衣的",
			"ko": "결정하고 난 다음에 먼저 지불을 하셔야 하며 지불한 다음에 바로 2층에 올라가서 기모노를 갈아 입으시면 된다. 남자같은 경우에는 3층에서 갈아입는 것으로 되고 있다.",
			"en": "After the selection, you have to pay first; then you could go to the second floor to change the dress, men’s dressing room is in the third floor.",
			"ja": "着物をお選び頂いた後、先払いとなります。お支払いが済みましたら、二階へ行き、着替えます。男性の方は三階へ。"
		},
		"url": "/images/faq-section/step3.jpg"
	},
	{
		"id": 4,
		"title": {
			"zh-tw": "第4步：存放隨身物品",
			"zh-cn": "第4步：存放随身物品",
			"ko": "네 번째：수신 물품 보관",
			"en": "Step4: Leave your personal belongings",
			"ja": "第四：荷物のお預かり："
		},
		"content": {
			"zh-tw": "到達相應樓層之後，脫下鞋子，進入更衣室，找個空的櫃子，儲存貴重的物品",
			"zh-cn": "到达相应楼层之后，脱下鞋子，进入更衣室，找个空的柜子，储存贵重的物品",
			"ko": "신발을 벗은 다음에 근의실에 들어가서 한 비어 있는 캐비닛을 찾아서 귀중한 물품을 보관한다.",
			"en": "After taking off your shoes, you can enter the locker room, and store valuable personal belongings in any empty cabinets.",
			"ja": "更衣室へ入る時は、必ず靴を脱ぎ、ロッカーへお荷物をお入れください。"
		},
		"url": "/images/faq-section/step4.jpg"
	},
	{
		"id": 5,
		"title": {
			"zh-tw": "第5步：和服更衣",
			"zh-cn": "第5步：和服更衣",
			"ko": "다섯 번째：기모노의 갈아 입기",
			"en": "Step5: Kimono dressing",
			"ja": "第五：着物の着替"
		},
		"content": {
			"zh-tw": "選好和服後，由我們的工作人員引導到2樓，由我們專業的老師進行著裝，及髮型設計。這個過程，就可以經曆日本女人的變身，親的和服體驗之旅，從此刻開始",
			"zh-cn": "选好和服后，由我们的工作人员引导到2楼，由我们专业的老师进行着装，及发型设计。这个过程，就可以经历日本女人的变身，亲的和服体验之旅，从此刻开始",
			"ko": "입을 기모노를 결정하게 되면 우리의 스태프가 2층으로 안내해 드린다. 전문 인원이 기모노를 입어해 드리고 머리 스타일을 해 드릴 예정이다.| 본 과정을 통하여 일본 여성으로의 변신을 볼 수 있고 당신의 기모노 체험 여행을 그 시점부터 시작한다.",
			"en": "After selecting kimono, your will be guided by our staff to the 2nd floor. Our professional masters will design the dress and hair for you. This process can change you into a Japanese lady. And then your kimono experience tour begins from this moment.",
			"ja": "着物の選択が完了した後、当店のスタッフが二階にて、着衣とヘアデザインを致します。この作業の中で、日本女性の体験をし、着物体験の始まりとなります。"
		},
		"url": "/images/faq-section/step5.jpg"
	},
	{
		"id": 6,
		"title": {
			"zh-tw": "第6步：挑選配件",
			"zh-cn": "第6步：挑选配件",
			"ko": "여섯 번째：배식 선택",
			"en": "Step6:  Accessories selection",
			"ja": "第六： 小物選び"
		},
		"content": {
			"zh-tw": "和服變身完畢，親就可以來到1樓，挑選自己喜歡的日式小布袋，放自己隨身攜帶的貴重物品，天冷的話，可以繼續挑選各式小披肩哦。然後工作人員，進行最後著裝確認",
			"zh-cn": "和服变身完毕，亲就可以来到1楼，挑选自己喜欢的日式小布袋，放自己随身携带的贵重物品，天冷的话，可以继续挑选各式小披肩哦。然后工作人员，进行最后着装确认",
			"ko": "기모노를 갈아입은 후에 1층에 내려와도 된다. 작가 좋아하는 일본식가방을 선택해서 사전 귀중한 물품을 넣어도 된다. 날씨가 추우면 여러가지 조끼를 선택할 수도 있다. 다 끝났으면 우리의 스테프들은 마지막에 확인을 해 준다.",
			"en": "Dressed with Kimono, you can come to the first floor to pick your favorite Japanese-style small bags, and carry your expensive belongings with you. If the weather is cold, you can continue to choose all kinds of small shawls. Then our staff will have a final check of your dress.",
			"ja": "着物着衣完了後、一階にて、和式の小物入れを選びます。貴重品等の入れ物です。寒い日には、スカーフも用意しております。最後に、当店のスタッフが着衣チェックします。"
		},
		"url": "/images/faq-section/step6.jpg"
	},
	{
		"id": 7,
		"title": {
			"zh-tw": "第7步：遊玩觀光",
			"zh-cn": "第7步：游玩观光",
			"ko": "일곱 번째：관광 안내",
			"en": "Step7: Sightseeing",
			"ja": "第七：自由時間"
		},
		"content": {
			"zh-tw": "挑選完配件之後，親，就可以自由活動啦，區域不受限制哦，當然最推薦肯定是淺草古寺，古色古香。附近也有上野公園和天空樹，可供遊玩",
			"zh-cn": "挑选完配件之后，亲，就可以自由活动啦，区域不受限制哦，当然最推荐肯定是浅草古寺，古色古香。附近也有上野公园和天空树，可供游玩",
			"ko": "장식 물품까지 결정한 후에 당신은 자유로 행동하게 된다. 구역은 한정되지 않으며 제일 추천한 데는 당연히 아사쿠사절이며 아주 고풍스런운 곳이다. 근처에 우에노 공원과 Sky Tree 가 있으며 좋아하는 대로 관광할 수 있다. ",
			"en": "After the selection of accessories, you can freely enjoy your time. You can go anywhere you want; of course, the best destination recommended is certainly Asakusa Temple, full of antique flavor. You also visit Ueno Park and Sky Tree nearby.",
			"ja": "小物選びが完了後、自由時間に入ります。もちろん、行動区域に制限はありませんが、お勧めは歴史のある浅草寺です。付近には、上野公園、スカイツリー等もありますので、是非お楽しみください。"
		},
		"url": "/images/faq-section/step7.jpg"
	},
	{
		"id": 8,
		"title": {
			"zh-tw": "第8步：和服歸還",
			"zh-cn": "第8步：和服归还",
			"ko": "여덟 번째：기모노 반환",
			"en": "Step8: Kimono return",
			"ja": "第八：着物の返還"
		},
		"content": {
			"zh-tw": "和服歸還時間隨時都可以哦，只要在我們的營業結束時間之前歸還即可，即18:00之前。如果親，還是對我們的和服依依不捨的話，當然可以，只要再追加1000日元，就可以隔夜啦，隔天的11點前歸還即可。不過正絹和服必須在營業結束時間18:00之前歸還",
			"zh-cn": "和服归还时间随时都可以哦，只要在我们的营业结束时间之前归还即可，即18:00之前。如果亲，还是对我们的和服依依不舍的话，当然可以，只要再追加1000日元，就可以隔夜啦，隔天的11点前归还即可。不过正绢和服必须在营业结束时间18:00之前归还",
			"ko": "기모노의 반환 시간은 수시로 되고 있으며 영업이 끝난 시간 18:00 시 전에 반화하시면 된다. 만약 당신은 기모노를 더 입고 싶은 경우에는 1000엔 추가 비용을 내시면 그 다음날에 11시전에 반환을 하시면 된다. 하지만 주의해야 할 것은 정견(제일 좋은 비단)재질이된 기모노는 영업 끝난 시간 18:00시 전에 반환을 해야 한다. ",
			"en": "You can return your Kimonos at any time you want, as long as before the end of our business time that is, before 18:00. If you really love our kimono and reluctantly to return them in such a short time, you can return them at 11 o’clock next morning, as long as you pay an additional 1,000 yen. However, the silk kimono must be returned before the end of business hours (18:00).",
			"ja": "着物の返還時間に制限はありませんが、閉店前（18:00）時までには必ずお返しください。次の日まで、時間の追加をしたい場合は、1000円の追加料金となりますが、翌日の朝(11:00)までには必ずお返しください。注意：正絹の着物はお時間の追加ができませんので、当日の閉店（18:00）までにはお返しください。"
		},
		"url": "/images/faq-section/step8.jpg"
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

var _intro = __webpack_require__(46);

var _intro2 = _interopRequireDefault(_intro);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _girl = __webpack_require__(47);

var _girl2 = _interopRequireDefault(_girl);

var _Wallop = __webpack_require__(8);

var _Wallop2 = _interopRequireDefault(_Wallop);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

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
      if (typeof document !== 'undefined') {
        var girlWallop = document.querySelector('#girlWallop');
        var girlSlider = new _Wallop2.default(girlWallop);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
      language = lang;
      return _react2.default.createElement(
        'div',
        { className: 'section girls-section container', id: 'girls-section' },
        _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
          _dict2.default[language]['nav-girls']
        ),
        _react2.default.createElement(_intro2.default, {
          lang: lang,
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
            url: girl.url
          })
        );
      })
    ),
    _react2.default.createElement('button', { className: 'Wallop-buttonPrevious button is-primary' }),
    _react2.default.createElement('button', { className: 'Wallop-buttonNext button is-primary' })
  );
};

exports.default = GirlsSection;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
  var bossName = props.bossName,
      bossQuote = props.bossQuote,
      lang = props.lang;

  var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
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
            { className: (0, _classnames2.default)('title', 'is-5', fontName2) },
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
              {
                className: 'level-item',
                target: '_blank',
                href: 'http://weibo.com/mymiyabi'
              },
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
              {
                className: 'level-item',
                target: '_blank',
                href: 'https://www.facebook.com/miyabinokimono'
              },
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
/* 47 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"snapshot": "/images/girls-section/1.png",
		"avatar": "/images/girls-section/avatar1.jpg",
		"name": {
			"zh-tw": "aki貓咪",
			"zh-cn": "aki猫咪",
			"ko": "aki고양이",
			"en": "aki Kitty",
			"ja": "aki ニャンコ"
		},
		"content": {
			"zh-tw": "時尚達人，新絲路平面模特。有真小林志玲之稱的aki也多次一同與志玲參加各種活動，可見其多有人氣",
			"zh-cn": "时尚达人，新丝路平面模特。有真小林志玲之称的aki也多次一同与志玲参加各种活动，可见其多有人气",
			"ko": "펜셔니스타이며  New Silk Road이다. 소임지림의 호칭이 있는 aki가임지림과 같이 많은 행사를 같이 참석했었기에 인기가 있는 걸 알 수 있다.",
			"en": "Fashion insider, the new Silk Road plane model. She is called by small  Lin Chi-ling and had so many times took part in various kind of events. How popular she is.",
			"ja": "ファッション、新シルクロードプレーンモデルです。小さな林志玲と呼ばれているakiは志玲と一緒仁色々なイベントを参加しました。人気があるのはしているでしょう。"
		},
		"url": "http://weibo.com/1749156250/F1rcx8Bas"
	},
	{
		"id": 2,
		"snapshot": "/images/girls-section/2.png",
		"avatar": "/images/girls-section/avatar2.jpg",
		"name": {
			"zh-tw": "白兔uSAgi",
			"zh-cn": "白兔uSAgi",
			"ko": "하얀 토끼uSAgi",
			"en": "White rabbit uSAgi",
			"ja": "白いウサギuSAgi"
		},
		"content": {
			"zh-tw": "品珂簽約模特，電競女神。關於淺草寺，酒紅的和服，粉紅的🌸，迷人的你",
			"zh-cn": "品珂签约模特，电竞女神。关于浅草寺，酒红的和服，粉红的🌸，迷人的你",
			"ko": "품가(品珂)밑에서 계약한 모델이며 이스포츠여신이라고도 부른다. 아사쿠사 절, 와인색 기모노, 핑크색 사쿠라, 아름다운 당신.",
			"en": "One of contract plane models in PinKeKe, and also she she is a gaming goddess. About Asakusa temple, Kimono of wine color, pink Sakura, beauty you.",
			"ja": "品柯を務めるモデルであり、ゲーム女神と呼ばれています。浅草寺、ワイン色の着物、ピンクの桜、美しい彼女"
		},
		"url": "http://weibo.com/1959620915/DqFHczVyQ"
	},
	{
		"id": 3,
		"snapshot": "/images/girls-section/3.png",
		"avatar": "/images/girls-section/avatar3.jpg",
		"name": {
			"zh-tw": "貓力molly",
			"zh-cn": "猫力molly",
			"ko": "모리molly",
			"en": "molly",
			"ja": "モリmolly"
		},
		"content": {
			"zh-tw": "旅記博主圈鼻祖人物, 一個自由的環球旅行者，在5月的尾巴，'貓力亂步'到了江戶和裝工房，體驗了一回'心'與'動'的和服文化！",
			"zh-cn": "旅记博主圈鼻祖人物, 一个自由的环球旅行者，在5月的尾巴，'猫力乱步'到了江户和装工房，体验了一回'心'与'动'的和服文化！",
			"ko": "여행 일기의 선두인이며 자유롭게 세계여행을 하는 사람이다. 5월의마지막 시간의 “모리”는 에도기모노공방에 오셔서 저희와 함께 같이 한 “마음”과 “움직이”가 들어가 있는 기모노문화를 체험해 봤다.",
			"en": "Travel bloggers circle originator, a free global traveler, in the tail of May, 'cat fights' came to our shop to experience Kimono, She had a experience with the 'heart' and 'moving' kimono culture!",
			"ja": "旅ブロガ最初始まった方であり、フリー世界旅行者である。5月のある日彼女が「江戸和服工房」へ一らしゃり、”心”と”動”の和服文化を体験した。"
		},
		"url": "http://weibo.com/smilemolly?refer_flag=1001030102_&is_hot=1"
	},
	{
		"id": 4,
		"snapshot": "/images/girls-section/4.png",
		"avatar": "/images/girls-section/avatar4.jpg",
		"name": {
			"zh-tw": "王幼宣幼乖",
			"zh-cn": "王幼宣幼乖",
			"ko": "왕유선유과에이",
			"en": "Wangyouxuan cute",
			"ja": "王幼宣可愛い"
		},
		"content": {
			"zh-tw": "微電商達人。主打粉色系寫產品。裝扮也別具一格",
			"zh-cn": "微电商达人。主打粉色系写产品。装扮也别具一格",
			"ko": "미전자상거래달인, 핑크색 재품을 주요로 하고 있다. 패션도 너무 특별하다.",
			"en": "Micro-electric business people. Most of the products are pink and the dressing style is so special.",
			"ja": "マイクロ電子商業のプロである。ピンク色の製品を主要製品をして、化粧やファッションのスタイルもすごく自分の特徴がある。"
		},
		"url": "http://weibo.com/1739049744/E1eGdhAiS"
	},
	{
		"id": 5,
		"snapshot": "/images/girls-section/5.png",
		"avatar": "/images/girls-section/avatar5.jpg",
		"name": {
			"zh-tw": "林晶瑩lily",
			"zh-cn": "林晶莹lily",
			"ko": "임정영lily",
			"en": "Linjingying lily",
			"ja": "林晶莹lily"
		},
		"content": {
			"zh-tw": "知名旅遊博主，攜程簽約攝影師 寫的一手好文，拍的一手好照片。",
			"zh-cn": "知名旅游博主，携程签约摄影师 写的一手好文，拍的一手好照片。",
			"ko": "유명한 여행달인이다, 협정(携程)계약된 사진사이고 문장도 잘 쓰고사진도 잘 찍는다.",
			"en": "Well-known travel bloggers, Xiecheng signed photographer, she can write a good text, and very good at photographing.",
			"ja": "有名な旅行日記記録者であり、携程のもとで契約していた撮影者である。文章が上手の上で、写真もよく撮られる。"
		},
		"url": "http://weibo.com/1719984830/EB8bAlXfj"
	},
	{
		"id": 6,
		"snapshot": "/images/girls-section/6.png",
		"avatar": "/images/girls-section/avatar6.jpg",
		"name": {
			"zh-tw": "顧子沫",
			"zh-cn": "顾子沫",
			"ko": "구즈모",
			"en": "Guzimo",
			"ja": "顾子沫"
		},
		"content": {
			"zh-tw": "平面模特 最是人間4月，芳菲盡",
			"zh-cn": "平面模特 最是人间4月，芳菲尽",
			"ko": "모델이다. 인간사월, 방비진(중국 고시)",
			"en": "Plane model ",
			"ja": "プレーンモデルである。「人间4月，芳菲尽」（中国の古詩）"
		},
		"url": "http://weibo.com/2422449772/EDUrE1tkd"
	},
	{
		"id": 7,
		"snapshot": "/images/girls-section/7.png",
		"avatar": "/images/girls-section/avatar7.jpg",
		"name": {
			"zh-tw": "周若雪patty",
			"zh-cn": "周若雪patty",
			"ko": "주약설patty",
			"en": "Zhou Ruoxue patty",
			"ja": "周若雪patty"
		},
		"content": {
			"zh-tw": "微博旅行家，各大OTA平台遊記博主，美妝博主 把旅行當作一場時裝盛宴，走過40多個國家，體驗不同的時裝魅",
			"zh-cn": "微博旅行家，各大OTA平台游记博主，美妆博主 把旅行当作一场时装盛宴，走过40多个国家，体验不同的时装魅",
			"ko": "웨이버여행자, 각OTA평대의 여행 일기 기록자, 화장 달인, 여행에대하여 항상 한 패션쇼로 보고 있으며 40개의 나라를 가봐서 여러가지 패션의 미력을 느껴 봤다.",
			"en": "Microblogging traveler, the major OTA platform travel bloggers, beauty blog owners travel as a fashion feast, has been more than 40 countries, and has experienced so many different fashion charm",
			"ja": "マイクロブログ旅行達人、主要なOTAプラットフォームのブロガーであり、美容ブロガーのプロでもある。旅行をあるファッションショウとしてやっている。40以上を超えた国に行ってみて、いろいろなファッションショウを体験した。"
		},
		"url": "http://weibo.com/1877951477/DlBv0eZrb"
	},
	{
		"id": 8,
		"snapshot": "/images/girls-section/8.png",
		"avatar": "/images/girls-section/avatar8.jpg",
		"name": {
			"zh-tw": "鹿的角",
			"zh-cn": "鹿的角",
			"ko": "사슴의 뿔",
			"en": "Deer antler",
			"ja": "鹿の角"
		},
		"content": {
			"zh-tw": "微博時尚達人，調皮可愛。",
			"zh-cn": "微博时尚达人，调皮可爱。",
			"ko": "웨이버패션달인, 귀엽고 재미있다.",
			"en": "Microblogging fashion insider,cute and naughty ",
			"ja": "Weiboプロであり、面白くて可愛いい。"
		},
		"url": "http://weibo.com/2690354033/EDh6ioF86"
	}
];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _about = __webpack_require__(49);

var _about2 = _interopRequireDefault(_about);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

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

      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
      language = lang;
      return _react2.default.createElement(
        'div',
        { className: 'section about-section container', id: 'about-section' },
        _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
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
        {
          className: 'wistia_responsive_padding',
          style: {
            padding: '56.5% 0 0 0',
            position: 'relative'
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'wistia_responsive_wrapper',
            style: {
              height: '100%',
              left: '0',
              position: 'absolute',
              top: '0',
              width: '100%'
            }
          },
          _react2.default.createElement(
            'span',
            {
              className: 'wistia_embed wistia_async_phknks26n7 popover=true popoverAnimateThumbnail=true videoFoam=true',
              style: {
                display: 'inline-block',
                height: '100%',
                width: '100%'
              }
            },
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
/* 49 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"title": {
			"zh-cn": "地理位置绝佳",
			"zh-tw": "地理位置絕佳",
			"ko": "지리위치 편리",
			"en": "Best location",
			"ja": "便利な位置"
		},
		"content": {
			"zh-cn": "近，可步行三分到达旅游胜地，浅草寺，退，可在有日本特色的，人烟稀少的街道取景拍摄，不想拍游客照的您，不想以人群作为背景的您，想要排除有日本味道照片的您，我们是您在浅草体验和服的最佳选择",
			"zh-tw": "進，可步行三分到達旅遊勝地，淺草寺，退，可在有日本特色的，人煙稀少的街道取景拍攝，不想拍遊客照的您，不想以人群作為背景的您，想要排除有日本味道照片的您，我們是您在淺草體驗和服的最佳選擇",
			"ko": "편리하다. 걸어가 3분정도가 있으면 주변의 관광지 아사쿠사 철까지 갈 수 있다. 그리고 아주 특색적이고 사람이 별로 없는 거리에 들어가서 사진을 찍을 수 있습니다.좋은 사진을 찍으려고하면 여기는 당신에게 한 좋은 선택이라고 생각합니다.",
			"en": "Look forward, you could reach the tourist destination, Asakusa Temple in three minutes’ walk; Look back, you could take photos in the sparsely populated streets which are full of Japanese characteristics; If you do not want to take photos of visitors, and do not want to take the crowd as the background of your photos, but to take photos with Japanese taste, we are the best choice for you to experience kimono in Asakusa.",
			"ja": "当店から徒歩三分で、観光の場所へ到着します。当店付近の観光地では、日本の伝統的な場所もあり、観光客や人が少なく、撮影を邪魔されない場所があります。私たちは、あなたの着物体験を精一杯サポートします。"
		},
		"url": "/images/about-section/0.jpg"
	},
	{
		"id": 2,
		"title": {
			"zh-cn": "物美价廉",
			"zh-tw": "物美价廉",
			"ko": "품질 좋고 가격이 쌈",
			"en": "Cheap and fine",
			"ja": "お得な値段"
		},
		"content": {
			"zh-cn": "江户和装工房—雅所有的套餐的价格都是明码实价的，所有的套餐都包括穿着和服所需要的所有的物品，有无发型也都清楚标注，绝无隐性消费。套餐之间可以自由的加价升级。拍照所用的小道具，油纸伞，面具，扇子，一律免费提供，数量有限，先到先得。",
			"zh-tw": "江戶和裝工房—雅所有的套餐的價格都是明碼實價的，所有的套餐都包括穿著和服所需要的所有的物品，有無髮型也都清楚標註，絕無隱性消費。套餐之間可以自由的加價升級。拍照所用的小道具，油紙傘，面具，扇子，一律免費提供，數量有限，先到先得。",
			"ko": "에도기모노공방-아에 있는 모든 세트의 가격은 다 투명하게 되어 있으며 모든 세트 안에 입는 기모노와 필요한 물품들을 다 포함해 있습니다. 헤어스타일 설계 유무에 대하여 명확하게 표시해 되어 있으니 기타 비용은 따로 받아 드리지 않겠습니다. 세트 사에에 자유롭게 차액을 내셔서 바뀔 수 있습니다. 사진을 찍을 때 필요한 작은 도구, 종이우산, 마스크, 부체등 공짜로 제공해 드리지만 수량이 한정해 되어 있으니 순서대로 제공합니다.",
			"en": "All the packages in our shop are clearly priced, all the packages include all the items needed in wearing kimono; we have price ticket on everything including the hair style, without any hidden consumption. You could update your package by paying extra money. Props used for taking pictures, such as oil paper umbrella, masks, and fans are free of charge. Reservations are on first-come-first-served basis.",
			"ja": "当店「江戸和装工房-雅」のサービス料金、セット料金などは、料金表そのままのお値段です。着物に必要な物は全て、セットの中に含まれており、ヘアのセットについても、記してあり、決して消費者を騙すような追加料金等はありません。低いセットを選んだ後、追加料金で高いセットにする事もできます。また、写真つ必要な小道具、油絵傘、仮面、センス等は全て無料で提供致しますが、数量限定のため、早い者勝ちです。"
		},
		"url": "/images/about-section/2.jpg"
	},
	{
		"id": 3,
		"title": {
			"zh-cn": "尊重传统，专注细节",
			"zh-tw": "尊重傳統，專注細節",
			"ko": "전통적, 세부적",
			"en": "Respect the tradition, focus on details",
			"ja": "伝統を尊重し、細かいサービスに拘ります。"
		},
		"content": {
			"zh-cn": "提供最为传统的和服穿着，不省略任何一个步骤。江户和装工房--雅的和服老师平均资历都是达到25年以上的，和服对于她们而言不仅仅是一份工作，更多的是一种情怀，一份热衷。能够让更多喜爱和服文化的人们穿上漂亮的和服，并让正宗的和服文化传承下去, 对和服老师而言就是最大的安慰",
			"zh-tw": "提供最為傳統的和服穿著，不省略任何一個步驟。江戶和裝工房--雅的和服老師平均資歷都是達到25年以上的，和服對於她們而言不僅僅是一份工作，更多的是一種情懷，一份熱衷。能夠讓更多喜愛和服文化的人們穿上漂亮的和服，並讓正宗的和服文化傳承下去, 對和服老師而言就是最大的安慰",
			"ko": "전통적인 기모노를 제공하니 닥 하나의 절차도 줄리지 않습니다. 에도기모노공방-아(雅)에 계시는 기모노 선생님들은 누구시든 25년 이상의 경험을 가지고 계십니다. 기모노는 그분들에게 단 하나의 일이 아니고 한 마음을 가지면서 하는 취미라고도 합니다. 기모노 문화를 좋아하시는 분들에게 아주 예쁜 기모노를 제공해 드릴 수 있게 되면, 전통적인 기모노 문화가 전수하고 계승하게 될 수 있게 되면 그 분들에게 너무 좋은 선물이라고 합니다.",
			"en": "We provide the most traditional kimonos, and we seldom omit any one procedure. Kimonos masters of our shop are qualified with average qualifications of more than 25 years. For them, kimono is not just a job, but a feeling, and zeal. It is of great comfort for kimono masters if they could let more people who love kimono culture wear beautiful kimonos, and let the authentic kimono culture inherit forward.",
			"ja": "当店では、伝統的な着物の着方を重視し、細かい所も一切省きません。江戸和装工房--雅の従業員は、全員平均年齢25以上、着物は仕事ではなく、愛着心を持っています。彼らにとって、伝統的で綺麗な着物を人々に着て頂く事が一番の幸せです。"
		},
		"url": "/images/about-section/3.jpg"
	},
	{
		"id": 4,
		"title": {
			"zh-cn": "贴心中文服务",
			"zh-tw": "貼心中文服務",
			"ko": "한국어 서비스 제공",
			"en": "Intimate English  service",
			"ja": "日本語のサービス"
		},
		"content": {
			"zh-cn": "免费的中文小客服，免费提供化妆品以及化妆台，免费提供带锁储物柜。一切的附加服务，都是为了让您更好的进行一次和服文化体验。添加我们的客服，妈妈就再也不会担心我在日本迷路了，有任何不懂的问题都可以咨询我的客服，我们一定尽力解答。",
			"zh-tw": "免費的中文小客服，免費提供化妝品以及化妝台，免費提供帶鎖儲物櫃。一切的附加服務，都是為了讓您更好的進行一次和服文化體驗。添加我們的客服，媽媽就再也不會擔心我在日本迷路了，有任何不懂的問題都可以諮詢我的客服，我們一定盡力解答。",
			"ko": "한국어 서비스가 되, 화장품 및 화장대같은 걸 제공해 드리는데다가 잠길 수 있는 보관용 캔비닛까지 제공합니다. 모든 첨가 서비스는 고객님께서 한 잊어버릴 수 없는 기모노 체험을 가질 수 있도록 준비릴 한 겁니다. ",
			"en": "We provide free English customer service, free cosmetics and dressing table, free storage lockers. All the additional services are for the sake of allowing you to better experience the kimono culture. Add our customer service, “my mother will never worry that I might get lost in Japan”; if you have any questions, do not hesitate to consult our customer service, we will try our best to help you.",
			"ja": "当店では、日本語のサービスもあります。無料で化粧品、化粧台、鍵付きロッカーの提供は、あなたに着物の体験をより良くして頂くためです。日本に詳しくないあなたにとって、私たちは一番の選択です。日本で何かわからない所、または日本についての質問がある場合は、私たちのカスタマーサービスにお聞き頂ければ全力で回答致します。"
		},
		"url": "/images/about-section/1.jpg"
	},
	{
		"id": 5,
		"title": {
			"zh-cn": "和服种类众多",
			"zh-tw": "和服種類眾多",
			"ko": "기모노 종류 많음",
			"en": "Various types of kimonos",
			"ja": "たくさんの種類"
		},
		"content": {
			"zh-cn": "合计1000件以上的和服在库，选择种类众多，总有一件和服是在等待着和您相遇的。”着物が出会い”、这是一家有200多年历史的和服店的86岁会长告诉我们的一句话，穿和服就是一场相遇。江户和装工房--雅和服种类众多，总有一件和服是为您等待的",
			"zh-tw": "合計1000件以上的和服在庫，選擇種類眾多，總有一件和服是在等待著和您相遇的。 ”著物が出會い”、這是一家有200多年曆史的和服店的86歲會長告訴我們的一句話，穿和服就是一場相遇。江戶和裝工房--雅和服種類眾多，總有一件和服是為您等待的",
			"ko": "합계를 해서 1000개 이상의 기모노는 재고가 있으니 선택할 범위가 많습니다. 어째든 당신과 잘 어울릴 기모노 있을 거라고 믿습니다. “기모노와의 만남” 라는 말은 한 200년 역사를 가진 기모노 가게의 86세 사장님이 저희에게 알려 주셨습니ㅏ. 기모노를 입는 것은 한 만남이라고 하니 에도기모노공방-아(雅）에서 당신과의 만남을 기대하고 있는 기모노 반드시 있을 겁니다.",
			"en": "A total of more than 1000 kimonos are in stock, you have a wide range choose; there is always a kimono that fits you best is waiting for you. An 86-year-old chairperson of a kimono shop with over 200 years’ history once told me that wearing a kimono is like a encountering. We have various types of kimonos, and there is always one waiting for you",
			"ja": "当店では、全部で合計1000枚以上の着物があり、選択範囲が広い、あなたにお似合いの着物はきっとあります。 “着物は出会い”これは、200年もの年月を渡り、長い歴史を持った着物の店の経営者が言ってました。江戸和装工房--雅の着物は種類が多く、あなたにお似合いの着物が必ずあります。"
		},
		"url": "/images/about-section/4.jpg"
	}
];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

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
          { className: 'phone' },
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-phone-square' })
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u5BA2\u670D\u4E09\u53F7\u7EBF: 075-551-3280'
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
              { href: 'https://goo.gl/maps/GeNeQvhX5642', target: '_blank' },
              _dict2.default[lang]['location-2']
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
              { href: 'https://goo.gl/maps/5ZLyrLM7uCu', target: '_blank' },
              '\u548C\u88C5\u5DE5\u623F--\u96C5\uFF08\u4EAC\u90FD1\u53F7\u5E97\uFF09: \u4EAC\u90FD\u5E02\u4E0B\u4EAC\u533A\u7A32\u8377\u753A320\u756A\u5730\u30B1\u30F3\u30BE\u30FC\u30D3\u30EB 301\u5BA4'
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
              { href: 'https://goo.gl/maps/6TL7bm8eqx82', target: '_blank' },
              '\u548C\u88C5\u5DE5\u623F--\u6A31\u82B1\uFF08\u4EAC\u90FD2\u53F7\u5E97\uFF09: \u4EAC\u90FD\u5E02\u6771\u5C71\u533A\u9418\u92F3\u753A419'
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
        {
          href: 'https://www.facebook.com/miyabinokimono',
          target: '_blank',
          className: 'social-icn'
        },
        _react2.default.createElement('img', {
          src: '/images/icn/ic_facebook.svg',
          alt: 'facebook',
          className: 'button'
        })
      ),
      _react2.default.createElement(
        'a',
        {
          href: 'https://www.instagram.com/tokyo_kimono_miyabi',
          target: '_blank',
          className: 'social-icn'
        },
        _react2.default.createElement('img', {
          src: '/images/icn/ic_instagram.svg',
          alt: 'instagram',
          className: 'button'
        })
      ),
      _react2.default.createElement(
        'a',
        {
          href: 'http://m.dianping.com/appshare/shop/32347442',
          target: '_blank',
          className: 'social-icn'
        },
        _react2.default.createElement('img', {
          src: '/images/icn/ic_dianping.svg',
          alt: 'dianping',
          className: 'button'
        })
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
/* 51 */
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

var _FormSection = __webpack_require__(79);

var _FormSection2 = _interopRequireDefault(_FormSection);

var _ConfirmSection = __webpack_require__(88);

var _ConfirmSection2 = _interopRequireDefault(_ConfirmSection);

var _NoMatch = __webpack_require__(18);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _reactRouterDom = __webpack_require__(3);

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
        email: '',
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(1);
var blacklist = __webpack_require__(11);
var React = __webpack_require__(0);
var Calendar = __webpack_require__(53);
var Time = __webpack_require__(72);
var dict = __webpack_require__(2);

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
      this.props.onSave();
      this.setState({ tab: 0 });
    } else {
      this.setState({ tab: 1 });
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(1);
var blacklist = __webpack_require__(11);
var React = __webpack_require__(0);
var range = __webpack_require__(54);
var chunk = __webpack_require__(69);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(55);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(56),
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
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(59),
    isLength = __webpack_require__(64);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObject = __webpack_require__(7);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(61);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(67);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(68);

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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(70),
    isIterateeCall = __webpack_require__(12),
    toInteger = __webpack_require__(71);

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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cx = __webpack_require__(1);
var React = __webpack_require__(0);
var InputSlider = __webpack_require__(73);

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
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-input-slider");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(77)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./input-moment.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./input-moment.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(undefined);
// imports


// module
exports.push([module.i, ".m-calendar {\n  display: inline-block;\n}\n.m-calendar table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n}\n.m-calendar td {\n  padding: 8px 0;\n  text-align: center;\n  cursor: pointer;\n  color: #dfe0e4;\n  border: 1px solid #dfe0e4;\n}\n.m-calendar thead td {\n  color: #28a1fc;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.m-calendar tbody td {\n  color: #666666;\n}\n.m-calendar tbody td:hover {\n  background: #28a1fc;\n  border-color: #28a1fc;\n  color: #ffffff;\n}\n.m-calendar .current-day {\n  color: #28a1fc;\n  font-weight: bold;\n}\n.m-calendar .prev-month,\n.m-calendar .next-month {\n  color: #999999;\n}\n.m-calendar .toolbar {\n  line-height: 30px;\n  color: #28a1fc;\n  text-align: center;\n  margin-bottom: 13px;\n}\n.m-calendar .toolbar button {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  color: #ffffff;\n  border: 1px solid #28a1fc;\n  border-radius: 50%;\n  background: #28a1fc;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n  outline: 0;\n  z-index: 5;\n  cursor: pointer;\n}\n.m-calendar .toolbar .prev-month {\n  float: left;\n}\n.m-calendar .toolbar .next-month {\n  float: right;\n}\n.m-calendar .toolbar .current-date {\n  color: #28a1fc;\n}\n.m-time {\n  color: #ffffff;\n}\n.m-time .showtime {\n  padding-top: 50px;\n  text-align: center;\n}\n.m-time .separater {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: bold;\n  color: #28a1fc;\n  width: 32px;\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n}\n.m-time .time-text {\n  position: relative;\n  left: -10px;\n  font-size: 15px;\n  color: #28a1fc;\n  margin-top: 7px;\n  margin-bottom: 10px;\n}\n.m-time .sliders {\n  padding: 0 10px;\n}\n.m-time .time {\n  width: 65px;\n  height: 65px;\n  display: inline-block;\n  font-size: 38px;\n  line-height: 65px;\n  background-color: #28a1fc;\n  border-radius: 3px;\n  text-align: center;\n}\n.u-slider-time {\n  position: relative;\n  display: inline-block;\n  background-color: #dfe0e4;\n  border-radius: 3px;\n  height: 4px;\n  width: 100%;\n  cursor: pointer;\n}\n.u-slider-time .value {\n  position: absolute;\n  background-color: #28a1fc;\n  border-radius: 3px;\n  top: 0;\n  height: 100%;\n}\n.u-slider-time .handle {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n}\n.u-slider-time .handle:after {\n  position: relative;\n  display: block;\n  content: '';\n  top: -10px;\n  left: -12px;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 3px solid #28a1fc;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.im-btn {\n  display: inline-block;\n  background-color: #ffffff;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  line-height: 1;\n}\n.im-btn:before {\n  margin-right: 6px;\n}\n.m-input-moment {\n  display: inline-block;\n  width: 300px;\n  padding: 12px 15px;\n  border-radius: 3px;\n  border: 1px solid #dfe0e4;\n}\n.m-input-moment .options {\n  width: 100%;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.m-input-moment .options button {\n  float: left;\n  width: 50%;\n  color: #28a1fc;\n  text-align: center;\n  font-size: 16px;\n  padding: 7px;\n  border: 1px solid #28a1fc;\n  border-radius: 3px;\n}\n.m-input-moment .options button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.m-input-moment .options button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.m-input-moment .options button.is-active {\n  color: #ffffff;\n  background-color: #28a1fc;\n}\n.m-input-moment .tab {\n  display: none;\n  height: 310px;\n}\n.m-input-moment .tab.is-active {\n  display: block;\n}\n.m-input-moment .tabs {\n  margin-bottom: 11px;\n}\n.m-input-moment .btn-save {\n  display: block;\n  margin-top: 10px;\n  width: 100%;\n  background-color: #28a1fc;\n  padding: 12px 0;\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 76 */
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
/* 77 */
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

var	fixUrls = __webpack_require__(78);

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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _history = __webpack_require__(80);

var _history2 = _interopRequireDefault(_history);

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cf */


var language;

var contextStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '90vh',
  width: '100vw',
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
      if (typeof document !== 'undefined') {
        initForm(this.props.setFormData);
      }
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
            { is: true, id: 'robot-form', 'cf-prevent-autofocus': true },
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
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].location3,
                value: '\u4EAC\u90FD\u4E00\u53F7\u5E97',
                name: 'location'
              }),
              _react2.default.createElement('input', {
                is: true,
                type: 'radio',
                'cf-label': _dict2.default[language].location4,
                value: '\u4EAC\u90FD\u4E8C\u53F7\u5E97',
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
              { is: true, 'cf-questions': _dict2.default[language].question7 },
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
              { is: true, 'cf-questions': _dict2.default[language].question9 },
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
    preventAutoFocus: true,
    dictionaryData: {
      'user-image': 'https://cf-4053.kxcdn.com/conversational-form/human.png',
      'awaiting-mic-permission': 'Awaiting mic permission',
      'user-audio-reponse-invalid': 'I didnt get that, try again.',
      'microphone-terminal-error': 'Audio input not supported',
      'icon-type-file': "<svg class='cf-icon-file' viewBox='0 0 10 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-756.000000, -549.000000)' fill='#0D83FF'><g transform='translate(736.000000, 127.000000)'><g transform='translate(0.000000, 406.000000)'><polygon points='20 16 26.0030799 16 30 19.99994 30 30 20 30'></polygon></g></g></g></g></svg>",
      'input-placeholder-file-error': 'File upload failed ...',
      'input-placeholder-file-size-error': 'File size too big ...',
      'input-placeholder': _dict2.default[language]['input-placeholder'],
      'input-placeholder-required': _dict2.default[language]['input-placeholder-required'],
      'user-reponse-missing': _dict2.default[language]['user-reponse-missing'],
      'user-reponse-missing-group': _dict2.default[language]['user-reponse-missing-group'],
      'input-placeholder-error': _dict2.default[language]['input-placeholder-error'],
      'entry-not-found': _dict2.default[language]['entry-not-found'],
      'group-placeholder': _dict2.default[language]['group-placeholder'],
      'input-no-filter': _dict2.default[language]['input-no-filter'],
      'user-reponse-and': _dict2.default[language]['user-reponse-and'],
      general: _dict2.default[language]['general']
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import createBrowserHistory from 'history/createBrowserHistory'
// import createMemoryHistory from 'history/createMemoryHistory'
//
// export default process.env.BROWSER ? createBrowserHistory() : createMemoryHistory()
var history = void 0;

if (typeof document !== 'undefined') {
  var createBrowserHistory = __webpack_require__(81).default;

  history = createBrowserHistory();
}

exports.default = history;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(16);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(82);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(83);

var _PathUtils = __webpack_require__(17);

var _createTransitionManager = __webpack_require__(86);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(84);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(85);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("resolve-pathname");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("value-equal");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(16);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dict = __webpack_require__(2);

var _dict2 = _interopRequireDefault(_dict);

var _CalendarSection = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(6);

var ConfirmSection = function (_React$Component) {
  _inherits(ConfirmSection, _React$Component);

  function ConfirmSection() {
    _classCallCheck(this, ConfirmSection);

    return _possibleConstructorReturn(this, (ConfirmSection.__proto__ || Object.getPrototypeOf(ConfirmSection)).apply(this, arguments));
  }

  _createClass(ConfirmSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          lang = _props.lang,
          data = _props.data,
          moment = _props.moment;

      data.time = moment.format('LLLL');
      data.language = lang;
      console.log(data);
      if (data.name === '' || data.email === '' || data.number_male === '' || data.number_female === '' || data.number_children === '') {
        return _react2.default.createElement('div', null);
      }

      $.ajax({
        url: '/email',
        type: 'POST',
        data: data,
        success: function success(data) {},
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          lang = _props2.lang,
          data = _props2.data,
          moment = _props2.moment;

      var fontName2 = lang === 'en' || lang === 'ko' ? 'font-english' : 'font-tang';
      data.time = moment.format('LLLL');
      data.language = lang;

      return _react2.default.createElement(
        'section',
        { className: 'confirm-section section container' },
        _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)('title', 'has-text-centered', 'is-2', fontName2) },
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
        _react2.default.createElement(_CalendarSection.Message, {
          title: _dict2.default[lang]['confirm-title-1'],
          content: _dict2.default[lang]['confirm-msg-1'] + data['email'],
          styleClass: 'is-danger',
          iconName: 'fa-heart'
        }),
        _react2.default.createElement(_CalendarSection.Message, {
          title: _dict2.default[lang]['confirm-title-2'],
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
                { className: (0, _classnames2.default)(fontName2) },
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
                { className: (0, _classnames2.default)(fontName2) },
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(4);
var router = express.Router();
var nodemailer = __webpack_require__(90);
var pug = __webpack_require__(91);
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
      pass: 'a5233801@'
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
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptionsToCustomer, function (error, info) {
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
/* 90 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);