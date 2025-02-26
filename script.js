let vaisiai = ['Bananai', 'Kriaušės', 'Obuoliai', , 'Mandarinai'];

// ciklas atspausdins netuščius masyvo narius - vaisių pavadinimus:
for (let i = 0; i < vaisiai.length; i++) {
   if (vaisiai[i] !== undefined) {
    console.log(vaisiai[i]);
   }
}