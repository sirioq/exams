/* =========================================================================
   NSAA 2019 SECTION 1 -- ANALYSIS METADATA
   Lean question data (no diagrams) for the class analysis tool.
   Registers itself into the shared TESTS registry.
   ========================================================================= */

(function(){
const QUESTIONS_META = [
{n:1, part:"A", text:`Evaluate</p><p style="text-align:center">$(\\sqrt{7}+\\sqrt{3})^2 - (\\sqrt{7}-\\sqrt{3})^2$`,
 options:[["A","0"],["B","$2\\sqrt{7}$"],["C","$4\\sqrt{7}$"],["D","$2\\sqrt{21}$"],["E","10"],["F","$4\\sqrt{21}$"],["G","20"]], answer:"F"},

{n:2, part:"A", text:`Find the complete set of values of $x$ which satisfy the inequality</p><p style="text-align:center">$\\dfrac{1}{2}(3x-2) - \\dfrac{2}{3}(x-4) < x$`,
 options:[["A","$x < -22$"],["B","$x > -22$"],["C","$x < -2.5$"],["D","$x > -2.5$"],["E","$x < 1.2$"],["F","$x > 1.2$"],["G","$x < 10$"],["H","$x > 10$"]], answer:"H"},

{n:3, part:"A", text:`The equation gives $y$ in terms of $x$:</p><p style="text-align:center">$y = 3 - 4\\left(1-\\dfrac{x}{2}\\right)^2$</p><p>Which one of the following is a rearrangement for $x$ in terms of $y$?`,
 options:[["A","$x=-2\\pm 2\\sqrt{\\dfrac{3-y}{4}}$"],["B","$x=-2\\pm 2\\sqrt{\\dfrac{4-y}{3}}$"],["C","$x=1\\pm\\sqrt{\\dfrac{3-y}{4}}$"],["D","$x=1\\pm 2\\sqrt{\\dfrac{3-y}{4}}$"],["E","$x=2\\pm 2\\sqrt{\\dfrac{3-y}{4}}$"],["F","$x=2\\pm 2\\sqrt{\\dfrac{4-y}{3}}$"],["G","$x=2\\pm 2\\sqrt{\\dfrac{3+y}{4}}$"]], answer:"E"},

{n:4, part:"A", text:`The resistance to the motion of a car is directly proportional to the square of the speed of the car.</p><p>The car increases its speed by 20%.</p><p>What is the percentage increase in the resistance to the motion of the car?`,
 options:[["A","20%"],["B","24%"],["C","44%"],["D","120%"],["E","224%"],["F","240%"],["G","400%"]], answer:"C"},

{n:5, part:"A", text:`The equation of a curve is $y = px^2 + qx$ where $p$ and $q$ are constants.</p><p>The curve passes through the points (2, 6) and (4, \u20134).</p><p>What is the value of $q - p$?`,
 options:[["A","1"],["B","2"],["C","5"],["D","6"],["E","9"],["F","16"]], answer:"E"},

{n:6, part:"A", text:`Which of the following is a simplification of</p><p style="text-align:center">$4 - \\dfrac{x(3x+1)}{x^2(3x^2-2x-1)}$`,
 options:[["A","$\\dfrac{12x^3-8x^2-7x-1}{x(3x-1)(x-1)}$"],["B","$\\dfrac{4x^2+4x-1}{x(x+1)}$"],["C","$\\dfrac{4x^2+4x+1}{x(x+1)}$"],["D","$\\dfrac{4x^2-4x-1}{x(x-1)}$"],["E","$\\dfrac{4x^2-4x+1}{x(x-1)}$"],["F","$\\dfrac{12x^3-8x^2-x+1}{x(3x-1)(x-1)}$"]], answer:"D"},

{n:7, part:"A", text:`The ball for a garden game is a solid sphere of volume 192 cm$^3$.</p><p>For the children's version of the game the ball is a solid sphere made of the same material, but the radius is reduced by 25%.</p><p>What is the volume, in cm$^3$, of the children's ball?`,
 options:[["A","48"],["B","81"],["C","96"],["D","108"],["E","144"]], answer:"B"},

{n:8, part:"A", text:`The diagram shows a right-angled triangle, with sides of length $x+4$, $2x+2$ and $3x$, all in cm.`,
 diagram:"q8",
 after:`<p>What is the area, in cm$^2$, of the triangle?`,
 options:[["A","10"],["B","12"],["C","28"],["D","36"],["E","40"],["F","54"],["G","70"]], answer:"F"},

{n:9, part:"A", text:`Given that</p><p style="text-align:center">$9^{2x-1}\\times\\dfrac{1}{27^x} = 81^x$</p><p>what is the value of $x$?`,
 options:[["A","$-\\dfrac{2}{3}$"],["B","$-\\dfrac{2}{5}$"],["C","$-\\dfrac{1}{3}$"],["D","$-\\dfrac{1}{4}$"],["E","$-\\dfrac{1}{5}$"]], answer:"A"},

{n:10, part:"A", text:`$PR$ and $QS$ are the diagonals of a rhombus $PQRS$.</p><p>$PR = (3x+2)$ cm</p><p>$QS = (8-2x)$ cm</p><p>The area of $PQRS$ is 11 cm$^2$.</p><p>What is the difference, in cm, between the two possible lengths of $PR$?`,
 options:[["A","$2\\dfrac{2}{3}$"],["B","$4\\dfrac{1}{2}$"],["C","$5\\dfrac{1}{3}$"],["D","8"],["E","14"]], answer:"D"},

{n:11, part:"A", text:`The diagram shows two congruent right-angled triangles $PQR$ and $TSR$ with right angles at $Q$ and $S$, respectively.`,
 diagram:"q11",
 after:`<p>$PQ = TS = 3$ cm</p><p>$QR = SR = 4$ cm</p><p>$PRT$ is a straight line.</p><p>What is the length, in cm, of $QS$?`,
 options:[["A","4"],["B","$3\\sqrt{2}$"],["C","5.2"],["D","$4\\sqrt{2}$"],["E","6.4"],["F","8.2"],["G","10"]], answer:"E"},

{n:12, part:"A", text:`The total of three numbers $p$, $q$ and $r$ is 375</p><p>The ratio $p:q$ is $5:7$</p><p>The ratio $q:r$ is $4:11$</p><p>What is the value of $p+r$?`,
 options:[["A","16"],["B","60"],["C","97"],["D","125"],["E","144"],["F","231"],["G","291"],["H","315"]], answer:"G"},

{n:13, part:"A", text:`The straight line $P$ has equation $3y-2x=12$ and intercepts the $y$-axis at the point (0, $p$).</p><p>The straight line $Q$ is parallel to $P$, passes through the point (6, \u20131) and intercepts the $y$-axis at the point (0, $q$).</p><p>What is the value of $p-q$?`,
 options:[["A","\u20139"],["B","\u20137"],["C","1"],["D","9"],["E","14"],["F","17"]], answer:"D"},

{n:14, part:"A", text:`The vertices of a rectangle have coordinates:</p><p style="text-align:center">$P(4,5)$ &nbsp;&nbsp; $Q(4,8)$ &nbsp;&nbsp; $R(10,8)$ &nbsp;&nbsp; $S(10,5)$</p><p>$PQRS$ is transformed by a clockwise rotation of 90\u00b0 about $P$ followed by a reflection in the $x$-axis.</p><p>What are the coordinates of the final position of $R$?`,
 options:[["A","(\u20138, \u201310)"],["B","(\u20137, \u20131)"],["C","(\u20134, 1)"],["D","(\u20131, 11)"],["E","(1, \u201311)"],["F","(4, \u20131)"],["G","(7, 1)"],["H","(8, 10)"]], answer:"G"},

{n:15, part:"A", text:`Box A contains exactly 10 balls, of which 6 are red and 4 are blue.</p><p>Box B contains exactly 15 balls, of which 3 are red and 12 are blue.</p><p>All the balls are identical in every respect, apart from colour.</p><p>One of the two boxes is chosen at random by tossing two fair coins, as follows:</p><p style="text-align:center">"If <strong>both</strong> coins show heads, box A is selected. Otherwise box B is selected."</p><p>One ball is then randomly taken from the selected box.</p><p>What is the probability that a red ball is taken?`,
 options:[["A","$\\dfrac{9}{400}$"],["B","$\\dfrac{3}{25}$"],["C","$\\dfrac{3}{10}$"],["D","$\\dfrac{2}{5}$"],["E","$\\dfrac{1}{2}$"],["F","$\\dfrac{4}{5}$"],["G","$\\dfrac{323}{400}$"]], answer:"C"},

{n:16, part:"A", text:`Three towns Ryeton, Tonbridge and Uphampton are represented on the diagram by the points labelled R, T and U, respectively.`,
 diagram:"q16",
 after:`<p>The distance from Tonbridge to Ryeton is the same as the distance from Tonbridge to Uphampton.</p><p>Uphampton is south of Tonbridge.</p><p>Ryeton is on a bearing of 210\u00b0 from Tonbridge.</p><p>What is the bearing of Uphampton from Ryeton?`,
 options:[["A","030\u00b0"],["B","075\u00b0"],["C","105\u00b0"],["D","150\u00b0"],["E","300\u00b0"],["F","345\u00b0"]], answer:"C"},

{n:17, part:"A", text:`A list of five numbers has mean $x$, median $y$ and range $z$.</p><p>A sixth number is added to the list. This sixth number is greater than $x$.</p><p>Which of the following statements <strong>must</strong> be true?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The median of the six numbers cannot be one of the numbers in the list.</p><p style="margin-left:20px;">2&nbsp;&nbsp; The mean of the six numbers is greater than $x$.</p><p style="margin-left:20px;">3&nbsp;&nbsp; The range of the six numbers is greater than $z$.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"C"},

{n:18, part:"A", text:`A solid pyramid has a square base of side length 12 cm and a vertical height of $h$ cm.`,
 diagram:"q18",
 after:`<p>The volume of the pyramid, in cm$^3$, is equal to the total surface area of the pyramid, in cm$^2$.</p><p>What is the value of $h$?</p><p style="font-size:13.5px; color:var(--ink-soft);">(volume of pyramid = $\\dfrac{1}{3}\\times$ area of base $\\times$ vertical height)</p>`,
 options:[["A","$\\dfrac{72}{35}$"],["B","$2\\sqrt{3}$"],["C","6"],["D","$\\dfrac{144}{23}$"],["E","8"],["F","$2\\sqrt{21}$"]], answer:"E"},

{n:19, part:"B", text:`A transverse wave is travelling through a medium. The distance between successive wave peaks is 8.4 cm and the total distance travelled by a particle during one complete oscillation is 5.6 cm.</p><p>What is the amplitude and wavelength of the wave?`,
 options:[["A","amplitude 1.4 cm<br>wavelength 4.2 cm"],["B","amplitude 1.4 cm<br>wavelength 8.4 cm"],["C","amplitude 2.1 cm<br>wavelength 2.8 cm"],["D","amplitude 2.1 cm<br>wavelength 5.6 cm"],["E","amplitude 2.8 cm<br>wavelength 4.2 cm"],["F","amplitude 2.8 cm<br>wavelength 8.4 cm"],["G","amplitude 4.2 cm<br>wavelength 2.8 cm"],["H","amplitude 4.2 cm<br>wavelength 5.6 cm"]], answer:"B"},

{n:20, part:"B", text:`A builder lifts bags of cement onto the back of a lorry. Each bag has a mass of 25 kg. It takes the builder 2.5 minutes to load ten bags.`,
 diagram:"q20",
 after:`<p>What are the total work done, $T$, on the ten bags and the average power required for $T$?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9)`,
 options:[["A","total work 375 J<br>average power 2.5 W"],["B","total work 375 J<br>average power 150 W"],["C","total work 625 J<br>average power 4.2 W"],["D","total work 625 J<br>average power 250 W"],["E","total work 3750 J<br>average power 25 W"],["F","total work 3750 J<br>average power 1500 W"],["G","total work 6250 J<br>average power 42 W"],["H","total work 6250 J<br>average power 2500 W"]], answer:"E"},

{n:21, part:"B", text:`The current\u2013voltage graph for a diode is shown.`,
 diagram:"q21",
 after:`<p>The diode is connected in series with a resistor and a 6.0 V battery. The current in the circuit is 8.0 mA.</p><p>What is the resistance of the resistor?</p><p style="font-size:13.5px; color:var(--ink-soft);">(Assume that the battery has negligible resistance.)`,
 options:[["A","0.15 \u03a9"],["B","0.60 \u03a9"],["C","0.75 \u03a9"],["D","4.8 \u03a9"],["E","150 \u03a9"],["F","600 \u03a9"],["G","750 \u03a9"]], answer:"F"},

{n:22, part:"B", text:`Two electromagnetic waves P and Q travel in a vacuum and the ratio of their wavelengths is:</p><p style="text-align:center">$\\dfrac{\\text{wavelength of P}}{\\text{wavelength of Q}} = 1.0\\times10^8$</p><p>Which row in the table shows the ratio of their speeds, the ratio of their frequencies, and identifies the possible natures of P and Q?`,
 options:[["A","speed ratio 1.0<br>frequency ratio 1.0\u00d710\u207b\u2078<br>P: microwave, Q: X-ray"],["B","speed ratio 1.0<br>frequency ratio 1.0\u00d710\u207b\u2078<br>P: microwave, Q: radio wave"],["C","speed ratio 1.0<br>frequency ratio 1.0\u00d710\u2078<br>P: infrared, Q: ultraviolet"],["D","speed ratio 1.0<br>frequency ratio 1.0\u00d710\u2078<br>P: visible light, Q: infrared"],["E","speed ratio 1.0\u00d710\u2078<br>frequency ratio 1.0<br>P: gamma, Q: X-ray"],["F","speed ratio 1.0\u00d710\u2078<br>frequency ratio 1.0<br>P: gamma, Q: infrared"],["G","speed ratio 1.0\u00d710\u2078<br>frequency ratio 1.0\u00d710\u00b9\u2076<br>P: infrared, Q: radio wave"],["H","speed ratio 1.0\u00d710\u2078<br>frequency ratio 1.0\u00d710\u00b9\u2076<br>P: visible light, Q: ultraviolet"]], answer:"A"},

{n:23, part:"B", text:`A block of aluminium of mass 0.80 kg, initially at a temperature of \u221221\u00b0C, is supplied with 54 000 J of thermal energy.</p><p>The specific heat capacity of aluminium is 900 J kg\u207b\u00b9\u00b0C\u207b\u00b9.</p><p>What is the final temperature of the block?</p><p style="font-size:13.5px; color:var(--ink-soft);">(Assume that there is no other transfer of energy between the block and the surroundings.)`,
 options:[["A","27\u00b0C"],["B","39\u00b0C"],["C","54\u00b0C"],["D","75\u00b0C"],["E","96\u00b0C"]], answer:"C"},

{n:24, part:"B", text:`A light spring is used to support a range of loads.</p><p>The spring obeys Hooke's law. The system is in equilibrium.</p><p>Which of the following statements is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The tension in the spring is directly proportional to the length of the spring.</p><p style="margin-left:20px;">2&nbsp;&nbsp; The tension in the spring and the weight of the load it supports are a Newton's third law pair of forces.</p><p style="margin-left:20px;">3&nbsp;&nbsp; When the extension of the spring is doubled, the energy stored in the spring increases by a factor of four.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"D"},

{n:25, part:"B", text:`A water-tight cylinder with a thin, freely moving piston contains 2.0\u00d710\u207b\u00b3 m$^3$ of trapped air at atmospheric pressure of 1.0\u00d710\u2075 Pa.</p><p>When the cylinder is submerged in water of constant density 1000 kg m\u207b\u00b3, the volume of air in the cylinder decreases to 4.0\u00d710\u207b\u2074 m$^3$.</p><p>The piston is at a depth $h$ below the surface of the water and the water surface is open to the atmosphere.</p><p>What is the depth $h$?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9; assume that the temperature of the air remains constant and that air is an ideal gas)`,
 options:[["A","40 m"],["B","50 m"],["C","60 m"],["D","400 m"],["E","500 m"],["F","600 m"]], answer:"A"},

{n:26, part:"B", text:`The secondary coil of an ideal, 100% efficient transformer is connected to a resistor by cables of total resistance 1500 \u03a9. The current in the primary coil is 4.0 A. There are 240 turns in the primary coil and 4800 turns in the secondary coil.</p><p>What is the power produced as heat in the cables?`,
 options:[["A","60 W"],["B","300 W"],["C","6000 W"],["D","24 000 W"],["E","120 000 W"],["F","9 600 000 W"]], answer:"A"},

{n:27, part:"B", text:`Heat is supplied to an initially solid substance at a rate of 60 W.</p><p>The graph shows the variation of the temperature of the substance with time.`,
 diagram:"q27",
 after:`<p>What is the mass of the substance?</p><p style="font-size:13.5px; color:var(--ink-soft);">(specific latent heat of fusion of substance = 100 J g\u207b\u00b9; assume that there is no heat transferred to the surroundings)`,
 options:[["A","0.013 g"],["B","0.60 g"],["C","3.0 g"],["D","9.0 g"],["E","27 g"],["F","36 g"]], answer:"E"},

{n:28, part:"B", text:`Two tanks of water are connected by a solid cylindrical copper bar of length $l$ and diameter $d$. The bar is insulated.`,
 diagram:"q28",
 after:`<p>One tank contains water at 90\u00b0C and the other tank contains water at temperature $\\theta$.</p><p>For which of the following conditions is thermal energy conducted along the bar at the lowest rate?`,
 options:[["A","l = 0.40 m, d = 4.0 cm, \u03b8 = 20\u00b0C"],["B","l = 0.40 m, d = 4.0 cm, \u03b8 = 40\u00b0C"],["C","l = 0.40 m, d = 8.0 cm, \u03b8 = 20\u00b0C"],["D","l = 0.40 m, d = 8.0 cm, \u03b8 = 40\u00b0C"],["E","l = 0.80 m, d = 4.0 cm, \u03b8 = 20\u00b0C"],["F","l = 0.80 m, d = 4.0 cm, \u03b8 = 40\u00b0C"],["G","l = 0.80 m, d = 8.0 cm, \u03b8 = 20\u00b0C"],["H","l = 0.80 m, d = 8.0 cm, \u03b8 = 40\u00b0C"]], answer:"F"},

{n:29, part:"B", text:`A U-shaped permanent magnet rests on a balance.</p><p>A straight, horizontal wire of length 5.0 cm is fixed in position between the poles of the magnet, perpendicular to the horizontal magnetic field.</p><p>There is a current of 2.0 A in the wire and the reading on the balance is 202 g.</p><p>When the direction of the 2.0 A current is reversed, the reading changes to 198 g.</p><p>What is the strength of the magnetic field?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9)`,
 options:[["A","0.020 T"],["B","0.040 T"],["C","0.20 T"],["D","0.40 T"],["E","200 T"],["F","400 T"]], answer:"C"},

{n:30, part:"B", text:`The radioactive isotope X becomes the stable isotope Y after a succession of decays involving only the emission of alpha and beta (\u03b2\u207b) particles.</p><p>During the decay of one nucleus from X to Y, a total of seven particles are emitted. It is known that more of these particles are alpha particles than beta particles.</p><p>The atomic number of X is $Z$ and the mass number of X is $A$.</p><p>Which row in the table could give the atomic number and the mass number of Y?`,
 options:[["A","atomic number Z\u20132, mass number A\u201312"],["B","atomic number Z\u20135, mass number A\u20138"],["C","atomic number Z\u20138, mass number A\u201320"],["D","atomic number Z\u201310, mass number A\u201324"],["E","atomic number Z\u201311, mass number A\u201316"]], answer:"C"},

{n:31, part:"B", text:`The kinetic energy of an object of mass 4.0 kg, travelling in a straight line, increases from 32 J to 200 J in 3.0 seconds due to a constant resultant force.</p><p>What is the value of this resultant force?`,
 options:[["A","2.0 N"],["B","4.0 N"],["C","8.0 N"],["D","24 N"],["E","28 N"],["F","56 N"]], answer:"C"},

{n:32, part:"B", text:`In the following circuit, all five resistors have the same resistance.`,
 diagram:"q32",
 after:`<p>The reading on the voltmeter is 1.0 V.</p><p>What is the voltage across the battery?`,
 options:[["A","4.0 V"],["B","5.0 V"],["C","6.0 V"],["D","7.0 V"],["E","8.0 V"],["F","9.0 V"],["G","10 V"]], answer:"E"},

{n:33, part:"B", text:`Two hovercraft travel horizontally in opposite directions along the same straight line. The mass and speed of each hovercraft are shown in the diagram. Horizontal resistive forces acting on each hovercraft are negligible.`,
 diagram:"q33",
 after:`<p>The hovercraft collide and stick together. The collision lasts for 0.10 s.</p><p>Just before the collision, what is the total kinetic energy and the magnitude of the total momentum of the two hovercraft, and what is the magnitude of the average force acting horizontally on each hovercraft during the collision?`,
 options:[["A","KE 100 kJ, momentum 0, force 2.0 kN"],["B","KE 100 kJ, momentum 0, force 200 kN"],["C","KE 100 kJ, momentum 4.0\u00d710\u2074 kg m s\u207b\u00b9, force 2.0 kN"],["D","KE 100 kJ, momentum 4.0\u00d710\u2074 kg m s\u207b\u00b9, force 200 kN"],["E","KE 300 kJ, momentum 0, force 2.0 kN"],["F","KE 300 kJ, momentum 0, force 200 kN"],["G","KE 300 kJ, momentum 4.0\u00d710\u2074 kg m s\u207b\u00b9, force 2.0 kN"],["H","KE 300 kJ, momentum 4.0\u00d710\u2074 kg m s\u207b\u00b9, force 200 kN"]], answer:"F"},

{n:34, part:"B", text:`The graph shows how a car's velocity changes in 85 seconds.`,
 diagram:"q34",
 after:`<p>What proportion of the total distance is travelled at constant velocity?`,
 options:[["A","$\\dfrac{5}{29}$"],["B","$\\dfrac{5}{17}$"],["C","$\\dfrac{12}{17}$"],["D","$\\dfrac{24}{29}$"],["E","$\\dfrac{8}{9}$"],["F","$\\dfrac{16}{17}$"]], answer:"D"},

{n:35, part:"B", text:`A block is designed with a cylindrical channel to accommodate a hot-water pipe. The block is 100 cm long and it has a square cross-section of side 22.0 cm with a cylindrical hole in the middle, as shown in the diagram:`,
 diagram:"q35",
 after:`<p>The diameter of the cylindrical hole is 14.0 cm and the density of the material from which the block is made is 0.100 g cm\u207b\u00b3.</p><p>What is the mass of the block?</p><p style="font-size:13.5px; color:var(--ink-soft);">(take \u03c0 to be $\\dfrac{22}{7}$)`,
 options:[["A","1.32 kg"],["B","3.30 kg"],["C","13.2 kg"],["D","33.0 kg"],["E","132 kg"],["F","330 kg"],["G","1320 kg"],["H","3300 kg"]], answer:"B"},

{n:36, part:"B", text:`A sample initially contains equal numbers of atoms of a radioactive isotope X and a stable isotope Y.</p><p>Isotope X has a half-life of 3 years and decays in a single stage to the stable isotope Y.</p><p>What is the ratio</p><p style="text-align:center">number of atoms of X : number of atoms of Y</p><p>in the sample 6 years later?`,
 options:[["A","The sample contains only isotope Y."],["B","1 : 7"],["C","1 : 4"],["D","1 : 3"],["E","7 : 4"]], answer:"B"},

{n:37, part:"C", text:`HBr reacts with pent-2-ene in an addition reaction.</p><p>Which of the following products is/are formed in the reaction?</p><p style="margin-left:20px;">1&nbsp;&nbsp; CH<sub>3</sub>CHBrCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></p><p style="margin-left:20px;">2&nbsp;&nbsp; CH<sub>2</sub>BrCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></p><p style="margin-left:20px;">3&nbsp;&nbsp; CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>2</sub>CH<sub>3</sub>`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"F"},

{n:38, part:"C", text:`In which of the following solids does the bonding consist of single covalent bonds <strong>only</strong>?</p><p style="margin-left:20px;">1&nbsp;&nbsp; graphite</p><p style="margin-left:20px;">2&nbsp;&nbsp; SiO<sub>2</sub></p><p style="margin-left:20px;">3&nbsp;&nbsp; Al<sub>2</sub>O<sub>3</sub>`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"C"},

{n:39, part:"C", text:`Four samples, labelled W, X, Y and Z, were investigated using paper chromatography with a solvent that caused any mixtures present to be fully separated. The results are shown in the chromatogram.`,
 diagram:"q39",
 after:`<p>What is the $R_f$ value of the spot with the strongest attraction to the mobile phase relative to the stationary phase <strong>and</strong> that is from a sample containing only one substance?`,
 options:[["A","0.50"],["B","0.60"],["C","0.67"],["D","0.75"],["E","0.80"],["F","0.90"]], answer:"E"},

{n:40, part:"C", text:`A mass spectrometer is a device that can measure the mass of isotopes. It shows this data as a spectrum, giving both the relative mass and the percentage abundance of each isotope.</p><p>The charts indicate the relative mass and percentage abundance for lithium atoms, carbon atoms and oxygen atoms found in a sample taken from a nuclear reactor.`,
 diagram:"q40",
 after:`<p>Using this data, what is the largest possible relative molar mass of lithium carbonate?`,
 options:[["A","35"],["B","38"],["C","45"],["D","67"],["E","74"],["F","75"],["G","81"]], answer:"G"},

{n:41, part:"C", text:`The following information about metals labelled P, Q, R and S is given.</p><p style="margin-left:20px;">\u2022 Metals P and S can be extracted by electrolysis, but not by reaction with carbon.</p><p style="margin-left:20px;">\u2022 Metals Q and R can be extracted by reaction with carbon.</p><p style="margin-left:20px;">\u2022 Metal S forms positive ions more readily than metal P.</p><p style="margin-left:20px;">\u2022 Metal R reacts with the oxide of metal Q.</p><p>What is the order of reactivity of these four metals, starting with the most reactive?`,
 options:[["A","P, S, Q, R"],["B","P, S, R, Q"],["C","Q, R, P, S"],["D","Q, R, S, P"],["E","R, Q, P, S"],["F","R, Q, S, P"],["G","S, P, Q, R"],["H","S, P, R, Q"]], answer:"H"},

{n:42, part:"C", text:`A simple ion of an element with atomic number $x$ has a mass number of $(2x+2)$.</p><p>The ion has a charge of \u20132.</p><p>How many protons, neutrons and electrons are present in this ion?`,
 options:[["A","protons x\u20132, neutrons x+4, electrons x\u20132"],["B","protons x\u20132, neutrons x+4, electrons x"],["C","protons x\u20132, neutrons x+4, electrons x+2"],["D","protons x, neutrons x+2, electrons x\u20132"],["E","protons x, neutrons x+2, electrons x"],["F","protons x, neutrons x+2, electrons x+2"]], answer:"F"},

{n:43, part:"C", text:`A 116 g sample of an oxide of iron contains 84 g of iron.</p><p>Which of the following is the empirical formula of this oxide of iron?</p><p style="font-size:13.5px; color:var(--ink-soft);">($A_r$ values: O = 16; Fe = 56)`,
 options:[["A","FeO"],["B","Fe<sub>2</sub>O<sub>2</sub>"],["C","Fe<sub>3</sub>O<sub>2</sub>"],["D","Fe<sub>2</sub>O<sub>3</sub>"],["E","Fe<sub>3</sub>O<sub>4</sub>"]], answer:"E"},

{n:44, part:"C", text:`Which of the following chemical equations represent(s) a redox reaction?</p><p style="margin-left:20px;">1&nbsp;&nbsp; 2Cu<sup>2+</sup> + 4I<sup>\u2013</sup> \u2192 2CuI + I<sub>2</sub></p><p style="margin-left:20px;">2&nbsp;&nbsp; Al<sup>3+</sup> + 3e<sup>\u2013</sup> \u2192 Al</p><p style="margin-left:20px;">3&nbsp;&nbsp; 2Ag<sup>+</sup> + 2OH<sup>\u2013</sup> \u2192 Ag<sub>2</sub>O + H<sub>2</sub>O`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"B"},

{n:45, part:"C", text:`X is an anhydrous salt of iron containing one type of cation and one type of anion.</p><p>An aqueous solution of X gives a white precipitate when aqueous barium chloride is added in the presence of hydrochloric acid.</p><p>On adding aqueous sodium hydroxide to an aqueous solution of X, a brown precipitate formed immediately.</p><p>The relative atomic mass of iron is 56, and its atomic number is 26.</p><p>What is the relative molar mass of X?</p><p style="font-size:13.5px; color:var(--ink-soft);">($A_r$ values: C = 12; N = 14; O = 16; S = 32; Cl = 35.5; Br = 80)`,
 options:[["A","127"],["B","152"],["C","162.5"],["D","208"],["E","264"],["F","272"],["G","360"],["H","400"]], answer:"H"},

{n:46, part:"C", text:`In the electrolysis of dilute sulfuric acid, hydrogen gas is formed at the negative electrode (cathode) and oxygen gas is formed at the positive electrode (anode).</p><p>If 100 g of hydrogen gas is formed in the electrolysis of dilute sulfuric acid, what mass of oxygen gas is also formed?</p><p style="font-size:13.5px; color:var(--ink-soft);">($A_r$ values: H = 1; O = 16)`,
 options:[["A","50 g"],["B","100 g"],["C","200 g"],["D","800 g"],["E","1600 g"]], answer:"D"},

{n:47, part:"C", text:`0.005 mol of a chloride of element X was dissolved in water and then reacted with excess silver nitrate solution to form a precipitate of silver chloride, AgCl. This precipitate is the only product of this reaction that contains chlorine.</p><p>After filtering, washing and drying, the mass of the precipitate was recorded to be 1.435 g.</p><p>Which of the following could be the formula of the chloride of X?</p><p style="font-size:13.5px; color:var(--ink-soft);">($M_r$ value: AgCl = 143.5)`,
 options:[["A","X<sub>5</sub>Cl"],["B","X<sub>2</sub>Cl"],["C","XCl"],["D","XCl<sub>2</sub>"],["E","XCl<sub>5</sub>"]], answer:"D"},

{n:48, part:"C", text:`A chemical equation that represents the reaction of phosphorus with concentrated nitric acid is:</p><p style="text-align:center">P<sub>4</sub> + $w$HNO<sub>3</sub> + H<sub>2</sub>O \u2192 $x$H<sub>3</sub>PO<sub>4</sub> + $y$NO + $z$NO<sub>2</sub></p><p>What is the value of the sum $w+x+y+z$?`,
 options:[["A","24"],["B","28"],["C","30"],["D","32"],["E","36"]], answer:"A"},

{n:49, part:"C", text:`A 2.40 g lump of magnesium was added to 500 cm$^3$ of a 2.00 mol dm$^{-3}$ solution of HCl in a conical flask that was on an electronic balance. The neck of the flask was plugged with cotton wool, and the decrease in mass of the flask and its contents was recorded at regular intervals.</p><p>The mass of the hydrogen released (equal to the mass loss recorded) was plotted against time. The result is line 1 on the graph.`,
 diagram:"q49",
 after:`<p>Which of the following experiments performed under the same conditions would give line 2?</p><p style="font-size:13.5px; color:var(--ink-soft);">($A_r$ value: Mg = 24.0)`,
 options:[["A","a 2.40 g lump of magnesium added to 500 cm\u00b3 of 2.00 mol dm\u207b\u00b3 H\u2082SO\u2084"],["B","2.40 g of magnesium powder added to 500 cm\u00b3 of 2.00 mol dm\u207b\u00b3 HCl"],["C","a 2.40 g lump of magnesium added to 1000 cm\u00b3 of 2.00 mol dm\u207b\u00b3 HCl"],["D","a 4.80 g lump of magnesium added to 500 cm\u00b3 of 2.00 mol dm\u207b\u00b3 HCl"],["E","4.80 g of magnesium powder added to 500 cm\u00b3 of 2.00 mol dm\u207b\u00b3 HCl"]], answer:"D"},

{n:50, part:"C", text:`A technician needs to separate three liquids (X, Y and Z) which have been accidentally mixed together. None of the liquids react with each other.</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">liquid</td><td style="border:1px solid var(--line); padding:6px 12px;">X</td><td style="border:1px solid var(--line); padding:6px 12px;">Y</td><td style="border:1px solid var(--line); padding:6px 12px;">Z</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">boiling point / \u00b0C</td><td style="border:1px solid var(--line); padding:6px 12px;">65</td><td style="border:1px solid var(--line); padding:6px 12px;">51</td><td style="border:1px solid var(--line); padding:6px 12px;">100</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">density / g cm\u207b\u00b3</td><td style="border:1px solid var(--line); padding:6px 12px;">0.79</td><td style="border:1px solid var(--line); padding:6px 12px;">0.68</td><td style="border:1px solid var(--line); padding:6px 12px;">1.00</td></tr></table><p>X and Z are miscible, but Y is immiscible with both X and Z.</p><p>The technician uses a separating funnel to separate the upper and lower layers of the mixture.</p><p>What should the technician do next to maximise separation of the three liquids?`,
 options:[["A","distil the lower layer at 51\u00b0C"],["B","distil the lower layer at 65\u00b0C"],["C","distil the lower layer at 100\u00b0C"],["D","distil the upper layer at 51\u00b0C"],["E","distil the upper layer at 65\u00b0C"],["F","distil the upper layer at 100\u00b0C"]], answer:"B"},

{n:51, part:"C", text:`In each of the following procedures an excess of the metal is added to 1.0 dm$^3$ of a 1.0 mol dm$^{-3}$ solution of the acid:</p><p style="margin-left:20px;">copper added to sulfuric acid</p><p style="margin-left:20px;">iron added to hydrochloric acid</p><p style="margin-left:20px;">magnesium added to sulfuric acid</p><p style="margin-left:20px;">zinc added to hydrochloric acid</p><p>Which row in the following table identifies combinations of metal and acid that will react and produce the largest, and the smallest, theoretical mass of anhydrous salt?</p><p style="font-size:13.5px; color:var(--ink-soft);">($M_r$ values: CuSO\u2084 = 160; FeCl\u2082 = 127; MgSO\u2084 = 120; ZnCl\u2082 = 136)`,
 options:[["A","largest: Cu and H\u2082SO\u2084 \u2014 smallest: Fe and HCl"],["B","largest: Cu and H\u2082SO\u2084 \u2014 smallest: Mg and H\u2082SO\u2084"],["C","largest: Fe and HCl \u2014 smallest: Zn and HCl"],["D","largest: Mg and H\u2082SO\u2084 \u2014 smallest: Fe and HCl"],["E","largest: Mg and H\u2082SO\u2084 \u2014 smallest: Zn and HCl"],["F","largest: Zn and HCl \u2014 smallest: Mg and H\u2082SO\u2084"]], answer:"D"},

{n:52, part:"C", text:`3.4 g of an impure sample of silicon tetrachloride is reacted with water. The mixture is then filtered and the resulting solution made up to 250 cm$^3$.</p><p style="text-align:center">SiCl<sub>4</sub>(l) + 2H<sub>2</sub>O(l) \u2192 SiO<sub>2</sub>(s) + 4HCl(aq)</p><p>12.5 cm$^3$ of this solution is neutralised exactly by 20.0 cm$^3$ of 0.100 mol dm$^{-3}$ sodium hydroxide.</p><p>What is the percentage purity of the silicon tetrachloride?</p><p style="font-size:13.5px; color:var(--ink-soft);">($M_r$ value: SiCl\u2084 = 170. Assume that the impurity does not react.)`,
 options:[["A","1.7%"],["B","2.5%"],["C","10%"],["D","32%"],["E","50%"]], answer:"E"},

{n:53, part:"C", text:`The Haber process is represented by the following chemical equation:</p><p style="text-align:center">N<sub>2</sub> + 3H<sub>2</sub> \u2192 2NH<sub>3</sub></p><p>What is the overall enthalpy change for the reaction?</p><p style="font-size:13.5px; color:var(--ink-soft);">(Bond enthalpies: N\u2261N = 945 kJ mol\u207b\u00b9; H\u2013H = 435 kJ mol\u207b\u00b9; N\u2013H = 390 kJ mol\u207b\u00b9)`,
 options:[["A","+90 kJ mol\u207b\u00b9"],["B","\u201390 kJ mol\u207b\u00b9"],["C","+990 kJ mol\u207b\u00b9"],["D","\u2013990 kJ mol\u207b\u00b9"],["E","+1080 kJ mol\u207b\u00b9"],["F","\u20131080 kJ mol\u207b\u00b9"]], answer:"B"},

{n:54, part:"C", text:`The diagram shows the electrolysis of molten lead(II) bromide, PbBr\u2082, using graphite electrodes to separate the compound into its elements.`,
 diagram:"q54",
 after:`<p>Which of the following statements about this electrolysis is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; Lead is formed at the negative electrode.</p><p style="margin-left:20px;">2&nbsp;&nbsp; Electrons flow through the external circuit away from the positive electrode towards the negative electrode.</p><p style="margin-left:20px;">3&nbsp;&nbsp; Bromine molecules and lead are produced in a 2:1 molar ratio.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"E"},

{n:55, part:"D", text:`Which of the following statements is/are correct for both bacterial cells and sperm cells?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The cell can divide.</p><p style="margin-left:20px;">2&nbsp;&nbsp; The cell contains DNA.</p><p style="margin-left:20px;">3&nbsp;&nbsp; The cell has a cell wall.</p><p style="margin-left:20px;">4&nbsp;&nbsp; The cell has a nucleus.</p><p style="margin-left:20px;">5&nbsp;&nbsp; The cell can carry out respiration.`,
 options:[["A","2 only"],["B","4 only"],["C","1 and 2 only"],["D","2 and 5 only"],["E","3 and 4 only"],["F","3 and 5 only"],["G","1, 2 and 5 only"],["H","1, 3 and 4 only"]], answer:"D"},

{n:56, part:"D", text:`Which one of the following statements about cells or tissues is correct?`,
 options:[["A","Any adult stem cells can naturally give rise to all tissue."],["B","Endocrine glands secrete enzymes into the bloodstream."],["C","Embryonic stem cells divide by meiosis to form all cell types."],["D","Receptor cells send chemical impulses along neurones."],["E","The stomach wall contains a tissue that enables movement of food."]], answer:"E"},

{n:57, part:"D", text:`The diagram represents a section of DNA.`,
 diagram:"q57",
 after:`<p>What do the parts labelled 1, 2 and 3 represent?`,
 options:[["A","1: base, 2: phosphate, 3: glycerol, all three: gene"],["B","1: base, 2: sugar, 3: amino acid, all three: gene"],["C","1: phosphate, 2: sugar, 3: base, all three: nucleotide"],["D","1: phosphate, 2: sugar, 3: base, all three: DNA strand"],["E","1: sugar, 2: phosphate, 3: base, all three: nucleotide"],["F","1: sugar, 2: phosphate, 3: fatty acid, all three: DNA strand"]], answer:"C"},

{n:58, part:"D", text:`Using the information in the table, which animal (A\u2013F) is most at risk of extinction?</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">animal</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">geographic range</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">habitat tolerance</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">population size</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">A</td><td style="border:1px solid var(--line); padding:6px 12px;">restricted</td><td style="border:1px solid var(--line); padding:6px 12px;">broad</td><td style="border:1px solid var(--line); padding:6px 12px;">large</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">B</td><td style="border:1px solid var(--line); padding:6px 12px;">extensive</td><td style="border:1px solid var(--line); padding:6px 12px;">broad</td><td style="border:1px solid var(--line); padding:6px 12px;">large</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">C</td><td style="border:1px solid var(--line); padding:6px 12px;">restricted</td><td style="border:1px solid var(--line); padding:6px 12px;">narrow</td><td style="border:1px solid var(--line); padding:6px 12px;">small</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">D</td><td style="border:1px solid var(--line); padding:6px 12px;">extensive</td><td style="border:1px solid var(--line); padding:6px 12px;">narrow</td><td style="border:1px solid var(--line); padding:6px 12px;">small</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">E</td><td style="border:1px solid var(--line); padding:6px 12px;">restricted</td><td style="border:1px solid var(--line); padding:6px 12px;">broad</td><td style="border:1px solid var(--line); padding:6px 12px;">small</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">F</td><td style="border:1px solid var(--line); padding:6px 12px;">extensive</td><td style="border:1px solid var(--line); padding:6px 12px;">broad</td><td style="border:1px solid var(--line); padding:6px 12px;">small</td></tr></table>`,
 options:[["A","Animal A"],["B","Animal B"],["C","Animal C"],["D","Animal D"],["E","Animal E"],["F","Animal F"]], answer:"C"},

{n:59, part:"D", text:`An ecologist used a 50 cm \u00d7 50 cm square quadrat to estimate the number of meadow buttercups present in a field with an area of 50 m$^2$. The quadrat was distributed randomly on ten occasions in the field and the number of buttercups counted in each quadrat.</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">quadrat</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">number of buttercups</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">1</td><td style="border:1px solid var(--line); padding:6px 12px;">3</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">2</td><td style="border:1px solid var(--line); padding:6px 12px;">10</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">3</td><td style="border:1px solid var(--line); padding:6px 12px;">0</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">4</td><td style="border:1px solid var(--line); padding:6px 12px;">4</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">5</td><td style="border:1px solid var(--line); padding:6px 12px;">21</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">6</td><td style="border:1px solid var(--line); padding:6px 12px;">19</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">7</td><td style="border:1px solid var(--line); padding:6px 12px;">6</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">8</td><td style="border:1px solid var(--line); padding:6px 12px;">11</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">9</td><td style="border:1px solid var(--line); padding:6px 12px;">15</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">10</td><td style="border:1px solid var(--line); padding:6px 12px;">3</td></tr></table><p>How many buttercups were there estimated to be in the 50 m$^2$ field?`,
 options:[["A","368"],["B","460"],["C","920"],["D","1840"],["E","4600"],["F","18 400"],["G","45 000"]], answer:"D"},

{n:60, part:"D", text:`The photomicrograph shows a section through the wall of a human bronchus, one of the tubes which carries air towards the lungs.</p><p>A student studying this structure annotated the photomicrograph by describing the cells found in two different layers in the wall of the bronchus.`,
 diagram:"q60",
 after:`<p>The student used these observations to write some conclusions.</p><p>Which of the following conclusions is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The two different layers are both tissues.</p><p style="margin-left:20px;">2&nbsp;&nbsp; The bronchus can be described as an organ.</p><p style="margin-left:20px;">3&nbsp;&nbsp; Amino acids are found in the cytoplasm of cells in each layer.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","1, 2 and 3"]], answer:"G"},

{n:61, part:"D", text:`A student carried out an investigation using the diffusion of a gas along a tube to model movement of gases in the air space of a leaf. An alkaline gas was released from a solution that evaporated from the cotton wool.</p><p>As the gas diffused, it caused damp litmus paper to change colour.</p><p>The time was recorded when each piece of litmus paper changed colour.</p><p>The apparatus and a graph of the results are shown below.`,
 diagram:"q61",
 after:`<p>Which of the following statements about the investigation is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The dependent variable has been plotted on the $x$-axis.</p><p style="margin-left:20px;">2&nbsp;&nbsp; If diffusion of the gas was slower, the graph line would become steeper.</p><p style="margin-left:20px;">3&nbsp;&nbsp; If a more concentrated solution was used in an identical set of apparatus, the data collected would result in a line on the graph below the points plotted for the original gas.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"]], answer:"G"},

{n:62, part:"D", text:`A bacterium was genetically modified by inserting a human gene into a plasmid. A plasmid is a small circle of DNA that can be used to transfer genes into bacterial cells. These modified bacteria then secrete the protein that the human gene codes for. The gene contains a sequence of bases that is not repeated anywhere else in its DNA and is not found in the DNA of other organisms. This sequence of bases is found in every allele of this gene.</p><p>Assuming that no mutations occur, how many copies of this base sequence would you expect to find at each of the stages X, Y and Z?`,
 diagram:"q62",
 options:[["A","X: 1, Y: 1, Z: 0"],["B","X: 1, Y: 2, Z: 1"],["C","X: 1, Y: 1, Z: 1"],["D","X: 2, Y: 1, Z: 0"],["E","X: 2, Y: 1, Z: 1"],["F","X: 2, Y: 2, Z: 0"]], answer:"D"},

{n:63, part:"D", text:`A student set up an experiment to measure the rate of photosynthesis, as shown in the diagram.`,
 diagram:"q63",
 after:`<p>Data was collected and plotted on a graph.</p><p>If plotted, which of the following variables would give a gradient that is directly proportional to the rate of photosynthesis?</p><p style="font-size:13.5px; color:var(--ink-soft);">(All other variables were kept constant.)</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px;"></td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">x-axis</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">y-axis</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">1</td><td style="border:1px solid var(--line); padding:6px 12px;">time</td><td style="border:1px solid var(--line); padding:6px 12px;">volume of CO\u2082 released</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">2</td><td style="border:1px solid var(--line); padding:6px 12px;">time</td><td style="border:1px solid var(--line); padding:6px 12px;">number of gas bubbles released per minute</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">3</td><td style="border:1px solid var(--line); padding:6px 12px;">volume of oxygen released</td><td style="border:1px solid var(--line); padding:6px 12px;">time</td></tr></table>`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"A"},

{n:64, part:"D", text:`Bacteria reproduce asexually by dividing into two by binary fission.</p><p>Which of the following statements is/are correct about binary fission in bacteria?</p><p style="margin-left:20px;">1&nbsp;&nbsp; As it is a form of asexual reproduction, there cannot be any variation in the offspring.</p><p style="margin-left:20px;">2&nbsp;&nbsp; It can lead to a repeated doubling in population size if there are no limiting factors.</p><p style="margin-left:20px;">3&nbsp;&nbsp; If binary fission occurs every 20 minutes, one bacterium would become $72^2$ bacteria in 24 hours.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"C"},

{n:65, part:"D", text:`Which of the following may stay the same when a mutation occurs in a human gene that codes for a protein?</p><p style="margin-left:20px;">1&nbsp;&nbsp; the genotype of the organism's offspring</p><p style="margin-left:20px;">2&nbsp;&nbsp; the phenotype of the organism</p><p style="margin-left:20px;">3&nbsp;&nbsp; the sequence of amino acids in the protein`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"H"},

{n:66, part:"D", text:`A child is affected by a dominant genetic condition. All of his cells have the same genotype. The allele associated with this condition is not present in either of his parents.</p><p>Which of the following statements could explain this?</p><p style="margin-left:20px;">1&nbsp;&nbsp; A mutation occurred during meiosis in his father.</p><p style="margin-left:20px;">2&nbsp;&nbsp; A random mutation occurred in his DNA after he was born.</p><p style="margin-left:20px;">3&nbsp;&nbsp; Both of his grandmothers had the condition.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"B"},

{n:67, part:"D", text:`Phosphatase enzymes break the bond between a phosphate group and the rest of a molecule.</p><p>Phenolphthalein phosphate (PPP) is colourless and is a substrate for phosphatase enzymes.</p><p style="margin-left:20px;">\u2022 The phosphate group of PPP can be removed by the phosphatase enzyme to produce the indicator phenolphthalein.</p><p style="margin-left:20px;">\u2022 Phenolphthalein goes pink in alkaline conditions.</p><p>Five tubes were set up with equal concentrations of PPP and a plant phosphatase enzyme.</p><p>Each tube was at a different pH. The tubes were incubated at the same temperature. After 10 minutes Na\u2082CO\u2083 was then added to each tube until a pH of 9.5 was reached. The colour was observed immediately and then again after another 5 minutes.</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">tube</td><td style="border:1px solid var(--line); padding:6px 12px;">1</td><td style="border:1px solid var(--line); padding:6px 12px;">2</td><td style="border:1px solid var(--line); padding:6px 12px;">3</td><td style="border:1px solid var(--line); padding:6px 12px;">4</td><td style="border:1px solid var(--line); padding:6px 12px;">5</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">pH of initial reaction</td><td style="border:1px solid var(--line); padding:6px 12px;">3.2</td><td style="border:1px solid var(--line); padding:6px 12px;">4.2</td><td style="border:1px solid var(--line); padding:6px 12px;">5.2</td><td style="border:1px solid var(--line); padding:6px 12px;">8.2</td><td style="border:1px solid var(--line); padding:6px 12px;">9.2</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">colour immediately after Na\u2082CO\u2083</td><td style="border:1px solid var(--line); padding:6px 12px;">pale pink</td><td style="border:1px solid var(--line); padding:6px 12px;">pink</td><td style="border:1px solid var(--line); padding:6px 12px;">dark pink</td><td style="border:1px solid var(--line); padding:6px 12px;">colourless</td><td style="border:1px solid var(--line); padding:6px 12px;">colourless</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">colour after another 5 minutes</td><td style="border:1px solid var(--line); padding:6px 12px;">pale pink</td><td style="border:1px solid var(--line); padding:6px 12px;">pink</td><td style="border:1px solid var(--line); padding:6px 12px;">dark pink</td><td style="border:1px solid var(--line); padding:6px 12px;">colourless</td><td style="border:1px solid var(--line); padding:6px 12px;">colourless</td></tr></table><p>Which of the following statements is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; Na\u2082CO\u2083 solution inhibited the activity of the phosphatase enzyme.</p><p style="margin-left:20px;">2&nbsp;&nbsp; More substrate was produced in conditions of high acidity compared to low acidity.</p><p style="margin-left:20px;">3&nbsp;&nbsp; The optimum pH for this plant phosphatase must be 5.2.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"B"},

{n:68, part:"D", text:`A gene found on the X chromosome in humans has two alleles, dominant and recessive. Individuals who have only recessive alleles have a condition that affects their eyesight.</p><p>The inheritance of the condition in one family is shown in the family tree.`,
 diagram:"q68",
 after:`<p>If one living skin cell from each member of this family were analysed, how many of the following alleles would be found?`,
 options:[["A","recessive: 2, dominant: 7"],["B","recessive: 2, dominant: 12"],["C","recessive: 2, dominant: 14"],["D","recessive: 4, dominant: 7"],["E","recessive: 4, dominant: 12"],["F","recessive: 4, dominant: 14"],["G","recessive: 6, dominant: 7"],["H","recessive: 6, dominant: 12"]], answer:"E"},

{n:69, part:"D", text:`The graphs below show the oxygen uptake before, during and after a period of strenuous physical exercise.</p><p>Which shaded area correctly represents the additional oxygen taken in to repay the oxygen debt acquired through anaerobic respiration?`,
 diagram:"q69",
 options:[["A","Graph A"],["B","Graph B"],["C","Graph C"],["D","Graph D"],["E","Graph E"],["F","Graph F"]], answer:"A"},

{n:70, part:"D", text:`An investigation was carried out using clones of one plant.</p><p>Twenty plants of the same initial height were selected and divided into four equal groups. Each group was grown for six months and their environments were controlled as follows:</p><p style="margin-left:20px;">\u2022 kept at a different temperature to each other</p><p style="margin-left:20px;">\u2022 grown in a pot with an equal mass of soil with the same nutrients</p><p style="margin-left:20px;">\u2022 watered with an equal volume of water</p><p style="margin-left:20px;">\u2022 kept in the same light intensity</p><p>After six months, the height of the plants was measured. The mean height of the plants in each pot was calculated. The results are shown in the chart.`,
 diagram:"q70",
 after:`<p>Which of the following statements could explain the results?</p><p style="margin-left:20px;">1&nbsp;&nbsp; The difference in mean height between plants in pot 1 and plants in pot 2 could be due to the environment.</p><p style="margin-left:20px;">2&nbsp;&nbsp; The mean height of plants in pot 4 equals that of plants in pot 3 because of another environmental factor in addition to temperature.</p><p style="margin-left:20px;">3&nbsp;&nbsp; The mean height of plants in pot 3 equals that of plants in pot 4 because of the genotype of the plants.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"H"},

{n:71, part:"D", text:`An investigation was carried out on the effect of substrate concentration on an enzyme-controlled reaction.</p><p>Four different concentrations of substrate were tested. In each case, the concentration of product was measured at regular intervals following the introduction of the substrate.</p><p>All the other variables were kept constant.</p><p>The results obtained are shown on the graph.`,
 diagram:"q71",
 after:`<p>Which of the following statements is/are correct?</p><p style="margin-left:20px;">1&nbsp;&nbsp; As substrate concentration increases, the time taken to produce 0.2 arbitrary units of product increases.</p><p style="margin-left:20px;">2&nbsp;&nbsp; Doubling the substrate concentration always doubles the rate of the reaction.</p><p style="margin-left:20px;">3&nbsp;&nbsp; The average rate of reaction for a substrate concentration of 1.0 mmol dm\u207b\u00b3 is 0.005 arbitrary units per second.`,
 options:[["A","none of them"],["B","1 only"],["C","2 only"],["D","3 only"],["E","1 and 2 only"],["F","1 and 3 only"],["G","2 and 3 only"],["H","1, 2 and 3"]], answer:"D"},

{n:72, part:"D", text:`The sequence of a coding section of DNA is shown below.</p><p style="text-align:center; font-family:monospace; letter-spacing:1px;">CTAGTCTGGTGGCTACGTCCTCCTCTACTATGGCTAGTCGTCTGGTGGCTA</p><p>The number of each type of amino acid coded for by this sequence of DNA bases is shown in the table.</p><table style="margin:12px 0; border-collapse:collapse;"><tr><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">amino acid coded for</td><td style="border:1px solid var(--line); padding:6px 12px; font-style:italic;">number of this type of amino acid present</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">Arg</td><td style="border:1px solid var(--line); padding:6px 12px;">1</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">Leu</td><td style="border:1px solid var(--line); padding:6px 12px;">6</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">Pro</td><td style="border:1px solid var(--line); padding:6px 12px;">2</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">Trp</td><td style="border:1px solid var(--line); padding:6px 12px;">5</td></tr><tr><td style="border:1px solid var(--line); padding:6px 12px;">Val</td><td style="border:1px solid var(--line); padding:6px 12px;">3</td></tr></table><p>What is the correct sequence of amino acids coded for by this sequence of DNA?`,
 options:[["A","Leu-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Val-Leu-Val-Val-Trp-Trp-Trp"],["B","Leu-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Trp-Leu-Trp-Val-Val-Val-Val"],["C","Leu-Val-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Trp-Leu-Val-Val-Trp-Trp"],["D","Leu-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Val-Leu-Val-Val-Trp-Trp-Trp-Leu"],["E","Leu-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Trp-Leu-Trp-Val-Val-Val-Val-Leu"],["F","Leu-Leu-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Trp-Leu-Val-Val-Trp-Trp-Val"],["G","Leu-Val-Trp-Trp-Leu-Leu-Pro-Pro-Leu-Leu-Trp-Leu-Val-Val-Trp-Trp-Leu"],["H","Leu-Val-Trp-Trp-Leu-Arg-Pro-Pro-Leu-Leu-Trp-Leu-Val-Val-Trp-Trp-Leu"]], answer:"H"},

{n:73, part:"E", text:`Find the area of the shape bounded by the four lines:</p><p style="text-align:center">$2y+x=4$</p><p style="text-align:center">$x=-6$</p><p style="text-align:center">$x=0$</p><p style="text-align:center">$y=0$`,
 options:[["A","4"],["B","12"],["C","21"],["D","25"],["E","27"],["F","30"]], answer:"C"},

{n:74, part:"E", text:`A hydroelectric power station uses the water in a reservoir to power the generators. The water falls through a vertical height of 150 m to the turbines which power the generators.</p><p>The efficiency of the power station is 90% and the output power of the power station is 1800 MW.</p><p>The gravitational field strength is 10 N kg\u207b\u00b9 and the density of water is 1000 kg m\u207b\u00b3.</p><p>What volume of water passes through the turbines in one minute?`,
 options:[["A","6.48\u00d710\u2074 m\u00b3"],["B","7.20\u00d710\u2074 m\u00b3"],["C","8.00\u00d710\u2074 m\u00b3"],["D","6.48\u00d710\u2077 m\u00b3"],["E","7.20\u00d710\u2077 m\u00b3"],["F","8.00\u00d710\u2077 m\u00b3"]], answer:"C"},

{n:75, part:"E", text:`The curve</p><p style="text-align:center">$y=x^3+px^2+qx+r$</p><p>has a local maximum when $x=-1$ and a local minimum when $x=3$</p><p>What is the value of $p$?`,
 options:[["A","\u20139"],["B","\u20133"],["C","\u20131"],["D","1"],["E","3"],["F","9"]], answer:"B"},

{n:76, part:"E", text:`A car P of mass 1000 kg is travelling north at 30 m s\u207b\u00b9 along a straight, horizontal road when it hits another car Q which is directly ahead of P and travelling in the same direction. Car Q has a mass of 500 kg and is travelling at 20 m s\u207b\u00b9.</p><p>The collision lasts for 0.20 s and immediately after the collision car Q is moving north at 30 m s\u207b\u00b9.</p><p>What is the speed of P immediately after the collision and what is the size of the average resultant force that acts on Q during the collision?</p><p style="font-size:13.5px; color:var(--ink-soft);">(Assume that no external forces act on the cars during the collision.)`,
 options:[["A","speed of P: 20 m s\u207b\u00b9, average force on Q: 25 000 N"],["B","speed of P: 20 m s\u207b\u00b9, average force on Q: 50 000 N"],["C","speed of P: 20 m s\u207b\u00b9, average force on Q: 100 000 N"],["D","speed of P: 20 m s\u207b\u00b9, average force on Q: 125 000 N"],["E","speed of P: 25 m s\u207b\u00b9, average force on Q: 25 000 N"],["F","speed of P: 25 m s\u207b\u00b9, average force on Q: 50 000 N"],["G","speed of P: 25 m s\u207b\u00b9, average force on Q: 100 000 N"],["H","speed of P: 25 m s\u207b\u00b9, average force on Q: 125 000 N"]], answer:"E"},

{n:77, part:"E", text:`It is given that</p><p style="text-align:center">$7\\cos x + \\tan x \\sin x = 5$</p><p>where $0\\degree < x < 90\\degree$</p><p>What are the possible values of $\\tan x$?`,
 options:[["A","$\\dfrac{1}{2}$ or $\\dfrac{1}{3}$"],["B","$\\dfrac{1}{\\sqrt3}$ or $\\dfrac{1}{2\\sqrt2}$"],["C","$\\dfrac{\\sqrt3}{2}$ or $\\dfrac{2\\sqrt2}{3}$"],["D","$\\sqrt3$ or $2\\sqrt2$"],["E","3 or 2"]], answer:"D"},

{n:78, part:"E", text:`A metal wire of length 0.50 m has a uniform cross-sectional area of 4.0\u00d710\u207b\u2077 m$^2$.</p><p>There is a current of 4.0 A in the wire.</p><p>What is the potential difference across the ends of the wire?</p><p style="font-size:13.5px; color:var(--ink-soft);">(resistivity of the metal = 1.6\u00d710\u207b\u2077 \u03a9 m)`,
 options:[["A","0.05 V"],["B","0.20 V"],["C","0.80 V"],["D","3.2 V"],["E","5.0 V"],["F","20 V"]], answer:"C"},

{n:79, part:"E", text:`An equilateral triangle of side 8 cm is drawn so that its vertices lie on the circumference of a circle, as shown in the diagram.`,
 diagram:"q79",
 after:`<p>What is the total of the three areas shaded in the diagram, in cm$^2$?`,
 options:[["A","$8(2\\pi-3)$"],["B","$24(\\pi-\\sqrt3)$"],["C","$48(4\\pi-\\sqrt3)$"],["D","$\\dfrac{16}{3}(4\\pi-6-3\\sqrt3)$"],["E","$\\dfrac{16}{3}(4\\pi-3\\sqrt3)$"]], answer:"E"},

{n:80, part:"E", text:`A uniform square trap door of side 0.80 m and mass 14 kg has a smooth hinge at one edge and is held open at an angle of 30\u00b0 to the horizontal. It is supported by a single rigid rod placed so that it meets the surface of the trap door at 90\u00b0 at a distance 0.10 m from the top edge of the trap door, as shown.`,
 diagram:"q80",
 after:`<p>What is the normal contact force exerted on the trap door by the rod?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9)`,
 options:[["A","40 N"],["B","$35\\sqrt3$ N"],["C","$40\\sqrt3$ N"],["D","80 N"],["E","$80\\sqrt3$ N"],["F","$\\dfrac{280\\sqrt3}{3}$ N"]], answer:"C"},

{n:81, part:"E", text:`Which one of the following is the real solution of the equation</p><p style="text-align:center">$3\\times5^{2x+1} - 5^x - 2 = 0$`,
 options:[["A","$x=\\log_5\\left(\\dfrac{1}{3}\\right)$"],["B","$x=\\log_5\\left(\\dfrac{2}{5}\\right)$"],["C","$x=\\log_5\\left(\\dfrac{3}{5}\\right)$"],["D","$x=\\log_5\\left(\\dfrac{2}{3}\\right)$"],["E","$x=\\log_5\\left(\\dfrac{5}{3}\\right)$"],["F","$x=\\log_5\\left(\\dfrac{5}{2}\\right)$"]], answer:"B"},

{n:82, part:"E", text:`Two small loudspeakers are placed side by side 30 cm apart.</p><p>They are connected to the same signal generator so that they emit sound of frequency 400 Hz in phase with one another.</p><p>The sounds both reach a microphone placed 40 cm directly in front of one of the two loudspeakers as shown.`,
 diagram:"q82",
 after:`<p>What is the phase difference between waves from the loudspeakers as they arrive at the microphone?</p><p style="font-size:13.5px; color:var(--ink-soft);">(speed of sound = 320 m s\u207b\u00b9)`,
 options:[["A","30\u00b0"],["B","36\u00b0"],["C","45\u00b0"],["D","60\u00b0"],["E","72\u00b0"],["F","90\u00b0"],["G","120\u00b0"]], answer:"C"},

{n:83, part:"E", text:`For a particular function $f(x)$, it is given that:</p><p style="text-align:center">$\\displaystyle\\int_{-2}^{2} 2f(x)\\,dx + \\int_{2}^{4} f(x)\\,dx = 4$</p><p>and also:</p><p style="text-align:center">$\\displaystyle\\int_{-2}^{2} 5f(x)\\,dx - \\int_{-2}^{4} f(x)\\,dx = 7$</p><p>Find the value of $\\displaystyle\\int_{2}^{4} f(x)\\,dx$`,
 options:[["A","$\\dfrac{1}{3}$"],["B","$\\dfrac{11}{7}$"],["C","$\\dfrac{11}{6}$"],["D","$\\dfrac{13}{6}$"],["E","$\\dfrac{13}{3}$"]], answer:"A"},

{n:84, part:"E", text:`An astronaut on the Moon throws a ball vertically upwards. The ball has a mass of 2.0 g and is thrown upwards at 80 m s\u207b\u00b9.</p><p>What is the maximum height gained by the ball?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength close to the Moon's surface = 1.6 N kg\u207b\u00b9)`,
 options:[["A","25 m"],["B","50 m"],["C","320 m"],["D","2000 m"],["E","3200 m"],["F","4000 m"]], answer:"D"},

{n:85, part:"E", text:`Given that</p><p style="text-align:center">$\\displaystyle f(x) = \\int_0^x (3+2t)^7\\,dt$</p><p>what is the coefficient of $x^4$ in the expansion of $f(x)$ in powers of $x$?`,
 options:[["A","70"],["B","162"],["C","$\\dfrac{2835}{4}$"],["D","3024"],["E","5670"],["F","15 120"],["G","22 680"]], answer:"E"},

{n:86, part:"E", text:`A student has one 300 \u03a9 resistor and another resistor of resistance $R$.</p><p>The student plots a graph of current $I$ against potential difference $V$ for the 300 \u03a9 resistor and then for both resistors connected in parallel.`,
 diagram:"q86",
 after:`<p>What is the resistance $R$?`,
 options:[["A","3.3 \u03a9"],["B","5.0 \u03a9"],["C","10 \u03a9"],["D","100 \u03a9"],["E","200 \u03a9"],["F","600 \u03a9"],["G","1000 \u03a9"]], answer:"F"},

{n:87, part:"E", text:`The three internal angles in a triangle are $\\alpha$, $\\beta$ and $\\theta$, and</p><p style="text-align:center">$3\\tan\\alpha - 2\\sin\\beta = 2$</p><p style="text-align:center">$5\\tan\\alpha + 6\\sin\\beta = 8$</p><p>What is the value of $\\theta$ in degrees?`,
 options:[["A","15"],["B","45"],["C","75"],["D","105"],["E","135"]], answer:"D"},

{n:88, part:"E", text:`A light, vertical, copper wire of length 2.4 m and uniform cross-sectional area 2.0\u00d710\u207b\u2076 m$^2$ supports a load of mass 4.0 kg.</p><p>The Young modulus of copper is 1.2\u00d710\u00b9\u00b9 Pa.</p><p>What is the strain energy in the wire?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9; assume that the wire obeys Hooke's law and that the cross-sectional area remains constant)`,
 options:[["A","8.0\u00d710\u207b\u2075 J"],["B","1.7\u00d710\u207b\u2074 J"],["C","4.0\u00d710\u207b\u2074 J"],["D","8.0\u00d710\u207b\u00b3 J"],["E","4.0\u00d710\u207b\u00b2 J"],["F","1.6\u00d710\u207b\u00b2 J"]], answer:"D"},

{n:89, part:"E", text:`Find the complete set of values of $x$ for which</p><p style="text-align:center">$x^3-2x^2-7x-4 > 0$`,
 options:[["A","$x<-1$"],["B","$x>-1$"],["C","$-1<x<4$"],["D","$x<-1$ or $x>4$"],["E","$x<4$"],["F","$x>4$"]], answer:"F"},

{n:90, part:"E", text:`The velocity\u2013time graph is for an 80 kg person in a lift that is moving vertically upwards.`,
 diagram:"q90",
 after:`<p>What is the magnitude of the contact force between the person and the lift floor at the time corresponding to X?</p><p style="font-size:13.5px; color:var(--ink-soft);">(gravitational field strength = 10 N kg\u207b\u00b9)`,
 options:[["A","640 N"],["B","768 N"],["C","800 N"],["D","832 N"],["E","960 N"]], answer:"B"},

];

window.registerTest({
  id: "nsaa-2019-s1",
  label: "NSAA 2019 — Section 1",
  spreadsheetId: "1uIIVT81OBdmi1Hs7ILaCMBe5wOxXAO6R4BQ_nb_eTXQ",
  range: "Form responses 2!A:Z",
  questions: QUESTIONS_META,
});
})();