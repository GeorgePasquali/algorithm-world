// request.js
const axios = require("axios"); 


it("fetches articles", async () => {
  let res = await axios.get('http://localhost:3003/api/v1/articles');
  
  expect(res.data.length>0).toBe(true)
});

it("Adds An Article", async () => {

  let payload = {
    "title": "Hello World In the C Language",
    "jsCode": "stdout += 'HELLOOOOOOOOOOOOOOO'",
    "traitId": "1",
    "articleDescription": "# C Language \n ## Compilers \n ### Clang * [Main Site](http://clang.llvm.org/) \n * [Documentation (Online, Current)](http://clang.llvm.org/docs/UsersManual.html) \n \n ### GNU GCC\n * [Main Site](https://gcc.gnu.org/)\n * [Documentation (Online, Pdf)](https://gcc.gnu.org/onlinedocs/)\n * [Cheat Sheet (Pdf)](http://darkdust.net/index.php/writings/gdb)\n \n ## Intel C Compiler\n * [Main Site](https://software.intel.com/en-us/c-compilers)\n \n ### Microsoft Visual Studio\n * [Main Site](http://visualstudio.com)\n \n ### Tiny C Compiler\n * [Main Site] (http://bellard.org/tcc/)\n * [Documentation (Online, Current)](http://bellard.org/tcc/tcc-doc.html)\n \n \n ## Debuggers\n * See https://github.com/metiscus/references/wiki/Debugging\n \n ## Documentation\n * [GNU C Library Reference](https://www.gnu.org/software/libc/manual/pdf/libc.pdf)\n \n ## Tools\n * [Exuberant Ctags](http://ctags.sourceforge.net/) C syntax parser\n * [Cscope](http://cscope.sourceforge.net/) Console based ctags viewer\n \n ## Language Standards\n Note that any of the links to standards documents labeled as Draft are actually copies of committee drafts. The actual published standard may vary from these in significant ways. Anyone doing work that requires normative reference materials should purchase a copy of the published standard from the standards body.\n * [C Standard (1989)](https://github.com/metiscus/references/blob/master/c/standards/c89.txt)\n * [C Draft Standard (1999)](https://github.com/metiscus/references/blob/master/c/standards/c99.pdf) Technical Committee 3 Draft\n * [C Draft Standard (2011)](https://github.com/metiscus/references/blob/master/c/standards/c11.pdf)\n \n ## Grammars\n * [C89 Lex Specification](http://www.lysator.liu.se/c/ANSI-C-grammar-l.html)\n * [C89 Yacc Specification](http://www.lysator.liu.se/c/ANSI-C-grammar-y.html)\n",
    "cCode": "#include <stdio.h> \n int main()\n {\n // printf() displays the string inside quotation\n printf(\"Hello, World!\");\n return 0;\n }\n"
  }
  
  let response = await axios.post('http://localhost:3003/api/v1/articles', payload)
  expect(response.status).toBe(200);
});