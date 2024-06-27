(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[377],{16377:function(t,e,r){"use strict";r.r(e),r.d(e,{AuthLayoutModule:function(){return d}});var o=r(40317),n=r(61116),i=r(56728),a=r(18725),s=r(93820),g=r(42693),p=function(){function t(t,e){var r=this;this.http=t,this.util=e,this.apiUrl=null,this.login=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var o=t[0],n=t[1],i=r.apiUrl+"/login?phoneNumber="+o+"&password="+n;return r.http.put(i,{})},this.apiUrl=this.util.apiUrl()+"/admin"}return t.\u0275fac=function(e){return new(e||t)(s.LFG(g.eN),s.LFG(a.f))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),u=r(3492),Z=[{path:"login",component:function(){function t(t,e,r,o){var n=this;this.fb=t,this.toastrService=e,this.loginService=r,this.router=o,this.disableOTP=!0,this.loginForm=this.fb.group({phoneNumber:["",[i.kI.required,i.kI.minLength(10)]],password:["",i.kI.required]}),this.submitForm=function(){if(n.loginForm.valid){var t=n.loginForm.value;n.loginService.login(t.phoneNumber,t.password).subscribe(function(t){200==t.status?(n.toastrService.success(""+t.message),localStorage.setItem("admin",JSON.stringify(t)),n.router.navigate(["/tables"])):400==t.status&&("JsonWebTokenError"==t.type&&n.toastrService.error("Invalid OTP"),n.toastrService.error(t.message))},function(t){return n.toastrService.error(t.message)})}else n.toastrService.error("Enter proper values")},localStorage.removeItem("admin")}return t.prototype.phoneNumberValidation=function(t){var e=this;return function(t){return e.loginForm.addControl("OTP",new i.NI("",i.kI.required)),null}},t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){},t.\u0275fac=function(e){return new(e||t)(s.Y36(i.qu),s.Y36(u._W),s.Y36(p),s.Y36(o.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:25,vars:1,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"card-body","px-lg-5","py-lg-5"],["role","form",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-number-83"],["formControlName","phoneNumber","placeholder","Phone Number",1,"form-control"],[1,"form-group"],[1,"ni","ni-1-circle-open"],["formControlName","password","placeholder","Password",1,"form-control"],[1,"text-center"],["type","submit","value","Sign In",1,"btn","btn-primary","my-4"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.O4$(),s.TgZ(2,"svg",2),s._UZ(3,"polygon",3),s.qZA(),s.qZA(),s.qZA(),s.kcU(),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s._UZ(8,"div",8),s.TgZ(9,"div",9),s.TgZ(10,"form",10),s.NdJ("ngSubmit",function(){return e.submitForm()}),s.TgZ(11,"div",11),s.TgZ(12,"div",12),s.TgZ(13,"div",13),s.TgZ(14,"span",14),s._UZ(15,"i",15),s.qZA(),s.qZA(),s._UZ(16,"input",16),s.qZA(),s.qZA(),s.TgZ(17,"div",17),s.TgZ(18,"div",12),s.TgZ(19,"div",13),s.TgZ(20,"span",14),s._UZ(21,"i",18),s.qZA(),s.qZA(),s._UZ(22,"input",19),s.qZA(),s.qZA(),s.TgZ(23,"div",20),s._UZ(24,"input",21),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(10),s.Q6J("formGroup",e.loginForm))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u],styles:[""]}),t}()},{path:"register",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"h1",5),s._uU(6,"Welcome!"),s.qZA(),s.TgZ(7,"p",6),s._uU(8,"Use these awesome forms to login or create new account in your project for free."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"div",7),s.O4$(),s.TgZ(10,"svg",8),s._UZ(11,"polygon",9),s.qZA(),s.qZA(),s.qZA(),s.kcU(),s.TgZ(12,"div",10),s.TgZ(13,"div",3),s.TgZ(14,"div",11),s.TgZ(15,"div",12),s.TgZ(16,"div",13),s.TgZ(17,"div",14),s.TgZ(18,"small"),s._uU(19,"Sign up with"),s.qZA(),s.qZA(),s.TgZ(20,"div",15),s.TgZ(21,"a",16),s.TgZ(22,"span",17),s._UZ(23,"img",18),s.qZA(),s.TgZ(24,"span",19),s._uU(25,"Github"),s.qZA(),s.qZA(),s.TgZ(26,"a",20),s.TgZ(27,"span",17),s._UZ(28,"img",21),s.qZA(),s.TgZ(29,"span",19),s._uU(30,"Google"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(31,"div",22),s.TgZ(32,"div",23),s.TgZ(33,"small"),s._uU(34,"Or sign up with credentials"),s.qZA(),s.qZA(),s.TgZ(35,"form",24),s.TgZ(36,"div",25),s.TgZ(37,"div",26),s.TgZ(38,"div",27),s.TgZ(39,"span",28),s._UZ(40,"i",29),s.qZA(),s.qZA(),s._UZ(41,"input",30),s.qZA(),s.qZA(),s.TgZ(42,"div",25),s.TgZ(43,"div",26),s.TgZ(44,"div",27),s.TgZ(45,"span",28),s._UZ(46,"i",31),s.qZA(),s.qZA(),s._UZ(47,"input",32),s.qZA(),s.qZA(),s.TgZ(48,"div",25),s.TgZ(49,"div",33),s.TgZ(50,"div",27),s.TgZ(51,"span",28),s._UZ(52,"i",34),s.qZA(),s.qZA(),s._UZ(53,"input",35),s.qZA(),s.qZA(),s.TgZ(54,"div",36),s.TgZ(55,"small"),s._uU(56,"password strength: "),s.TgZ(57,"span",37),s._uU(58,"strong"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(59,"div",38),s.TgZ(60,"div",39),s.TgZ(61,"div",40),s._UZ(62,"input",41),s.TgZ(63,"label",42),s.TgZ(64,"span",43),s._uU(65,"I agree with the "),s.TgZ(66,"a",44),s._uU(67,"Privacy Policy"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(68,"div",15),s.TgZ(69,"button",45),s._uU(70,"Create account"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[i._Y,i.JL,i.F],styles:[""]}),t}()}],c=r(40845),l=r(75425),d=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,o.Bz.forChild(Z),i.u5,l.m,c.IJ]]}),t}()}}]);