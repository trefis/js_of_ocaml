(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    runtime.caml_create_file
     ("/static/cmis/test_dynlink.cmi",
      "Caml1999I024\x84\x95\xa6\xbe\0\0\0o\0\0\0\x19\0\0\0^\0\0\0X\xa0,Test_dynlink\xa0\xa0\xb0\x01\x03\xec!f@\xc0\xc0\xc1@\xc0\xb3\x90\xb0F$unit@@\x90@\x02\x05\xf5\xe1\0@\0\xfc\xc0\xb3\x90\xb0F$unit@@\x90@\x02\x05\xf5\xe1\0@\0\xfd@\x02\x05\xf5\xe1\0@\0\xfe@\xb0\xc0/test_dynlink.mlCdh\xc0\x04\x02Cdi@@@\x84\x95\xa6\xbe\0\0\0j\0\0\0\x0f\0\0\0:\0\0\0.\xa0\xa0,Test_dynlink\x900\xba\x85\xadn\xba\xbb\xf2L\\\n\xd4\x8a\xb0:\xaev\xa0\xa0&Stdlib\x900x[\xc45|\xd1\x98\xde\xfc\x8f\x1d=\x8aF\xbf1\xa0\xa08CamlinternalFormatBasics\x900\xe0e\xa8\xb8\x02zri\xfb\xe6\x94 \x86\x1f1@@\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0@");
    var
     global_data=runtime.caml_get_global_data(),
     cst_Test_dynlink_f_Ok=caml_new_string("Test_dynlink.f Ok"),
     cst_Dynlink_OK=caml_new_string("Dynlink OK"),
     Stdlib=global_data.Stdlib;
    caml_call1(Stdlib[35],cst_Dynlink_OK);
    var
     Test_dynlink=
      [0,function(_a_){return caml_call1(Stdlib[35],cst_Test_dynlink_f_Ok)}];
    runtime.caml_register_global(3,Test_dynlink,"Test_dynlink");
    return}
  (function(){return this}()));
