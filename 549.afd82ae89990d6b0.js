"use strict";var _n=Object.defineProperty,yn=Object.defineProperties,vn=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,Cn=Object.prototype.hasOwnProperty,Vn=Object.prototype.propertyIsEnumerable,ye=(g,c,a)=>c in g?_n(g,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):g[c]=a,F=(g,c)=>{for(var a in c||(c={}))Cn.call(c,a)&&ye(g,a,c[a]);if(_e)for(var a of _e(c))Vn.call(c,a)&&ye(g,a,c[a]);return g},T=(g,c)=>yn(g,vn(c));(self.webpackChunkDr_Food_Final=self.webpackChunkDr_Food_Final||[]).push([[549],{7830:(g,c,a)=>{a.d(c,{z:()=>w});var o=a(1514);let w=(()=>{class y{constructor(){this.productos=[]}monto(){var l=0;for(let u=0;u<this.productos.length;u++)l+=this.productos[u].precio;return l}add(l){const u=Object.assign(Object.assign({},l),{cremas:[],agregados:[]});this.productos.push(u)}addCremas(l,u){var p,V,A;if(null===(p=this.productos[l].cremas)||void 0===p?void 0:p.includes(u)){console.log("ya existe esa crema");for(let _=0;_<this.productos[l].cremas.length;_++)this.productos[l].cremas[_]==u&&(null===(A=this.productos[l].cremas)||void 0===A||A.splice(_,1))}else console.log("agregando crema"),null===(V=this.productos[l].cremas)||void 0===V||V.push(u)}cleancremas(l){var u,p;null===(u=this.productos[l].cremas)||void 0===u||u.splice(0,null===(p=this.productos[l].cremas)||void 0===p?void 0:p.length)}addAdicionales(l,u){var p,V,A;if(null===(p=this.productos[l].agregados)||void 0===p?void 0:p.includes(u)){console.log("ya existe ese asicional");for(let _=0;_<this.productos[l].agregados.length;_++)this.productos[l].agregados[_]==u&&(null===(A=this.productos[l].agregados)||void 0===A||A.splice(_,1));this.productos[l].precio-=u.precio}else console.log("agregando adicional"),null===(V=this.productos[l].agregados)||void 0===V||V.push(u),this.productos[l].precio+=u.precio}deleteProducto(l){this.productos.splice(l,1)}}return y.\u0275fac=function(l){return new(l||y)},y.\u0275prov=o.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},3798:(g,c,a)=>{a.d(c,{D:()=>y});var o=a(1514),w=a(4522);let y=(()=>{class v{constructor(u){this.http=u}getMenuOpts(){return this.http.get("/assets/data/menu-opts.json")}getMenuProductos(){return this.http.get("/assets/data/productos.json")}getCremas(){return this.http.get("/assets/data/cremas.json")}getAgregados(){return this.http.get("/assets/data/agregados.json")}}return v.\u0275fac=function(u){return new(u||v)(o.LFG(w.eN))},v.\u0275prov=o.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},7537:(g,c,a)=>{a.d(c,{Fj:()=>I,u5:()=>gn,JJ:()=>qt,On:()=>dt,wV:()=>ct});var o=a(1514),w=a(6019),y=a(8305),v=a(886),l=a(9985),u=a(7613),p=a(8889),V=a(2937),A=a(2857),ve=a(7867),Ce=a(4753);let vt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),b=(()=>{class n extends vt{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const C=new o.OlP("NgValueAccessor"),Ae={provide:C,useExisting:(0,o.Gpc)(()=>I),multi:!0},De=new o.OlP("CompositionEventMode");let I=(()=>{class n extends vt{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,w.q)()?(0,w.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(De,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ae]),o.qOj]}),n})();const h=new o.OlP("NgValidators"),D=new o.OlP("NgAsyncValidators");function Nt(n){return null!=n}function St(n){const e=(0,o.QGY)(n)?(0,ve.D)(n):n;return(0,o.CqO)(e),e}function Gt(n){let e={};return n.forEach(t=>{e=null!=t?F(F({},e),t):e}),0===Object.keys(e).length?null:e}function xt(n,e){return e.map(t=>t(n))}function Bt(n){return n.map(e=>function(n){return!n.validate}(e)?e:t=>e.validate(t))}function Q(n){return null!=n?function(n){if(!n)return null;const e=n.filter(Nt);return 0==e.length?null:function(t){return Gt(xt(t,e))}}(Bt(n)):null}function Z(n){return null!=n?function(n){if(!n)return null;const e=n.filter(Nt);return 0==e.length?null:function(t){return function(...n){const e=(0,u.jO)(n),{args:t,keys:r}=(0,v.D)(n),i=new y.y(s=>{const{length:d}=t;if(!d)return void s.complete();const m=new Array(d);let O=d,S=d;for(let J=0;J<d;J++){let yt=!1;(0,l.Xf)(t[J]).subscribe(new p.Q(s,mn=>{yt||(yt=!0,S--),m[J]=mn},()=>O--,void 0,()=>{(!O||!yt)&&(S||s.next(r?(0,A.n)(r,m):m),s.complete())}))}});return e?i.pipe((0,V.Z)(e)):i}(xt(t,e).map(St)).pipe((0,Ce.U)(Gt))}}(Bt(n)):null}function Tt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function X(n){return n?Array.isArray(n)?n:[n]:[]}function R(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ut(n,e){const t=X(e);return X(n).forEach(i=>{R(t,i)||t.push(i)}),t}function Ht(n,e){return X(e).filter(t=>!R(n,t))}class jt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Q(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class f extends jt{get formDirective(){return null}get path(){return null}}class E extends jt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let qt=(()=>{class n extends class{constructor(e){this._cd=e}is(e){var t,r,i;return"submitted"===e?!!(null==(t=this._cd)?void 0:t.submitted):!!(null==(i=null==(r=this._cd)?void 0:r.control)?void 0:i[e])}}{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(E,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function x(n,e){(function(n,e){const t=function(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Tt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=function(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Tt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();L(e._rawValidators,i),L(e._rawAsyncValidators,i)})(n,e),e.valueAccessor.writeValue(n.value),function(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Yt(n,e)})}(n,e),function(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Yt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function L(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Yt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Y(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const B="VALID",W="INVALID",N="PENDING",k="DISABLED";function ot(n){return(st(n)?n.validators:n)||null}function zt(n){return Array.isArray(n)?Q(n):n||null}function it(n,e){return(st(e)?e.asyncValidators:n)||null}function Jt(n){return Array.isArray(n)?Z(n):n||null}function st(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class at{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=zt(this._rawValidators),this._composedAsyncValidatorFn=Jt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===B}get invalid(){return this.status===W}get pending(){return this.status==N}get disabled(){return this.status===k}get enabled(){return this.status!==k}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=zt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=Jt(e)}addValidators(e){this.setValidators(Ut(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ut(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ht(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ht(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=N,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=k,this.errors=null,this._forEachChild(r=>{r.disable(T(F({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(T(F({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=B,this._forEachChild(r=>{r.enable(T(F({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(T(F({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===N)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=N,this._hasOwnPendingAsyncValidator=!0;const t=St(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length))return null;let r=n;return e.forEach(i=>{r=r instanceof lt?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof Re&&r.at(i)||null}),r}(this,e)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(N)?N:this._anyControlsHaveStatus(W)?W:B}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){st(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class $ extends at{constructor(e=null,t,r){super(ot(t),it(r,t)),this._onChange=[],this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=null,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Y(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Y(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class lt extends at{constructor(e,t,r){super(ot(t),it(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){this._checkAllValuesPresent(e),Object.keys(e).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t instanceof $?t.value:t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[e])throw new Error(`Cannot find form control with name: ${e}.`)}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const r=this.controls[t];if(this.contains(t)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(e){this._forEachChild((t,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class Re extends at{constructor(e,t,r){super(ot(t),it(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){this._checkAllValuesPresent(e),e.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e instanceof $?e.value:e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(e))throw new Error(`Cannot find form control at index ${e}`)}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_checkAllValuesPresent(e){this._forEachChild((t,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}const je={provide:E,useExisting:(0,o.Gpc)(()=>dt)},Xt=(()=>Promise.resolve(null))();let dt=(()=>{class n extends E{constructor(t,r,i,s){super(),this.control=new $,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===I?t=s:function(n){return Object.getPrototypeOf(n.constructor)===b}(s)?r=s:i=s}),i||r||t||null}(0,s)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,e){return[...e.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Xt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=""===r||r&&"false"!==r;Xt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(f,9),o.Y36(h,10),o.Y36(D,10),o.Y36(C,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([je]),o.qOj,o.TTD]}),n})();const qe={provide:C,useExisting:(0,o.Gpc)(()=>ct),multi:!0};let ct=(()=>{class n extends b{writeValue(t){this.setProperty("value",null==t?"":t)}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([qe]),o.qOj]}),n})(),Kt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Kt]]}),n})(),gn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[pn]}),n})()}}]);