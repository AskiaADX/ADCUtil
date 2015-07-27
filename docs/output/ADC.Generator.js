Ext.data.JsonP.ADC_Generator({"tagname":"class","name":"ADC.Generator","autodetected":{},"files":[{"filename":"ADCGenerator.js","href":"ADCGenerator.html#ADC-Generator"}],"private":true,"members":[{"name":"adcName","tagname":"property","owner":"ADC.Generator","id":"property-adcName","meta":{}},{"name":"outputDirectory","tagname":"property","owner":"ADC.Generator","id":"property-outputDirectory","meta":{}},{"name":"rootdir","tagname":"property","owner":"ADC.Generator","id":"property-rootdir","meta":{}},{"name":"sequence","tagname":"property","owner":"ADC.Generator","id":"property-sequence","meta":{}},{"name":"template","tagname":"property","owner":"ADC.Generator","id":"property-template","meta":{}},{"name":"templateSrc","tagname":"property","owner":"ADC.Generator","id":"property-templateSrc","meta":{}},{"name":"constructor","tagname":"method","owner":"ADC.Generator","id":"method-constructor","meta":{}},{"name":"copyFromTemplate","tagname":"method","owner":"ADC.Generator","id":"method-copyFromTemplate","meta":{}},{"name":"done","tagname":"method","owner":"ADC.Generator","id":"method-done","meta":{}},{"name":"generate","tagname":"method","owner":"ADC.Generator","id":"method-generate","meta":{}},{"name":"updateFiles","tagname":"method","owner":"ADC.Generator","id":"method-updateFiles","meta":{}},{"name":"verifyADCDirNotAlreadyExist","tagname":"method","owner":"ADC.Generator","id":"method-verifyADCDirNotAlreadyExist","meta":{}},{"name":"verifyOutputDirExist","tagname":"method","owner":"ADC.Generator","id":"method-verifyOutputDirExist","meta":{}},{"name":"writeError","tagname":"method","owner":"ADC.Generator","id":"method-writeError","meta":{}},{"name":"writeMessage","tagname":"method","owner":"ADC.Generator","id":"method-writeMessage","meta":{}},{"name":"writeSuccess","tagname":"method","owner":"ADC.Generator","id":"method-writeSuccess","meta":{}},{"name":"writeWarning","tagname":"method","owner":"ADC.Generator","id":"method-writeWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ADC.Generator","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ADCGenerator.html#ADC-Generator' target='_blank'>ADCGenerator.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Generate the file structure of an ADC using a template</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-adcName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-adcName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-adcName' class='name expandable'>adcName</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Name of the ADC ...</div><div class='long'><p>Name of the ADC</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-outputDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-outputDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-outputDirectory' class='name expandable'>outputDirectory</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Output directory ...</div><div class='long'><p>Output directory</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-rootdir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-rootdir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-rootdir' class='name expandable'>rootdir</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Root dir of the current ADCUtil</p>\n</div><div class='long'><p>Root dir of the current ADCUtil</p>\n</div></div></div><div id='property-sequence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-sequence' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-sequence' class='name expandable'>sequence</a> : *|Sequence<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Sequence of calls</p>\n</div><div class='long'><p>Sequence of calls</p>\n</div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-template' class='name expandable'>template</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Name of the template to use</p>\n</div><div class='long'><p>Name of the template to use</p>\n</div></div></div><div id='property-templateSrc' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-property-templateSrc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-property-templateSrc' class='name expandable'>templateSrc</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Path of the template directory ...</div><div class='long'><p>Path of the template directory</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ADC.Generator-method-constructor' class='name expandable'>ADC.Generator</a>( <span class='pre'></span> ) : <a href=\"#!/api/ADC.Generator\" rel=\"ADC.Generator\" class=\"docClass\">ADC.Generator</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new instance of ADC Generator ...</div><div class='long'><p>Create a new instance of ADC Generator</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ADC.Generator\" rel=\"ADC.Generator\" class=\"docClass\">ADC.Generator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-copyFromTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-copyFromTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-copyFromTemplate' class='name expandable'>copyFromTemplate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Copy an ADC structure from the template ...</div><div class='long'><p>Copy an ADC structure from the template</p>\n</div></div></div><div id='method-done' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-done' class='name expandable'>done</a>( <span class='pre'>err</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>End of the sequence chain ...</div><div class='long'><p>End of the sequence chain</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Error<div class='sub-desc'><p>Error</p>\n</div></li></ul></div></div></div><div id='method-generate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-generate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-generate' class='name expandable'>generate</a>( <span class='pre'>name, [options], [callback]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a new ADC structure ...</div><div class='long'><p>Generate a new ADC structure</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the ADC to generate</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Options</p>\n<ul><li><span class='pre'>output</span> : String (optional)<div class='sub-desc'><p>Path of the output director</p>\n<p>Defaults to: <code>process.cwd()</code></p></div></li><li><span class='pre'>template</span> : String (optional)<div class='sub-desc'><p>Name of the template to use</p>\n<p>Defaults to: <code>&quot;blank&quot;</code></p></div></li></ul></div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Error (optional)<div class='sub-desc'><p>Error</p>\n</div></li><li><span class='pre'>outputDirectory</span> : String (optional)<div class='sub-desc'><p>Path of the output directory</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-updateFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-updateFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-updateFiles' class='name expandable'>updateFiles</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Update the config.xml and the readme files with the name of the ADC, the GUID and the creation date ...</div><div class='long'><p>Update the config.xml and the readme files with the name of the ADC, the GUID and the creation date</p>\n</div></div></div><div id='method-verifyADCDirNotAlreadyExist' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-verifyADCDirNotAlreadyExist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-verifyADCDirNotAlreadyExist' class='name expandable'>verifyADCDirNotAlreadyExist</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Verify that the ADC directory doesn't exist ...</div><div class='long'><p>Verify that the ADC directory doesn't exist</p>\n</div></div></div><div id='method-verifyOutputDirExist' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-verifyOutputDirExist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-verifyOutputDirExist' class='name expandable'>verifyOutputDirExist</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Verify that the output directory ...</div><div class='long'><p>Verify that the output directory</p>\n</div></div></div><div id='method-writeError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-writeError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-writeError' class='name expandable'>writeError</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write an error output in the console ...</div><div class='long'><p>Write an error output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-writeMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-writeMessage' class='name expandable'>writeMessage</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write an arbitrary message in the console without specific prefix ...</div><div class='long'><p>Write an arbitrary message in the console without specific prefix</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-writeSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-writeSuccess' class='name expandable'>writeSuccess</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write a success output in the console ...</div><div class='long'><p>Write a success output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div><div id='method-writeWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Generator'>ADC.Generator</span><br/><a href='source/ADCGenerator.html#ADC-Generator-method-writeWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Generator-method-writeWarning' class='name expandable'>writeWarning</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write a warning output in the console ...</div><div class='long'><p>Write a warning output in the console</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to write in the console</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});