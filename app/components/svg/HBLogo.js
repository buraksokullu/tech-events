import React from 'react';

const HbLogo = props => (
  <svg fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.09 11.89c.687.937 1.107 1.9 1.26 2.89.153.992.23 2.608.23 4.85v14.744h-6.7V19.097c0-1.352-.228-2.443-.685-3.273-.594-1.167-1.721-1.75-3.382-1.75-1.72 0-3.026.58-3.918 1.74-.891 1.159-1.336 2.814-1.336 4.965v13.595H0V.124h6.56v11.303c1.214-1.198 1.82-1.588 3.035-2.07 1.275-.507 2.809-.739 4.184-.739 1.543 0 2.945.269 4.205.807a7.36 7.36 0 0 1 3.106 2.464zm11.129 7.454c.238-1.633.82-2.928 1.747-3.883.927-.956 2.232-1.434 3.916-1.434 1.548 0 2.845.45 3.89 1.353 1.046.901 1.629 2.223 1.748 3.964H32.219zm15.896-5.84c-1.14-1.69-2.585-2.926-4.335-3.71-1.75-.784-3.717-1.176-5.9-1.176-3.677 0-6.668 1.16-8.972 3.48-2.304 2.318-3.456 5.65-3.456 9.996 0 4.64 1.276 7.986 3.828 10.045 2.553 2.058 5.498 3.087 8.837 3.087 4.046 0 7.191-1.22 9.439-3.66 1.445-1.534 2.255-3.046 2.432-4.534H43.29c-.39.736-.84 1.312-1.35 1.726-.933.767-2.147 1.15-3.642 1.15-1.409 0-2.615-.313-3.617-.943-1.647-1.012-2.521-2.777-2.624-5.294H50.33c.032-2.167-.04-3.826-.216-4.98-.305-1.966-.971-3.695-1.999-5.186zm21.41 13.966c-.97 1.411-2.377 2.117-4.222 2.117-1.272 0-2.373-.345-3.303-1.036-1.564-1.181-2.346-3.23-2.346-6.145 0-1.841.232-3.361.697-4.558.9-2.256 2.55-3.383 4.953-3.383 2 0 3.446.744 4.337 2.232.891 1.489 1.337 3.2 1.337 5.132 0 2.349-.485 4.228-1.453 5.64zM67.18 8.732c-2.022 0-3.768.56-5.235 1.68-.802.63-1.56 1.49-2.27 2.578V9.285h-6.283v34.31h6.49v-12.42c.695 1.059 1.406 1.864 2.132 2.417 1.328.997 2.996 1.496 5.004 1.496 3.15 0 5.726-1.16 7.726-3.476s3-5.685 3-10.104c0-4.19-1.024-7.366-3.07-9.53-2.046-2.163-4.544-3.245-7.494-3.245zm27.821 10.542c-3.92-.858-6.203-1.464-6.849-1.818-.646-.337-.97-.882-.97-1.633 0-.599.305-1.12.912-1.566.608-.445 1.627-.667 3.059-.667 1.738 0 2.969.444 3.692 1.335.385.491.623 1.158.716 2.002h6.56c-.293-3.069-1.427-5.228-3.403-6.479-1.976-1.25-4.532-1.876-7.67-1.876-3.306 0-5.87.833-7.692 2.498-1.822 1.664-2.733 3.655-2.733 5.972 0 1.965.582 3.468 1.75 4.512 1.165 1.06 3.173 1.94 6.024 2.647 3.96.935 6.248 1.596 6.863 1.979.615.384.922.944.922 1.68 0 .768-.381 1.344-1.145 1.727-.763.383-1.792.575-3.087.575-2.205 0-3.716-.437-4.533-1.312-.462-.49-.763-1.32-.902-2.486h-6.652c0 2.578.941 4.7 2.825 6.364 1.884 1.665 4.801 2.498 8.753 2.498 3.874 0 6.738-.787 8.59-2.36 1.854-1.572 2.78-3.602 2.78-6.088 0-1.887-.644-3.46-1.933-4.718-1.305-1.243-3.264-2.17-5.877-2.786z"
      fill="#FF6000"
    />
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={266} height={44}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 43.595h265.84V0H0v43.595z" fill="#fff" />
    </mask>
    <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#FF6000">
      <path d="M106.296 34.374h6.652V9.285h-6.652v25.089zm27.915-6.789c-.944 1.366-2.266 2.048-3.968 2.048-1.965 0-3.427-.706-4.386-2.118-.96-1.411-1.439-3.192-1.439-5.34 0-1.826.232-3.314.696-4.465.897-2.164 2.545-3.245 4.943-3.245 2.367 0 3.992 1.105 4.874 3.314.464 1.166.696 2.64.696 4.42 0 2.225-.472 4.02-1.416 5.386zm-2.312-18.852c-1.838 0-3.351.384-4.54 1.151-1.004.615-1.924 1.504-2.757 2.67V.056h-6.56v34.318h6.468v-3.153c.878 1.228 1.696 2.087 2.452 2.578 1.264.829 2.938 1.243 5.02 1.243 3.316 0 5.9-1.281 7.75-3.844 1.851-2.563 2.777-5.792 2.777-9.69 0-3.76-.938-6.829-2.815-9.207-1.876-2.378-4.474-3.568-7.795-3.568zm29.991 14.202c0 1.611-.214 2.908-.641 3.89-.825 1.81-2.352 2.716-4.581 2.716-1.74 0-2.908-.637-3.504-1.91-.335-.722-.503-1.796-.503-3.223V9.286h-6.722v15.122c0 2.87.36 5.04 1.079 6.514 1.285 2.67 3.78 4.005 7.482 4.005 1.286 0 2.406-.17 3.362-.506.957-.338 1.948-.968 2.973-1.888.337-.29.627-.63.872-1.013.245-.383.398-.614.459-.69v3.544h6.375V9.286h-6.65v13.65zm25.337-14.247c-1.964 0-3.56.514-4.788 1.542-.752.614-1.634 1.757-2.647 3.429V9.286h-6.26v25.088h6.606V22.382c0-2.01.252-3.498.759-4.465.906-1.718 2.678-2.578 5.317-2.578a17.272 17.272 0 0 1 1.888.115v-6.72a20.52 20.52 0 0 1-.565-.035 3.717 3.717 0 0 0-.31-.011zm45.085 18.873c-.966 1.382-2.379 2.072-4.235 2.072-1.857 0-3.242-.694-4.155-2.083-.913-1.388-1.369-3.241-1.369-5.559 0-2.147.449-3.947 1.346-5.397.898-1.45 2.306-2.175 4.224-2.175 1.258 0 2.363.4 3.315 1.197 1.549 1.32 2.324 3.513 2.324 6.582 0 2.195-.483 3.982-1.45 5.363zm1.266-15.098a7.977 7.977 0 0 0-2.876-2.775c-1.183-.667-2.533-1-4.052-1-3.3 0-5.935 1.227-7.906 3.682-1.972 2.456-2.958 5.823-2.958 10.104 0 3.714 1.001 6.756 3.004 9.127 2.002 2.37 4.469 3.556 7.4 3.556 1.78 0 3.268-.337 4.465-1.013 1.197-.674 2.264-1.757 3.2-3.245v3.475h6.375V.056h-6.652v12.407zm-27.615 12.199c-.046 2.19-.671 3.697-1.876 4.524-1.206.827-2.523 1.24-3.954 1.24-.901 0-1.668-.248-2.296-.746-.63-.498-.946-1.306-.946-2.422 0-1.257.516-2.183 1.547-2.78.61-.352 1.612-.651 3.009-.896l1.49-.275c.745-.139 1.33-.288 1.758-.449.427-.16.85-.37 1.268-.63v2.433zm6.523-8.108c0-3.017-1.068-5.068-3.205-6.156-2.138-1.086-4.583-1.63-7.336-1.63-4.23 0-7.212 1.103-8.95 3.306-1.092 1.41-1.707 3.209-1.846 5.399h6.317c.155-.965.465-1.73.931-2.298.652-.765 1.761-1.147 3.33-1.147 1.396 0 2.456.194 3.177.585.723.39 1.083 1.099 1.083 2.125 0 .842-.471 1.462-1.412 1.86-.524.23-1.395.421-2.614.574l-2.245.276c-2.544.322-4.473.858-5.784 1.608-2.39 1.378-3.586 3.605-3.586 6.684 0 2.373.743 4.206 2.229 5.5 1.486 1.294 3.369 1.941 5.648 1.941 1.787 0 3.389-.406 4.805-1.217a13.516 13.516 0 0 0 3.143-2.504c.046.566 0 2.936 0 2.936h6.362c-.031-1.134-.047-5.562-.047-6.358V16.554zm46.784 8.108c-.047 2.19-.672 3.697-1.877 4.524-1.206.827-2.523 1.24-3.954 1.24-.901 0-1.668-.248-2.297-.746-.63-.498-.945-1.306-.945-2.422 0-1.257.516-2.183 1.547-2.78.61-.352 1.612-.651 3.008-.896l1.49-.275c.746-.139 1.33-.288 1.758-.449.427-.16.851-.37 1.27-.63v2.433zm6.569 9.734c-.031-1.134-.047-5.562-.047-6.358V16.554c0-3.017-1.068-5.068-3.205-6.156-2.138-1.086-4.583-1.63-7.336-1.63-4.23 0-7.213 1.103-8.95 3.306-1.092 1.41-1.707 3.209-1.846 5.399h6.317c.155-.965.465-1.73.931-2.298.652-.765 1.761-1.147 3.33-1.147 1.396 0 2.455.194 3.177.585.722.39 1.083 1.099 1.083 2.125 0 .842-.471 1.462-1.412 1.86-.524.23-1.395.421-2.614.574l-2.245.276c-2.544.322-4.473.858-5.784 1.608-2.39 1.378-3.586 3.605-3.586 6.684 0 2.373.743 4.206 2.228 5.5 1.487 1.294 3.37 1.941 5.649 1.941 1.787 0 3.389-.406 4.805-1.217a13.537 13.537 0 0 0 3.143-2.504c.046.566 0 2.936 0 2.936h6.362zM109.517 0a3.612 3.612 0 1 0 0 7.224 3.612 3.612 0 0 0 0-7.224z" />
    </g>
  </svg>
);

export default HbLogo;
