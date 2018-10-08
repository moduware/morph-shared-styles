var $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`
<dom-module id="morph-shared-styles">
  <template>
    <style>
      :host([platform="ios"]) {
        font-family: -apple-system, 'SF UI Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      :host([platform="android"]) {
        font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
      }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
