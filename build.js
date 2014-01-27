({
    baseUrl: ".",
    paths: {
        jquery: "some/other/jquery"
    },
    optimize: "none",
    packages: ['module/b', 'module/a', 'lib-core', 'module/c'],
    dir: "built",
    modules: [
        {name:"module/a", exclude: ["lib-core"]},
        {name:"module/b", exclude: ["lib-core"]},
        {name:"module/c", exclude: ["lib-core"]},
        {name:"lib-core"}
    ]
})

