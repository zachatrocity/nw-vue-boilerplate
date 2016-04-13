var os = require('os');
var gui = require('nw.gui');
var win = gui.Window.get();

// Create default menu items for OSX
if (process.platform === 'darwin') {
    var mb = new gui.Menu({ type: "menubar" });
    mb.createMacBuiltin(gui.App.manifest.productName);
    win.menu = mb;
}

//setup Vue
var App = new Vue({
	el: '#app',
    components: {
    	alert: VueStrap.alert,
    	sidebar: VueStrap.aside
    },
    data: {
    	showMenu: false
    }
});

