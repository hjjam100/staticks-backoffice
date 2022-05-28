const DB = {
  test: [...Array(10).keys()].map(i => ({
    id: i,
    name: `name${i}`,
  })),
}

module.exports = () => DB
