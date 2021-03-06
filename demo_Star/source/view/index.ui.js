/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "类似支付密码的输入界面"
}, {
	"index" : "2",
	"name" : "底部弹出一个菜单"
}, {
	"index" : "3",
	"name" : "RadioButton和SwitchView的实现"
} ]);
listview.bindItems(listdata);

var payView, popmenu;

listview.on("touch", function(index) {
	switch (index) {
	case 0:
		addview(payView, "payView_id",
				"source://view/poppay/index.ui");
		payView = ui("payView_id");
		break;
	case 1:
		addview(popmenu, "popmenu_id",
				"source://view/popmenu/index.ui");
		popmenu = ui("popmenu_id");
		break;
	case 2:
		app.openPage({
			source : "source://view/radiobutton_switch/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
		break;

	}

});

function addview(view, id, path) {
	if (!view) {
		root.add(id, path, 0, 128)
		view = ui(id);
	} else {
		view.visible = true;
	}
}