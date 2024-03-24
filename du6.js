const Just_Food = (pocet_lidi) => {
  const zprava = `catering od Just Food pro ${pocet_lidi} je za 150 000 Kč `
  return zprava  
}

const Your_Mama = (pocet_lidi) => {
  const zprava = `catering od Your Mama pro ${pocet_lidi} je za 150 000 Kč `
  return zprava
}

const Flavour_Haven = (pocet_lidi) => {
  const zprava = `catering od Flavour Haven pro ${pocet_lidi} je za 300 000 Kč `
  return zprava
}

const createEvent = (nazev_udalost, pocet_lidi, spolecnost) => {
  document.body.innerHTML = `Udalost ${nazev_udalost} s ${spolecnost}`
  }

const pocet_lidi = 100
const udalost = createEvent("Inaugurace prezidenta", pocet_lidi,Flavour_Haven(pocet_lidi))
