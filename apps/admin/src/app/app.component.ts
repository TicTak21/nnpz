import { lyl, StyleRenderer, ThemeRef, ThemeVariables } from '@alyle/ui';
import { Component } from '@angular/core';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  ref.selectorsOf(STYLES);
  return {
    $global: lyl`{
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
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  constructor(readonly sRenderer: StyleRenderer) {}
}
