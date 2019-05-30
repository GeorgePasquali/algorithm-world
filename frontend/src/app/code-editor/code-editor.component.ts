import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  
  editorOptions = {theme: 'vs-light', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

  onInit(editor: { getPosition: () => void; }) {
    let line = editor.getPosition();
    console.log(line);
  }

}
