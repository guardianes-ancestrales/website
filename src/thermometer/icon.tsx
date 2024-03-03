import "./thermometer.scss";

export const Icon = ({ percentage }: { percentage: number }): JSX.Element => {
  return (
    <svg
      className="thermometer__icon"
      width="69.363"
      height="193.65"
      viewBox="0 0 69.363 193.65"
    >
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="100%" y2="0">
          <stop offset="0%" stopColor="#b3e2da" />
          <stop offset={`${percentage}%`} stopColor="#b3e2da">
            <animate
              attributeName="offset"
              dur="2s"
              from="0"
              to={`${percentage / 100}`}
              repeatCount="1"
            />
          </stop>
          <stop offset={`${percentage}%`} stopColor="white">
            <animate
              attributeName="offset"
              dur="2s"
              from="0%"
              to={`${percentage / 100}%`}
              repeatCount="1"
            />
          </stop>
        </linearGradient>
      </defs>
      <g transform="translate(-506.99 211.06)">
        <g transform="translate(471.35 2.7528)">
          <g transform="translate(98.852 -18.646)">
            <path
              d="m-28.816-195.17c-11.036 0-19.921 8.8845-19.921 19.921v110.88c-8.7587 6.301-14.478 16.573-14.478 28.163 0 19.124 15.558 34.681 34.682 34.681 19.124 0 34.682-15.557 34.682-34.681 0-11.59-5.7195-21.862-14.478-28.163v-110.88c0-11.036-8.8845-19.921-19.921-19.921z"
              fill="#1e2c19"
              strokeWidth="18.736"
            />
          </g>
          <g
            transform="matrix(.26458 0 0 .26458 31.409 -95.319)"
            strokeWidth="0px"
          >
            <circle
              className="cls-5"
              cx="147.06"
              cy="152.95"
              r="129.51"
              fill="#ef7469"
            />
            <path
              className="cls-2"
              d="m147.06 284.03c-72.28 0-131.08-58.8-131.08-131.08s58.8-131.08 131.08-131.08 131.08 58.8 131.08 131.08-58.8 131.08-131.08 131.08zm0-259.01c-70.54 0-127.94 57.39-127.94 127.94s57.39 127.94 127.94 127.94 127.94-57.39 127.94-127.94-57.4-127.94-127.94-127.94z"
              fill="#1e2c19"
            />
          </g>
          <rect
            x="50.947"
            y="-213.02"
            width="38.742"
            height="167.39"
            ry="19.301"
            fill="#ef7469"
            strokeWidth="18.454"
          />
        </g>
        <path
          d="m541.67-208.31c-9.6235 0-17.371 7.7475-17.371 17.371v111.9c-8.7978 5.7088-14.63 15.618-14.63 26.863 0 17.645 14.356 32.001 32.001 32.001 17.645 0 32.002-14.356 32.002-32.001 0-11.246-5.8328-21.155-14.631-26.863v-111.9c0-9.6235-7.7475-17.371-17.371-17.371z"
          fill="#1e2c19"
          strokeWidth="17.475"
        />
        <path
          d="m541.64-207.51h.0584c9.1365 0 16.492 7.3554 16.492 16.492v134.41c0 9.1365-7.3554 16.492-16.492 16.492h-.0584c-9.1365 0-16.492-7.3554-16.492-16.492v-134.41c0-9.1365 7.3554-16.492 16.492-16.492zm31.569 155.82a31.531 31.531 0 01-31.531 31.531 31.531 31.531 0 01-31.531-31.531 31.531 31.531 0 0131.531-31.531 31.531 31.531 0 0131.531 31.531z"
          fill="#url"
          strokeWidth="17.042"
        />
        <path
          d="m541.64-207.51h.0584c9.1365 0 16.492 7.3554 16.492 16.492v134.41c0 9.1365-7.3554 16.492-16.492 16.492h-.0584c-9.1365 0-16.492-7.3554-16.492-16.492v-134.41c0-9.1365 7.3554-16.492 16.492-16.492zm31.569 155.82a31.531 31.531 0 01-31.531 31.531 31.531 31.531 0 01-31.531-31.531 31.531 31.531 0 0131.531-31.531 31.531 31.531 0 0131.531 31.531z"
          fill="url(#grad)"
          strokeWidth="17.042"
        />
        <g
          transform="matrix(.26458 0 0 .26458 502.76 -92.469)"
          strokeWidth="0px"
        >
          <path
            className="cls-5"
            d="m266.82 152.95c-40.01 1.8-100.68 59.14-101.5 59.92-6.16.25-12.29.4-18.27.4h-.06c-5.94 0-12.03-.14-18.14-.39 0 0-61.23-58.12-101.51-59.92 0-19.66 4.74-38.23 13.14-54.59l17.27 17.63 11.94-13.37 37.72 42.66 16.78-22.48 22.81 26.34 23-26.34 16.78 22.48 37.72-42.66 11.94 13.37 17.23-17.59c8.39 16.36 13.12 34.9 13.12 54.55z"
            fill="#ef7469"
          >
            <animate
              attributeName="fill"
              values="#48b6a3;#8ed4c8;#48b6a3"
              dur="3s"
              repeatCount="indefinite"
            ></animate>
          </path>
          <path
            className="cls-2"
            d="m147.05 214.49c-5.68 0-11.8-.13-18.24-.39-.29-.01-.57-.13-.79-.33-.61-.58-61.36-57.82-100.73-59.59-.65-.03-1.16-.56-1.16-1.21 0-19.43 4.47-37.99 13.27-55.15.18-.35.51-.59.9-.65s.78.07 1.05.35l16.36 16.7 11.08-12.4c.23-.26.56-.41.91-.41.39 0 .68.15.91.41l36.73 41.54 15.89-21.29c.22-.3.56-.47.93-.49s.72.14.96.42l21.9 25.29 22.08-25.29c.24-.28.6-.44.96-.42.37.01.71.19.93.49l15.89 21.29 36.73-41.54c.23-.26.58-.41.91-.41.35 0 .68.15.91.41l11.08 12.4 16.32-16.66c.27-.28.66-.41 1.05-.35s.72.3.9.65c8.79 17.16 13.25 35.7 13.25 55.11 0 .65-.51 1.19-1.16 1.21-39.42 1.77-100.11 59.01-100.72 59.58-.21.2-.49.32-.79.33-6.42.27-12.59.4-18.32.4zm-17.68-2.81c6.24.25 12.17.37 17.63.37s11.59-.13 17.82-.38c4.92-4.59 62.03-57.13 100.78-59.87-.17-18.03-4.28-35.29-12.22-51.34l-16.04 16.38c-.24.24-.56.36-.9.37-.34 0-.65-.15-.88-.41l-11.03-12.35-36.82 41.64c-.24.27-.6.42-.96.41-.37-.02-.71-.19-.92-.49l-15.88-21.28-22.01 25.21c-.23.26-.56.42-.92.42-.36-.02-.69-.15-.92-.42l-21.82-25.2-15.88 21.27c-.22.29-.56.47-.92.49s-.72-.14-.96-.41l-36.82-41.64-11.03 12.35c-.22.25-.54.4-.88.41-.34 0-.66-.12-.9-.37l-16.08-16.42c-7.96 16.05-12.07 33.32-12.24 51.38 39.13 2.73 95.42 54.82 100.79 59.88zm137.45-58.73h.01z"
            fill="#1e2c19"
          />
          <path
            className="cls-1"
            d="m128.83 212.88c-44.54-1.84-90.38-9.45-90.38-9.45-7.14-15.34-11.13-32.44-11.13-50.48 40.28 1.81 101.51 59.92 101.51 59.92z"
            fill="#48b6a3"
          />
          <path
            className="cls-2"
            d="m128.83 214.09h-.05c-44.11-1.82-90.07-9.39-90.52-9.46-.4-.07-.73-.32-.9-.69-7.46-16.02-11.25-33.18-11.25-50.99 0-.33.14-.65.38-.88s.55-.35.9-.34c40.27 1.81 99.78 57.87 102.29 60.26.37.35.48.89.28 1.36-.19.45-.63.74-1.12.74zm-89.54-11.76c5.53.89 46.18 7.27 86.27 9.18-11.61-10.54-62.16-54.69-97.01-57.27.18 16.78 3.79 32.95 10.74 48.09z"
            fill="#1e2c19"
          />
          <path
            className="cls-1"
            d="m165.28 212.88c44.54-1.84 90.38-9.45 90.38-9.45 7.14-15.34 11.13-32.44 11.13-50.48-40.28 1.81-101.51 59.92-101.51 59.92z"
            fill="#48b6a3"
          />
          <path
            className="cls-2"
            d="m165.28 214.09c-.49 0-.93-.29-1.12-.74-.2-.47-.08-1.01.28-1.36 2.51-2.39 62.02-58.45 102.29-60.26.33-.01.65.11.9.34.24.23.38.55.38.88 0 17.81-3.78 34.97-11.25 50.99-.17.36-.51.62-.9.69-.46.08-46.42 7.64-90.52 9.46h-.05zm100.29-59.85c-34.85 2.58-85.4 46.73-97.01 57.27 40.09-1.91 80.74-8.29 86.27-9.18 6.95-15.14 10.57-31.31 10.74-48.09z"
            fill="#1e2c19"
          />
          <path
            className="cls-1"
            d="m255.67 203.47c-19.05 40.88-60.51 69.21-108.59 69.21s-89.54-28.34-108.59-69.22c0 0 59.23 9.8 108.47 9.8h.06c48.35 0 106.51-9.45 108.65-9.8z"
            fill="#48b6a3"
          />
          <path
            className="cls-2"
            d="m147.09 273.9c-46.84 0-89.9-27.45-109.69-69.92-.19-.41-.14-.89.13-1.25s.72-.54 1.17-.46c.59.1 59.7 9.79 108.27 9.79h.05c48.22 0 106.02-9.38 108.45-9.78.45-.07.89.11 1.17.47.27.36.32.84.13 1.25-19.79 42.47-62.85 69.91-109.69 69.91zm-106.49-68.87c19.82 40.44 61.36 66.44 106.49 66.44s86.68-26 106.49-66.43c-11.53 1.81-62.92 9.45-106.5 9.45h-.05c-43.38 0-95.03-7.67-106.43-9.45z"
            fill="#1e2c19"
          />
          <path
            className="cls-1"
            d="m238.13 230.68c-21.96 25.71-54.61 42.01-91.08 42.01s-69.11-16.29-91.07-42c24.03-5.84 88.77-5.33 91.07-5.3h.06c2.28-.02 66.94-.54 91.02 5.29z"
            fill="#48b6a3"
          />
          <path
            className="cls-2"
            d="m147.05 273.9c-35.43 0-68.96-15.46-91.99-42.42-.27-.32-.36-.76-.23-1.16s.46-.71.87-.81c24.15-5.87 88.64-5.36 91.37-5.34 2.77-.02 67.15-.53 91.35 5.33.41.1.74.4.87.81.13.4.04.84-.23 1.16-23.04 26.97-56.57 42.44-92 42.44zm-88.82-42.47c22.52 25.47 54.77 40.04 88.82 40.04s66.3-14.57 88.82-40.05c-25.27-5.32-86.11-4.84-88.75-4.81-2.73-.03-63.67-.5-88.89 4.83z"
            fill="#1e2c19"
          />
        </g>
        <path
          className="cls-2"
          d="m537.75-36.004c-.17727 0-.32279-.14288-.32279-.32279v-3.2491c0-5.5113 3.8206-10.48 3.9846-10.689.10848-.14023.31221-.16404.45244-.0556.14023.10848.16669.31221.0556.45244-.0397.0503-3.847 5.0086-3.847 10.292v3.2491c0 .17727-.14287.32279-.32279.32279z"
          fill="#1e2c19"
          strokeWidth="0px"
        />
        <g
          transform="matrix(.26458 0 0 .26458 502.76 -92.469)"
          strokeWidth="0px"
        >
          <path
            className="cls-5"
            d="m161.86 212.2v-12.28c0-20.65-14.8-39.65-14.8-39.65h.06s-14.8 19-14.8 39.65v12.28z"
            fill="#ef7469"
          />
          <path
            className="cls-2"
            d="m161.86 213.41c-.67 0-1.22-.54-1.22-1.22v-12.28c0-16.89-10.28-32.88-13.55-37.54-3.28 4.67-13.55 20.66-13.55 37.54v12.28c0 .67-.54 1.22-1.22 1.22s-1.22-.54-1.22-1.22v-12.28c0-19.63 12.83-37.45 14.82-40.09.01-.03.03-.06.04-.1.2-.42.63-.68 1.09-.68s.92.26 1.12.68c1.72 2.26 14.89 20.29 14.89 40.18v12.28c0 .67-.54 1.22-1.22 1.22z"
            fill="#1e2c19"
          />
          <path
            className="cls-2"
            d="m157.62 219.4c-1.58-8-4.78-10.4-10.56-10.4s-9.12 3.2-10.56 10.4l-5.97 29.91c-.24 1.18.67 2.29 1.88 2.29h29.32c1.21 0 2.11-1.1 1.88-2.28-1.25-6.21-4.69-23.41-5.97-29.92z"
            fill="#1e2c19"
          />
          <g fill="#1e2c19">
            <rect
              className="cls-2"
              x="138.48"
              y="248.86"
              width="6.23"
              height="14.97"
              rx=".72"
              ry=".72"
            />
            <rect
              className="cls-2"
              x="149.41"
              y="248.86"
              width="6.23"
              height="14.97"
              rx=".72"
              ry=".72"
            />
          </g>
        </g>
        <g fill="#1e2c19">
          <g strokeWidth="0px">
            <path
              className="cls-2"
              d="m541.67-36.004c-.17727 0-.32279-.14288-.32279-.32279v-6.3156c0-.17727.14288-.32279.32279-.32279.17992 0 .3228.14288.3228.32279v6.3156c0 .17727-.14288.32279-.3228.32279z"
            />
            <path
              className="cls-2"
              d="m541.67-38.602c-.082 0-.16404-.0317-.22754-.0952l-3.4237-3.4237c-.12435-.127-.12435-.32808 0-.45508.12436-.12436.33073-.12436.45509 0l3.4237 3.4237c.12435.127.12435.32808 0 .45508-.0635.0635-.14552.0952-.22755.0952z"
            />
            <path
              className="cls-2"
              d="m541.65-42.32c-.082 0-.16404-.0317-.22754-.0952l-2.413-2.413c-.12436-.127-.12436-.32808 0-.45508.12435-.12435.33073-.12435.45508 0l2.413 2.413c.12436.127.12436.32808 0 .45508-.0635.0635-.14552.0952-.22754.0952z"
            />
            <path
              className="cls-2"
              d="m541.67-38.602c-.082 0-.16404-.0317-.22754-.0952-.12435-.127-.12435-.32808 0-.45508l3.4237-3.4237c.12436-.12436.33073-.12436.45508 0 .12436.127.12436.32808 0 .45508l-3.4237 3.4237c-.0635.0635-.14552.0952-.22755.0952z"
            />
            <path
              className="cls-2"
              d="m541.69-42.32c-.082 0-.16404-.0317-.22754-.0952-.12436-.127-.12436-.32808 0-.45508l2.413-2.413c.12435-.12435.33073-.12435.45508 0 .12436.127.12436.32808 0 .45508l-2.413 2.413c-.0635.0635-.14552.0952-.22754.0952z"
            />
            <path
              className="cls-2"
              d="m536.85-36.004c-.0794 0-.15875-.0291-.2196-.0873-.1614-.15082-16.235-15.121-26.651-15.589-.17727-.008-.31486-.15875-.30692-.33602.008-.17728.15875-.30957.33602-.30692 10.655.47889 26.397 15.137 27.064 15.761.12965.12171.13494.32544.0132.45508-.0635.0661-.14817.10054-.23548.10054z"
            />
            <path
              className="cls-2"
              d="m526.87-36.594c-.0847 0-.16933-.0344-.23283-.10054-.082-.0873-8.3635-8.6783-16.063-8.8768-.17728-.005-.3175-.15346-.31221-.33073.005-.17727.15081-.32544.33073-.31221 7.9666.20637 16.166 8.7154 16.51 9.0778.1217.12965.11641.33338-.0106.45509-.0635.0582-.14287.0899-.22225.0899z"
            />
            <path
              className="cls-2"
              d="m541.69-38.602c-.082 0-.16404-.0317-.22754-.0952l-3.4237-3.4237c-.12435-.127-.12435-.32808 0-.45508.12435-.12436.33073-.12436.45508 0l3.4237 3.4237c.12436.127.12436.32808 0 .45508-.0635.0635-.14552.0952-.22754.0952z"
            />
            <path
              className="cls-2"
              d="m541.67-42.32c-.082 0-.16404-.0317-.22754-.0952l-2.413-2.413c-.12435-.127-.12435-.32808 0-.45508.12436-.12435.33073-.12435.45509 0l2.413 2.413c.12435.127.12435.32808 0 .45508-.0635.0635-.14552.0952-.22755.0952z"
            />
            <path
              className="cls-2"
              d="m556.55-36.547c-.0926 0-.18257-.0397-.24607-.11377-.11377-.13494-.0979-.33866.0397-.45244.42598-.35983 10.504-8.8027 16.402-9.0673.17727 0 .32808.12965.33602.30692.008.17727-.12964.32808-.30692.33602-5.678.254-15.912 8.8292-16.015 8.9165-.0609.0503-.13494.0767-.20638.0767z"
            />
            <path
              className="cls-2"
              d="m545.5-41.201c-.0794 0-.15875-.0291-.2196-.0873-.12965-.12171-.13759-.32544-.0159-.45508l6.4955-6.9453c.11907-.127.3175-.13758.44979-.0212l4.5482 4.0534c.13229.11907.14552.3228.0265.45509-.11906.13229-.32015.14552-.45508.0265l-4.3127-3.8444-6.2812 6.7178c-.0635.0688-.14817.10319-.23548.10319z"
            />
            <path
              className="cls-2"
              d="m534.58-49.921c-.0873 0-.17727-.037-.24077-.10584l-3.3999-3.7835c-.11907-.13229-.10848-.33602.0238-.45508.13229-.11907.33602-.10848.45508.0238l3.3999 3.7835c.11906.13229.10848.33602-.0238.45508-.0609.0556-.13759.082-.21432.082z"
            />
            <path
              className="cls-2"
              d="m548.79-49.921c-.0767 0-.15346-.0265-.21432-.082-.13229-.11906-.14287-.32279-.0238-.45508l3.3999-3.7835c.11906-.13229.32279-.14288.45508-.0238.13229.11906.14288.32279.0238.45508l-3.3999 3.7835c-.0635.0714-.15082.10584-.24077.10584z"
            />
            <path
              className="cls-2"
              d="m537.85-41.201c-.0873 0-.17198-.0344-.23548-.10319l-6.2812-6.7178-4.3127 3.8444c-.13229.11906-.33602.10583-.45508-.0265-.11906-.13229-.10584-.33602.0265-.45508l4.5482-4.0534c.12965-.11642.33073-.10848.4498.0212l6.4955 6.9453c.1217.12965.11377.33338-.0159.45508-.0609.0582-.14023.0873-.2196.0873z"
            />
            <path
              className="cls-2"
              d="m529.44-46.434c-.0847 0-.16933-.0317-.23019-.0979l-8.6042-8.9032-4.535 5.0324c-.11907.1323-.3228.14288-.45509.0238-.13229-.11907-.14287-.3228-.0238-.45509l4.7652-5.289c.0609-.0661.14287-.10583.23283-.10583.0873 0 .17462.0344.23812.0979l8.845 9.1519c.12436.127.11907.33073-.008.45509-.0635.0608-.14288.0899-.2249.0899z"
            />
            <path
              className="cls-2"
              d="m553.92-46.434c-.0794 0-.16139-.0291-.22489-.0899-.127-.12436-.13229-.32809-.008-.45509l8.845-9.1519c.0608-.0635.14817-.0979.23813-.0979.09 0 .17462.0397.23283.10583l4.7651 5.289c.11907.13229.10848.33602-.0238.45509-.13229.11906-.33602.10848-.45508-.0238l-4.535-5.0324-8.6042 8.9032c-.0635.0661-.14817.0979-.23019.0979z"
            />
          </g>
          <g>
            <rect
              x="525.15"
              y="-84.314"
              width="13.769"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-110.56"
              width="13.769"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-136.81"
              width="13.769"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-163.05"
              width="13.769"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-189.3"
              width="13.769"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-176.17"
              width="4.6181"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-182.74"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-169.61"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-90.876"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-104"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-117.12"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-130.24"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-143.37"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-156.49"
              width="9.2362"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-149.93"
              width="4.6181"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-123.68"
              width="4.6181"
              height=".84375"
              ry=".42187"
            />
            <rect
              x="525.15"
              y="-97.437"
              width="4.6181"
              height=".84375"
              ry=".42187"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
