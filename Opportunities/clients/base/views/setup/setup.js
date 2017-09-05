({
    className: 'opportunities-setup tcenter',
    val: '',
loadData: function(options) {
  var self = this;
  this._super("loadData");
  //console.log("in loadData func");
},

initialize: function (options) {
  var self=this;
  customSelf=this;
  this._super("initialize", [options]);//  console.log("in Initialize Func");
  // var calls = App.data.createBeanCollection('Opportunities');
  // calls.fetch({
  //   limit: -1,
  //   fields: ['id', 'description','name'],
  //   success: function(data){
  //   console.log("Success");//console.log(data);
  //   self.val=data;
  //   self.render();
  //   }
  // });
  var url = "rest/v10/Opportunities/";
  App.api.call('read', url, {}, {
    success: function (response) {
        console.log("response");
        console.log(response);
        console.log("hello");
         self.val=response;
         self.render();
     }
 });
},
})
