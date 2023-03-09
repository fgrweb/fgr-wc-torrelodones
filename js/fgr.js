wp.blocks.registerBlockVariation(
	'core/paragraph',
	[
		{
			name: 'derecha',
			title: 'Párrafo derecha',
			description: 'Párrafo con alineación a la derecha',
			attributes: {
				placeholder: 'Esto es un bloque de párrafo alineado a la derecha',
				align: 'right',
				className: 'parrafo-derecha',
				fontSize: 'large',
			},
			isDefault: true,
		},
	]
);

wp.blocks.registerBlockVariation(
	'core/group',
	{
		name: 'full-width-group',
		title: 'Grupo ancho completo',
		attributes: {
			align: 'full'
		}
	}
);

wp.blocks.registerBlockVariation(
	'core/columns', {
	  name: 'equipo',
	  title: 'Equipo',
	  innerBlocks: [
		['core/column',{},[
			['core/image', {url: 'https://via.placeholder.com/150'}],
			['core/heading', {placeholder: 'Nombre'}],
			['core/paragraph', {placeholder: 'Cargo'}],
		]],
		['core/column',{},[
			['core/image', {url: 'https://via.placeholder.com/150'}],
			['core/heading', {placeholder: 'Nombre'}],
			['core/paragraph', {placeholder: 'Cargo'}],
		]],
		['core/column',{},[
			['core/image', {url: 'https://via.placeholder.com/150'}],
			['core/heading', {placeholder: 'Nombre'}],
			['core/paragraph', {placeholder: 'Cargo'}],
		]],
	  ],
	}
);