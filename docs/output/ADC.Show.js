Ext.data.JsonP.ADC_Show({"tagname":"class","name":"ADC.Show","autodetected":{},"files":[{"filename":"ADCShow.js","href":"ADCShow.html#ADC-Show"}],"private":true,"members":[{"name":"adcDirectoryPath","tagname":"property","owner":"ADC.Show","id":"property-adcDirectoryPath","meta":{}},{"name":"rootdir","tagname":"property","owner":"ADC.Show","id":"property-rootdir","meta":{}},{"name":"constructor","tagname":"method","owner":"ADC.Show","id":"method-constructor","meta":{}},{"name":"show","tagname":"method","owner":"ADC.Show","id":"method-show","meta":{}},{"name":"writeError","tagname":"method","owner":"ADC.Show","id":"method-writeError","meta":{}},{"name":"writeMessage","tagname":"method","owner":"ADC.Show","id":"method-writeMessage","meta":{}},{"name":"writeSuccess","tagname":"method","owner":"ADC.Show","id":"method-writeSuccess","meta":{}},{"name":"writeWarning","tagname":"method","owner":"ADC.Show","id":"method-writeWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ADC.Show","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ADCShow.html#ADC-Show' target='_blank'>ADCShow.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Compile, execute and display the output of an ADC</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-adcDirectoryPath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-property-adcDirectoryPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-property-adcDirectoryPath' class='name expandable'>adcDirectoryPath</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Path to the ADC directory</p>\n</div><div class='long'><p>Path to the ADC directory</p>\n</div></div></div><div id='property-rootdir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-property-rootdir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-property-rootdir' class='name expandable'>rootdir</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Root dir of the current ADCUtil</p>\n</div><div class='long'><p>Root dir of the current ADCUtil</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ADC.Show-method-constructor' class='name expandable'>ADC.Show</a>( <span class='pre'>adcDirPath</span> ) : <a href=\"#!/api/ADC.Show\" rel=\"ADC.Show\" class=\"docClass\">ADC.Show</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new instance of ADC Show ...</div><div class='long'><p>Create a new instance of ADC Show</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>adcDirPath</span> : String<div class='sub-desc'><p>Path of the ADC directory</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ADC.Show\" rel=\"ADC.Show\" class=\"docClass\">ADC.Show</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-method-show' class='name expandable'>show</a>( <span class='pre'>options, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show an ADC output ...</div><div class='long'><p>Show an ADC output</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Options</p>\n<ul><li><span class='pre'>output</span> : String<div class='sub-desc'><p>Name of the ADC Output to use</p>\n</div></li><li><span class='pre'>fixture</span> : String<div class='sub-desc'><p>FileName of the ADC fixture to use</p>\n</div></li><li><span class='pre'>masterPage</span> : String (optional)<div class='sub-desc'><p>Path of the master page to use</p>\n</div></li></ul></div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Error<div class='sub-desc'><p>Error</p>\n</div></li><li><span class='pre'>output</span> : String<div class='sub-desc'><p>Output string</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-writeError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-writeError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-method-writeError' class='name expandable'>writeError</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write an error output in the console ...</div><div class='long'><p>Write an error output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-writeMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-method-writeMessage' class='name expandable'>writeMessage</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write an arbitrary message in the console without specific prefix ...</div><div class='long'><p>Write an arbitrary message in the console without specific prefix</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-writeSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-method-writeSuccess' class='name expandable'>writeSuccess</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write a success output in the console ...</div><div class='long'><p>Write a success output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Show'>ADC.Show</span><br/><a href='source/ADCShow.html#ADC-Show-method-writeWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Show-method-writeWarning' class='name expandable'>writeWarning</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write a warning output in the console ...</div><div class='long'><p>Write a warning output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});