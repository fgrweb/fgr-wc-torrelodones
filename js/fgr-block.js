const VARIATION_NAME = "bloque-coches";

wp.blocks.registerBlockVariation("core/query", [
  {
    name: VARIATION_NAME,
    title: "Grid Coches",
    description: "Listado de Coches",
    icon: "car",
    isActive: ({ namespace, query }) => {
      return ( namespace === VARIATION_NAME&& query.postType === "coches");
    },
    
    attributes: {
      namespace: VARIATION_NAME,
      query: {
        postType: "coches",
      },
      align: "full",
      displayLayout: {
        type: "flex",
        columns: 3,
      },
    },
    allowedControls: ["order"],
    scope: ["inserter"],
    innerBlocks: [
      [
        "core/post-template",
        {},
        [["core/post-title"], ["core/post-featured-image"]],
      ],
          ["core/query-pagination"],
          ["core/query-no-results"],
      
    ],
  },
]);
