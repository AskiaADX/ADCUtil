Ext.data.JsonP.ADC_Configurator_Info({"tagname":"class","name":"ADC.Configurator.Info","autodetected":{},"files":[{"filename":"ADCConfigurator.js","href":"ADCConfigurator.html#ADC-Configurator-Info"}],"members":[{"name":"constructor","tagname":"method","owner":"ADC.Configurator.Info","id":"method-constructor","meta":{}},{"name":"author","tagname":"method","owner":"ADC.Configurator.Info","id":"method-author","meta":{}},{"name":"categories","tagname":"method","owner":"ADC.Configurator.Info","id":"method-categories","meta":{}},{"name":"company","tagname":"method","owner":"ADC.Configurator.Info","id":"method-company","meta":{}},{"name":"constraint","tagname":"method","owner":"ADC.Configurator.Info","id":"method-constraint","meta":{}},{"name":"constraints","tagname":"method","owner":"ADC.Configurator.Info","id":"method-constraints","meta":{}},{"name":"date","tagname":"method","owner":"ADC.Configurator.Info","id":"method-date","meta":{}},{"name":"description","tagname":"method","owner":"ADC.Configurator.Info","id":"method-description","meta":{}},{"name":"get","tagname":"method","owner":"ADC.Configurator.Info","id":"method-get","meta":{}},{"name":"guid","tagname":"method","owner":"ADC.Configurator.Info","id":"method-guid","meta":{}},{"name":"helpURL","tagname":"method","owner":"ADC.Configurator.Info","id":"method-helpURL","meta":{}},{"name":"name","tagname":"method","owner":"ADC.Configurator.Info","id":"method-name","meta":{}},{"name":"set","tagname":"method","owner":"ADC.Configurator.Info","id":"method-set","meta":{}},{"name":"site","tagname":"method","owner":"ADC.Configurator.Info","id":"method-site","meta":{}},{"name":"style","tagname":"method","owner":"ADC.Configurator.Info","id":"method-style","meta":{}},{"name":"toXml","tagname":"method","owner":"ADC.Configurator.Info","id":"method-toXml","meta":{}},{"name":"version","tagname":"method","owner":"ADC.Configurator.Info","id":"method-version","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ADC.Configurator.Info","short_doc":"Provide an object to manipulate the meta-information of the ADC (config.xml > info)\n\n var ADC = require('adcutil').AD...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ADCConfigurator.html#ADC-Configurator-Info' target='_blank'>ADCConfigurator.js</a></div></pre><div class='doc-contents'><p>Provide an object to manipulate the meta-information of the ADC (config.xml > info)</p>\n\n<pre><code> var ADC = require('adcutil').ADC;\n\n var myAdc = new ADC('path/to/adc/');\n myAdc.load(function (err) {\n     if (err) {\n         throw err;\n     }\n\n     // Get the instance of the Info\n     var info = myAdc.configurator.info;\n\n     console.log(info.get());\n\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ADC.Configurator.Info-method-constructor' class='name expandable'>ADC.Configurator.Info</a>( <span class='pre'>configurator</span> ) : <a href=\"#!/api/ADC.Configurator.Info\" rel=\"ADC.Configurator.Info\" class=\"docClass\">ADC.Configurator.Info</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new instance of ADC Info ...</div><div class='long'><p>Creates a new instance of ADC Info</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>configurator</span> : <a href=\"#!/api/ADC.Configurator\" rel=\"ADC.Configurator\" class=\"docClass\">ADC.Configurator</a><div class='sub-desc'><p>Instance of the configurator</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ADC.Configurator.Info\" rel=\"ADC.Configurator.Info\" class=\"docClass\">ADC.Configurator.Info</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-author' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-author' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-author' class='name expandable'>author</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the author(s) of the ADC\n\n  // Get the author(s) of the ADC\n  adcInfo.author();\n\n  // Set the author(s) of...</div><div class='long'><p>Get or set the author(s) of the ADC</p>\n\n<pre><code>  // Get the author(s) of the ADC\n  adcInfo.author();\n\n  // Set the author(s) of the ADC\n  adcInfo.author(\"John Doe &lt;john.doe@unknow.com&gt;, Foo Bar &lt;foo@bar.com&gt;\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Author(s) to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Author(s)</p>\n</div></li></ul></div></div></div><div id='method-categories' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-categories' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-categories' class='name expandable'>categories</a>( <span class='pre'>[data]</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the categories\n\n  // Get the categories of the ADC\n  adcInfo.categories();\n\n  // Set the categories of the...</div><div class='long'><p>Get or set the categories</p>\n\n<pre><code>  // Get the categories of the ADC\n  adcInfo.categories();\n\n  // Set the categories of the ADC\n  adcInfo.categories([\"General\", \"Slider\", \"Single\"]);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String[] (optional)<div class='sub-desc'><p>Array of string which represent the categories to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>Name of categories</p>\n</div></li></ul></div></div></div><div id='method-company' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-company' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-company' class='name expandable'>company</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the company name of the ADC creator\n\n  // Get the company of the ADC\n  adcInfo.company();\n\n  // Set the co...</div><div class='long'><p>Get or set the company name of the ADC creator</p>\n\n<pre><code>  // Get the company of the ADC\n  adcInfo.company();\n\n  // Set the company of the ADC\n  adcInfo.company(\"Askia SAS\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Company name to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Company of the ADC creator</p>\n</div></li></ul></div></div></div><div id='method-constraint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-constraint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-constraint' class='name expandable'>constraint</a>( <span class='pre'>where, attName, [attValue]</span> ) : Boolean|Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the constraint\n\n  // Get the constraint 'single' on questions\n  adcInfo.constraint('questions', 'single');...</div><div class='long'><p>Get or set the constraint</p>\n\n<pre><code>  // Get the constraint 'single' on questions\n  adcInfo.constraint('questions', 'single');\n\n  // Set the constraint 'single' on questions\n  adcInfo.constraint('questions', 'single', true);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>where</span> : String<div class='sub-desc'><p>Which constraint to target</p>\n</div></li><li><span class='pre'>attName</span> : String<div class='sub-desc'><p>Name of the constraint attribute to get or set</p>\n</div></li><li><span class='pre'>attValue</span> : Boolean|Number (optional)<div class='sub-desc'><p>Value of the attribute to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean|Number</span><div class='sub-desc'><p>Value of the attribute</p>\n</div></li></ul></div></div></div><div id='method-constraints' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-constraints' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-constraints' class='name expandable'>constraints</a>( <span class='pre'>[data]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the constraints\n\n  // Get the constraints of the ADC\n  adcInfo.constraints();\n\n  // Set the constraints of...</div><div class='long'><p>Get or set the constraints</p>\n\n<pre><code>  // Get the constraints of the ADC\n  adcInfo.constraints();\n\n  // Set the constraints of the ADC\n  adcInfo.constraints({\n     questions : {\n         single : true,\n         multiple : true\n     },\n     controls : {\n         responseBlock : true,\n         label : false\n     },\n     responses : {\n         max : 25\n     }\n  });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Constraint data to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Constraints</p>\n</div></li></ul></div></div></div><div id='method-date' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-date' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-date' class='name expandable'>date</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the date creation of the ADC\n\n  // Get the date\n  adcInfo.date();\n\n  // Set the date\n  adcInfo.date(\"2015-...</div><div class='long'><p>Get or set the date creation of the ADC</p>\n\n<pre><code>  // Get the date\n  adcInfo.date();\n\n  // Set the date\n  adcInfo.date(\"2015-06-25\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Date to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Date</p>\n</div></li></ul></div></div></div><div id='method-description' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-description' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-description' class='name expandable'>description</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the description of the ADC\n\n  // Get the description of the ADC\n  adcInfo.description();\n\n  // Set the des...</div><div class='long'><p>Get or set the description of the ADC</p>\n\n<pre><code>  // Get the description of the ADC\n  adcInfo.description();\n\n  // Set the description of the ADC\n  adcInfo.description(\"This is the description of the ADC\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Description of the ADC to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Description of the ADC</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-get' class='name expandable'>get</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the entire information as object\n\n  // Get the info object\n  adcInfo.get();\n  // {\n  //   name : \"My ADC\"\n  //   ...</div><div class='long'><p>Get the entire information as object</p>\n\n<pre><code>  // Get the info object\n  adcInfo.get();\n  // {\n  //   name : \"My ADC\"\n  //   version : \"2.2.0.beta1\",\n  //   date  : \"2015-06-25\",\n  //   guid  : \"the-guid\",\n  //   description : \"Description of the ADC\"\n  //   author  : \"The author name\",\n  //   company : \"The company name\",\n  //   site    : \"http://website.url.com\",\n  //   helpURL : \"http://help.url.com\",\n  //   style   : { width : 400, height : 200},\n  //   categories : [\"General\", \"Slider\", \"Single\"],\n  //   constraints : {\n  //       questions : {\n  //          single : true,\n  //          multiple : true\n  //       },\n  //       controls : {\n  //           responseBlock : true\n  //       },\n  //       responses : {\n  //           max : 10\n  //       }\n  //   }\n  // }\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-guid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-guid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-guid' class='name expandable'>guid</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the GUID of the ADC\n\n  // Get the guid of the ADC\n  adcInfo.guid();\n\n  // Set the guid of the ADC\n  var uu...</div><div class='long'><p>Get or set the GUID of the ADC</p>\n\n<pre><code>  // Get the guid of the ADC\n  adcInfo.guid();\n\n  // Set the guid of the ADC\n  var uuid = require('node-uuid'');\n  adcInfo.guid(uuid.v4());\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>GUID of the ADC to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>GUID of the ADC</p>\n</div></li></ul></div></div></div><div id='method-helpURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-helpURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-helpURL' class='name expandable'>helpURL</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the help URL of the ADC\n\n  // Get the help URL\n  adcInfo.helpURL();\n\n  // Set the help URL\n  adcInfo.helpU...</div><div class='long'><p>Get or set the help URL of the ADC</p>\n\n<pre><code>  // Get the help URL\n  adcInfo.helpURL();\n\n  // Set the help URL\n  adcInfo.helpURL(\"http://my.help.file.com\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>URL to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Help URL</p>\n</div></li></ul></div></div></div><div id='method-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-name' class='name expandable'>name</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the name of the ADC\n\n  // Get the name of the ADC\n  adcInfo.name();\n\n  // Set the name of the ADC\n  adcInf...</div><div class='long'><p>Get or set the name of the ADC</p>\n\n<pre><code>  // Get the name of the ADC\n  adcInfo.name();\n\n  // Set the name of the ADC\n  adcInfo.name(\"New name\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Name of the ADC to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Name of the ADC</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-set' class='name expandable'>set</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the information using a plain object\n\n  // Get the info object\n  adcInfo.set({\n     name : \"My ADC\"\n     version ...</div><div class='long'><p>Set the information using a plain object</p>\n\n<pre><code>  // Get the info object\n  adcInfo.set({\n     name : \"My ADC\"\n     version : \"2.2.0.beta1\",\n     date  : \"2015-06-25\",\n     guid  : \"the-guid\",\n     description : \"Description of the ADC\"\n     author  : \"The author name\",\n     company : \"The company name\",\n     site    : \"http://website.url.com\",\n     helpURL : \"http://help.url.com\",\n     style   : { width : 400, height : 200},\n     categories : [\"General\", \"Slider\", \"Single\"],\n     constraints : {\n         questions : {\n            single : true,\n            multiple : true\n         },\n         controls : {\n             responseBlock : true\n         },\n         responses : {\n             max : 10\n         }\n     }\n   });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data to set</p>\n<ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>Name of the ADC</p>\n</div></li><li><span class='pre'>version</span> : String (optional)<div class='sub-desc'><p>Version of the ADC</p>\n</div></li><li><span class='pre'>date</span> : String (optional)<div class='sub-desc'><p>Date of the ADC (YYYY-MM-dd)</p>\n</div></li><li><span class='pre'>guid</span> : String (optional)<div class='sub-desc'><p>GUID of the ADC</p>\n</div></li><li><span class='pre'>description</span> : String (optional)<div class='sub-desc'><p>Description of the ADC</p>\n</div></li><li><span class='pre'>author</span> : String (optional)<div class='sub-desc'><p>Author(s) of the ADC (name1 &lt;name1@email.com, name2 <a href=\"&#x6d;&#97;&#105;&#108;&#x74;&#x6f;&#58;&#110;&#97;&#109;&#101;&#50;&#x40;&#101;&#x6d;&#x61;&#105;&#x6c;&#x2e;&#99;&#111;&#109;\">&#110;&#97;&#109;&#101;&#50;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#x6f;&#109;</a>)</p>\n</div></li><li><span class='pre'>company</span> : String (optional)<div class='sub-desc'><p>Company name of the creator</p>\n</div></li><li><span class='pre'>site</span> : String (optional)<div class='sub-desc'><p>Web site URL of the creator</p>\n</div></li><li><span class='pre'>helpURL</span> : String (optional)<div class='sub-desc'><p>URL to the ADC help</p>\n</div></li><li><span class='pre'>style</span> : Object (optional)<div class='sub-desc'><p>Style of the ADC</p>\n<ul><li><span class='pre'>width</span> : Number (optional)<div class='sub-desc'><p>Width of the ADC (in pixel)</p>\n</div></li><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>Height of the ADC (in pixel)</p>\n</div></li></ul></div></li><li><span class='pre'>categories</span> : String[] (optional)<div class='sub-desc'><p>Categories of the ADC</p>\n</div></li><li><span class='pre'>constraints</span> : Object (optional)<div class='sub-desc'><p>Constraints of the ADC</p>\n<ul><li><span class='pre'>questions</span> : Object (optional)<div class='sub-desc'><p>Questions constraints of the ADC</p>\n<ul><li><span class='pre'>chapter</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on chapter</p>\n</div></li><li><span class='pre'>single</span> : Boolean (optional)<div class='sub-desc'><p>Allow  or not on single questions</p>\n</div></li><li><span class='pre'>multiple</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on multi-coded questions</p>\n</div></li><li><span class='pre'>numeric</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on numeric questions</p>\n</div></li><li><span class='pre'>open</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on open-ended questions</p>\n</div></li><li><span class='pre'>date</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on date questions</p>\n</div></li><li><span class='pre'>requireParentLoop</span> : Boolean (optional)<div class='sub-desc'><p>Require or not on a parent loop question</p>\n</div></li></ul></div></li><li><span class='pre'>controls</span> : Object (optional)<div class='sub-desc'><p>Controls constraints of the ADC</p>\n<ul><li><span class='pre'>responseBlock</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on response-block</p>\n</div></li><li><span class='pre'>label</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on label</p>\n</div></li><li><span class='pre'>textbox</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on text-box</p>\n</div></li><li><span class='pre'>listbox</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on list-box</p>\n</div></li><li><span class='pre'>checkbox</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on checkbox</p>\n</div></li><li><span class='pre'>radiobutton</span> : Boolean (optional)<div class='sub-desc'><p>Allow or not on radio button</p>\n</div></li></ul></div></li><li><span class='pre'>responses</span> : Object (optional)<div class='sub-desc'><p>Responses constraints of the ADC</p>\n<ul><li><span class='pre'>min</span> : Number (optional)<div class='sub-desc'><p>Minimum allowed responses</p>\n</div></li><li><span class='pre'>max</span> : Number (optional)<div class='sub-desc'><p>Maximum allowed responses</p>\n</div></li></ul></div></li></ul></div></li></ul></div></li></ul></div></div></div><div id='method-site' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-site' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-site' class='name expandable'>site</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the website URL of the ADC creator\n\n  // Get the site\n  adcInfo.site();\n\n  // Set the site URL\n  adcInfo.s...</div><div class='long'><p>Get or set the website URL of the ADC creator</p>\n\n<pre><code>  // Get the site\n  adcInfo.site();\n\n  // Set the site URL\n  adcInfo.site(\"http://my.website.com\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>URL to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Site URL</p>\n</div></li></ul></div></div></div><div id='method-style' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-style' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-style' class='name expandable'>style</a>( <span class='pre'>[data]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the style\n\n  // Get the style of the ADC\n  adcInfo.style();\n\n  // Set the style of the ADC\n  adcInfo.style...</div><div class='long'><p>Get or set the style</p>\n\n<pre><code>  // Get the style of the ADC\n  adcInfo.style();\n\n  // Set the style of the ADC\n  adcInfo.style({\n     width  : 400,\n     height : 200\n  });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Style to set</p>\n\n<h1>param {Number} [data.width] Style width</h1>\n<ul><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>Style height</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toXml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-toXml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-toXml' class='name expandable'>toXml</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the info as xml string\n\n  // Serialize the info to XML\n  adcInfo.toXml();\n  // -&gt; &lt;info&gt;&lt;name&gt;M...</div><div class='long'><p>Return the info as xml string</p>\n\n<pre><code>  // Serialize the info to XML\n  adcInfo.toXml();\n  // -&gt; &lt;info&gt;&lt;name&gt;MyADC&lt;/name&gt;&lt;guid&gt;the-guid&lt;/guid&gt;....&lt;/info&gt;\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-version' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ADC.Configurator.Info'>ADC.Configurator.Info</span><br/><a href='source/ADCConfigurator.html#ADC-Configurator-Info-method-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ADC.Configurator.Info-method-version' class='name expandable'>version</a>( <span class='pre'>[data]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get or set the version of the ADC\n\n  // Get the version of the ADC\n  adcInfo.version();\n\n  // Set the version of the ...</div><div class='long'><p>Get or set the version of the ADC</p>\n\n<pre><code>  // Get the version of the ADC\n  adcInfo.version();\n\n  // Set the version of the ADC\n  adcInfo.version(\"2.0.0.beta1\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String (optional)<div class='sub-desc'><p>Version of the ADC to set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Version of the ADC</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});