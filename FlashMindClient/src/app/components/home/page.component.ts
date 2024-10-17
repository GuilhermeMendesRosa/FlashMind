import {Component} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo, Font
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import {PoContainerModule, PoMenuModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CKEditorModule,
    PoMenuModule,
    PoContainerModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo', 'redo', '|',
      'heading', '|', 'bold', 'italic', '|',
      'link', 'insertTable', 'mediaEmbed', '|',
      'bulletedList', 'numberedList', 'indent', 'outdent',
      'fontColor', 'fontBackgroundColor',  // Adicione os controles de cor
    ],
    plugins: [
      Bold,
      Essentials,
      Heading,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      MediaEmbed,
      Paragraph,
      Table,
      Undo,
      Font
    ]
  }

}
