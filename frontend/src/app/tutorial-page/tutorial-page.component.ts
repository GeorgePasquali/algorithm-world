import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent implements OnInit {

  markdown: string = `
# C Language
## Compilers
### Clang
* [Main Site](http://clang.llvm.org/)
* [Documentation (Online, Current)](http://clang.llvm.org/docs/UsersManual.html)

### GNU GCC
* [Main Site](https://gcc.gnu.org/)
* [Documentation (Online, Pdf)](https://gcc.gnu.org/onlinedocs/)
* [Cheat Sheet (Pdf)](http://darkdust.net/index.php/writings/gdb)

## Intel C Compiler
* [Main Site](https://software.intel.com/en-us/c-compilers)

### Microsoft Visual Studio
* [Main Site](http://visualstudio.com)

### Tiny C Compiler
* [Main Site] (http://bellard.org/tcc/)
* [Documentation (Online, Current)](http://bellard.org/tcc/tcc-doc.html)


## Debuggers
* See https://github.com/metiscus/references/wiki/Debugging

## Documentation
* [GNU C Library Reference](https://www.gnu.org/software/libc/manual/pdf/libc.pdf)

## Tools
* [Exuberant Ctags](http://ctags.sourceforge.net/) C syntax parser
* [Cscope](http://cscope.sourceforge.net/) Console based ctags viewer

## Language Standards
Note that any of the links to standards documents labeled as Draft are actually copies of committee drafts. The actual published standard may vary from these in significant ways. Anyone doing work that requires normative reference materials should purchase a copy of the published standard from the standards body.
* [C Standard (1989)](https://github.com/metiscus/references/blob/master/c/standards/c89.txt)
* [C Draft Standard (1999)](https://github.com/metiscus/references/blob/master/c/standards/c99.pdf) Technical Committee 3 Draft
* [C Draft Standard (2011)](https://github.com/metiscus/references/blob/master/c/standards/c11.pdf)

## Grammars
* [C89 Lex Specification](http://www.lysator.liu.se/c/ANSI-C-grammar-l.html)
* [C89 Yacc Specification](http://www.lysator.liu.se/c/ANSI-C-grammar-y.html)

  `

  constructor() { }

  ngOnInit() {
  }

}
