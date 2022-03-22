// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '1555 + 2000 = ' + (1555 + 2000)
  document.getElementById('subtract-math').innerHTML = '10 - 8 =  ' + (10 - 8)
  document.getElementById('multiply-math').innerHTML = '100 + 8 * 6 = ' + (100 + 8 * 6)
  document.getElementById('divide-math').innerHTML = '(8 / 4) + 7 = ' + ((8 / 4) + 7)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(81) = ' + Math.sqrt(81)
}

