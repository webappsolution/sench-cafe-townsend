Ext.data.JsonP.CafeTownsend_event_AuthenticationEvent({"extends":"SenchaExtensions.mvc.event.AbstractEvent","uses":[],"subclasses":[],"superclasses":["Ext.Base","SenchaExtensions.mvc.event.AbstractEvent"],"component":false,"tagname":"class","meta":{},"code_type":"ext_define","requires":[],"mixedInto":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent' rel='SenchaExtensions.mvc.event.AbstractEvent' class='docClass'>SenchaExtensions.mvc.event.AbstractEvent</a><div class='subclass '><strong>CafeTownsend.event.AuthenticationEvent</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent' target='_blank'>AuthenticationEvent.js</a></div></pre><div class='doc-contents'><p>The authentication event contains data and event types to login/out the user.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-data' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent' rel='SenchaExtensions.mvc.event.AbstractEvent' class='defined-in docClass'>SenchaExtensions.mvc.event.AbstractEvent</a><br/><a href='source/AbstractEvent.html#SenchaExtensions-mvc-event-AbstractEvent-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent-property-data' class='name not-expandable'>data</a><span> : Object</span></div><div class='description'><div class='short'><p>A generic data property for any event.</p>\n</div><div class='long'><p>A generic data property for any event.</p>\n</div></div></div><div id='property-readOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-readOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-readOnly' class='name expandable'>readOnly</a><span> : String</span></div><div class='description'><div class='short'>The password property usually associated with user login. ...</div><div class='long'><p>The password property usually associated with user login.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent' rel='SenchaExtensions.mvc.event.AbstractEvent' class='defined-in docClass'>SenchaExtensions.mvc.event.AbstractEvent</a><br/><a href='source/AbstractEvent.html#SenchaExtensions-mvc-event-AbstractEvent-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent-property-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>The event type or string name of the event. ...</div><div class='long'><p>The event type or string name of the event.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-LOGIN' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGIN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGIN' class='name expandable'>LOGIN</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The login event type. ...</div><div class='long'><p>The login event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGIN&quot;</code></p></div></div></div><div id='property-LOGIN_FAILURE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGIN_FAILURE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGIN_FAILURE' class='name expandable'>LOGIN_FAILURE</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The login failure event type. ...</div><div class='long'><p>The login failure event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGIN_FAILURE&quot;</code></p></div></div></div><div id='property-LOGIN_SUCCESS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGIN_SUCCESS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGIN_SUCCESS' class='name expandable'>LOGIN_SUCCESS</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The login success event type. ...</div><div class='long'><p>The login success event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGIN_SUCCESS&quot;</code></p></div></div></div><div id='property-LOGOUT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGOUT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGOUT' class='name expandable'>LOGOUT</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The logout event type. ...</div><div class='long'><p>The logout event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGOUT&quot;</code></p></div></div></div><div id='property-LOGOUT_FAILURE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGOUT_FAILURE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGOUT_FAILURE' class='name expandable'>LOGOUT_FAILURE</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The logout failure event type. ...</div><div class='long'><p>The logout failure event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGOUT_FAILURE&quot;</code></p></div></div></div><div id='property-LOGOUT_SUCCESS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-property-LOGOUT_SUCCESS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CafeTownsend.event.AuthenticationEvent-property-LOGOUT_SUCCESS' class='name expandable'>LOGOUT_SUCCESS</a><span> : String</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The logout success event type. ...</div><div class='long'><p>The logout success event type.</p>\n<p>Defaults to: <code>&quot;CafeTownsend.event.AuthenticationEvent.LOGOUT_SUCCESS&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CafeTownsend.event.AuthenticationEvent'>CafeTownsend.event.AuthenticationEvent</span><br/><a href='source/AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CafeTownsend.event.AuthenticationEvent-method-constructor' class='name expandable'>CafeTownsend.event.AuthenticationEvent</a>( <span class='pre'>type, username, password</span> ) : <a href=\"#!/api/CafeTownsend.event.AuthenticationEvent\" rel=\"CafeTownsend.event.AuthenticationEvent\" class=\"docClass\">CafeTownsend.event.AuthenticationEvent</a></div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor. Allows the username and password for authentication to be set on the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type.</p>\n</div></li><li><span class='pre'>username</span> : String<div class='sub-desc'><p>The username being passed to authenticate the user.</p>\n</div></li><li><span class='pre'>password</span> : String<div class='sub-desc'><p>The password being passed to authenticate the user.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CafeTownsend.event.AuthenticationEvent\" rel=\"CafeTownsend.event.AuthenticationEvent\" class=\"docClass\">CafeTownsend.event.AuthenticationEvent</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/SenchaExtensions.mvc.event.AbstractEvent-method-constructor' rel='SenchaExtensions.mvc.event.AbstractEvent-method-constructor' class='docClass'>SenchaExtensions.mvc.event.AbstractEvent.constructor</a></p></div></div></div></div></div></div></div>","parentMixins":[],"files":[{"href":"AuthenticationEvent.html#CafeTownsend-event-AuthenticationEvent","filename":"AuthenticationEvent.js"}],"linenr":18,"inheritable":null,"members":{"cfg":[],"css_var":[],"property":[{"meta":{},"tagname":"property","owner":"SenchaExtensions.mvc.event.AbstractEvent","name":"data","id":"property-data"},{"meta":{},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"readOnly","id":"property-readOnly"},{"meta":{},"tagname":"property","owner":"SenchaExtensions.mvc.event.AbstractEvent","name":"type","id":"property-type"}],"method":[{"meta":{},"tagname":"method","owner":"CafeTownsend.event.AuthenticationEvent","name":"constructor","id":"method-constructor"}],"event":[],"css_mixin":[]},"singleton":false,"override":null,"mixins":[],"private":null,"statics":{"cfg":[],"css_var":[],"property":[{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGIN","id":"property-LOGIN"},{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGIN_FAILURE","id":"property-LOGIN_FAILURE"},{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGIN_SUCCESS","id":"property-LOGIN_SUCCESS"},{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGOUT","id":"property-LOGOUT"},{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGOUT_FAILURE","id":"property-LOGOUT_FAILURE"},{"meta":{"static":true},"tagname":"property","owner":"CafeTownsend.event.AuthenticationEvent","name":"LOGOUT_SUCCESS","id":"property-LOGOUT_SUCCESS"}],"method":[],"event":[],"css_mixin":[]},"name":"CafeTownsend.event.AuthenticationEvent","enum":null,"html_meta":{},"id":"class-CafeTownsend.event.AuthenticationEvent","alternateClassNames":[],"aliases":{},"inheritdoc":null});