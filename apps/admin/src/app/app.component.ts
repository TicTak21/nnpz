import { lyl, StyleRenderer, ThemeRef, ThemeVariables } from '@alyle/ui';
import { Component } from '@angular/core';

const GLOBAL_STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  ref.selectorsOf(GLOBAL_STYLES);

  return {
    $global: lyl`{
      * {
        box-sizing: border-box
      }
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl`{
      display: block
    }`,
  };
};

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  providers: [StyleRenderer],
})
export class AppComponent {
  readonly classes = this.sRenderer.renderSheet(GLOBAL_STYLES, true);

  constructor(readonly sRenderer: StyleRenderer) {}
}
