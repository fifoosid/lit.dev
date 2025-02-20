import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';

const fetchData = async () => {
  const response = await fetch('https://api.mocki.io/v1/b551e5c3');
  const json = await response.json();
  // Add some delay for demo purposes
  await new Promise<void>((r) => setTimeout(() => r(), 1000));
  return json.data;
}

@customElement('my-element')
class MyElement extends LitElement {

  @state()
  private content: Promise<string> = fetchData();

  render() {
    return html`
      <h3>until directive example</h3>
      ${until(this.content, html`<span>Loading...</span>`)}
    `;
  }
}
