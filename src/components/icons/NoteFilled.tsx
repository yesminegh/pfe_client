function SvgNoteEmpty({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" {...props}>
      <g id="Groupe_672" data-name="Groupe 672" transform="translate(-88.533 -3.345)">
        <g
          id="Rectangle_178"
          data-name="Rectangle 178"
          transform="translate(88.533 3.345)"
          fill={fill}
          stroke={fill}
          strokeWidth="2"
        >
          <rect width="21" height="25" rx="2" stroke="none" />
          <rect x="1" y="1" width="19" height="23" rx="1" fill="none" />
        </g>
        <line
          id="Ligne_90"
          data-name="Ligne 90"
          x2="13.17"
          transform="translate(91.881 13.459)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <line
          id="Ligne_91"
          data-name="Ligne 91"
          x2="7.143"
          transform="translate(91.881 18.456)"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default SvgNoteEmpty;
