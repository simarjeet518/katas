const checkAir = function (samples, threshold) {
   let dirtySampleCount = 0;
    let totalSamples =0;
   for (let i = 0; i < samples.length ; i++) {
     if(samples[i] === 'dirty') {
       dirtySampleCount++;
     }
     totalSamples++;
   }
   let percentageOfDirtySamples = (dirtySampleCount/totalSamples) ;
   if(percentageOfDirtySamples > threshold) {
     return 'polluted';
   } else {
     return 'clean';
   }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))