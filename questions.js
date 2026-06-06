const questions = [
  {
    "question": "When can a child be exempted to be seated in a child restraint system?",
    "options": [
      "If the child will be late for a medical appointment",
      "If the child is going to school",
      "If the child requires immediate medical treatment"
    ],
    "answer": 2
  },
  {
    "question": "What are the three field sobriety tests?",
    "options": [
      "Eye test, walk and turn, one leg stand",
      "Eye test, running straight, jumping rope",
      "Reading and Comprehension Test, Singing the National Anthem and Drinking one liter of fresh water"
    ],
    "answer": 0
  },
  {
    "question": "How do you respond to a situation where you are approaching your garage to your right and you need to pass on a bike lane which is open, but a speeding SUV unexpectedly uses the bike lane to overtake you?",
    "options": [
      "give way to the speeding SUV",
      "give way to motorists on the left",
      "give way to cyclists"
    ],
    "answer": 0
  },
  {
    "question": "What is the penalty if a driver is found to have a fake or counterfeit license?",
    "options": [
      "His/her driver's license shall be confiscated and he/she shall be disqualified...",
      "Imprisonment for six (6) months plus fine",
      "Banned from getting a driver's license for life"
    ],
    "answer": 0
  },
  {
    "question": "What is the penalty if a driver is convicted of a crime while using a motor vehicle?",
    "options": [
      "The DL will be revoked and the driver will be perpetually disqualified...",
      "The DL will be suspended and the driver will pay a fine",
      "The DL will be confiscated"
    ],
    "answer": 0
  },
  {
    "question": "LTO rules and regulations prohibit drivers of public utility vehicles from:",
    "options": [
      "overcharging fares and fast taximeters",
      "cutting trip or going beyond authorized line",
      "all of the answers are correct"
    ],
    "answer": 2
  },
  {
    "question": "Who is a Professional Driver?",
    "options": [
      "An expert and experienced driver",
      "Any driver who can operate a specific motor vehicle category",
      "Any driver who has a qualification to drive a Private or For Hire Vehicle"
    ],
    "answer": 2
  },
  {
    "question": "How many days do you need to settle a traffic violation with LTO?",
    "options": [
      "Within 15 days",
      "Within 10 days",
      "Within 30 days"
    ],
    "answer": 0
  },
  {
    "question": "What is the maximum validity of license that a driver may have if he/she has no traffic violation at the time of renewal?",
    "options": [
      "5 years validity",
      "10 years validity",
      "15 years validity"
    ],
    "answer": 1
  },
  {
    "question": "Can a driver be given a 10-year validity license if he/she has traffic violation/s?",
    "options": [
      "No",
      "Yes",
      "Yes - if all penalties are paid 15 days prior to renewal"
    ],
    "answer": 0
  },
  {
    "question": "What is the allowed age to apply for a Non Professional driver's license?",
    "options": [
      "16 years old",
      "17 years old",
      "20 Years old"
    ],
    "answer": 1
  },
  {
    "question": "Registration of motor vehicle may be suspended if:",
    "options": [
      "motor vehicle is found to be in conformity with regulations",
      "motor vehicle is found to be unsightly",
      "motor vehicle is not registered to the driver at the time of apprehension"
    ],
    "answer": 1
  },
  {
    "question": "Where do you need to display your plate number?",
    "options": [
      "one in front and one in the rear of the vehicle",
      "two in front",
      "one in the front windshield and one at the back windshield"
    ],
    "answer": 0
  },
  {
    "question": "This traffic sign means \"Yield the right of way\"",
    "options": [
      "inverted triangle",
      "vertical triangle",
      "horizontal triangle"
    ],
    "answer": 0
  },
  {
    "question": "What is the main purpose of traffic laws, rules and regulations?",
    "options": [
      "To generate revenues for the government",
      "To discipline the motorists",
      "To put order on the road"
    ],
    "answer": 2
  },
  {
    "question": "Green light at an intersection means",
    "options": [
      "pedestrians are allowed to cross all pedestrian lanes",
      "pedestrians are not allowed to cross all pedestrian lanes",
      "the vehicles on the other street are stopped"
    ],
    "answer": 1
  },
  {
    "question": "Flashing yellow light means:",
    "options": [
      "slowdown and proceed with caution",
      "you have the right of way over a flashing yellow light",
      "vehicles will be crossing from the other side"
    ],
    "answer": 0
  },
  {
    "question": "Parking is allowed if the vehicle is _________",
    "options": [
      "beyond 4 meters of a fire hydrant",
      "within 3 meters of the intersection of curve lines",
      "on the intersection"
    ],
    "answer": 0
  },
  {
    "question": "Normally, on a two-lane road, overtaking is allowed at the:",
    "options": [
      "shoulder or pavement of the road",
      "blind curve with a yellow solid line",
      "left lane"
    ],
    "answer": 2
  },
  {
    "question": "When do you have to make a complete full stop?",
    "options": [
      "At a flashing yellow light",
      "At a red traffic light",
      "At an intersection"
    ],
    "answer": 1
  },
  {
    "question": "The proper hand signal for a right turn is:",
    "options": [
      "left arm pointing left",
      "left arm held pointing upward",
      "left arm held down, hand pointing at ground"
    ],
    "answer": 1
  },
  {
    "question": "Single white broken line on a 2-way road means:",
    "options": [
      "passing or overtaking can be made anytime",
      "it separates traffic moving in opposite directions",
      "absolutely no crossing"
    ],
    "answer": 1
  },
  {
    "question": "What is the meaning of double solid yellow line?",
    "options": [
      "Cross with due care",
      "Cross anytime",
      "Crossing/traversing or overtaking is not allowed"
    ],
    "answer": 2
  },
  {
    "question": "Upon approaching an intersection marked with a yield sign, you are required to",
    "options": [
      "stop before entering the intersection",
      "slowdown, then enter the intersection when the way is clear",
      "enter the intersection immediately"
    ],
    "answer": 1
  },
  {
    "question": "The holder of a driver's license shall entitle him/her to operate:",
    "options": [
      "any kind of motor vehicle",
      "motor vehicle/s specified in the license only",
      "motor vehicles for hire only"
    ],
    "answer": 1
  },
  {
    "question": "When may you lend your driver's license?",
    "options": [
      "Under no circumstances",
      "To another person who is learning to drive",
      "In emergencies"
    ],
    "answer": 0
  },
  {
    "question": "At an intersection without stop or yield signs, two cars approach at right angles to each other at almost the same time. Which driver must yield?",
    "options": [
      "The motorist on the right",
      "The motorist on the left",
      "Either of the driver has the 1st right-of-way"
    ],
    "answer": 1
  },
  {
    "question": "Is it allowed to drive a motorcycle in a public road pending release of the Certificate of Registration?",
    "options": [
      "No",
      "Yes",
      "Yes, if travel authority is given by the dealer"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following statement is true?",
    "options": [
      "A DL holder with authority to drive MT is not allowed to drive AT",
      "A DL holder with authority to drive AT is allowed to drive MT",
      "A DL holder with authority to drive MT is allowed to operate AT"
    ],
    "answer": 2
  },
  {
    "question": "Can you drive a motorcycle if your license bears DL Code B?",
    "options": [
      "Yes",
      "No, unless authorized by a traffic enforcer",
      "No"
    ],
    "answer": 2
  },
  {
    "question": "Identify this traffic sign: (U-Turn with Red Slash)",
    "options": [
      "no u-turn",
      "dangerous left bend",
      "dangerous right bend"
    ],
    "answer": 0
  },
  {
    "question": "Identify this traffic sign: (Triangle narrowing)",
    "options": [
      "road widens",
      "slippery road ahead",
      "road narrows ahead"
    ],
    "answer": 2
  },
  {
    "question": "Identify this traffic sign: (Horn with Red Slash)",
    "options": [
      "no blowing of horn",
      "animals crossing",
      "dangerous bend"
    ],
    "answer": 0
  },
  {
    "question": "Identify this traffic sign: (Triangle Circular Arrows)",
    "options": [
      "Road narrows",
      "Roundabout",
      "no entry for all types of vehicle"
    ],
    "answer": 1
  },
  {
    "question": "Identify this traffic sign: (Triangle Car Skidding)",
    "options": [
      "slippery road",
      "winding road",
      "curve ahead"
    ],
    "answer": 0
  },
  {
    "question": "What is the meaning of this traffic sign? (Yellow Diamond Pedestrians)",
    "options": [
      "Pedestrian crossing",
      "Pedestrian crossing ahead",
      "Caution - School Zone"
    ],
    "answer": 2
  },
  {
    "question": "Drinking alcohol before driving is one of the major causes of vehicular road crash because when a driver is drunk, he/she is:",
    "options": [
      "arrogant, talkative and doesn't have the judgement...",
      "calm, relaxed and able to perform",
      "able to talk intelligently"
    ],
    "answer": 0
  },
  {
    "question": "The Temporary Operator's Permit (TOP) authorizes the apprehended driver to operate motor vehicle for a period not exceeding:",
    "options": [
      "72 hours",
      "1 week",
      "15 days"
    ],
    "answer": 0
  },
  {
    "question": "What is the maximum penalty for driving under the influence of liquor or prohibited drugs?",
    "options": [
      "6 months suspension",
      "1-year suspension",
      "Perpetual revocation of license"
    ],
    "answer": 2
  },
  {
    "question": "What is the meaning of a blue traffic light?",
    "options": [
      "None, no blue traffic light",
      "Informative sign",
      "Proceed"
    ],
    "answer": 0
  },
  {
    "question": "Motorcycle riders must consider safety and exercise due care. To do so, they are required to wear:",
    "options": [
      "a policeman cap or gloves",
      "helmets intended for construction works",
      "standard protective helmet"
    ],
    "answer": 2
  },
  {
    "question": "What should you do when another vehicle is following you too close?",
    "options": [
      "Speed up to start a road race",
      "Slow down gradually and give him the signal to overtake",
      "Slam on your brakes"
    ],
    "answer": 1
  },
  {
    "question": "Before changing lanes in traffic, aside from giving signal and checking your side and rearview mirrors, what else do you need to do?",
    "options": [
      "Turn your head to check other vehicles beside your car",
      "Sound your horn",
      "Blink your headlights"
    ],
    "answer": 0
  },
  {
    "question": "When approaching a sharp curve of the highway, you should:",
    "options": [
      "reduce speed before entering the curve",
      "increase speed while negotiating the curve",
      "apply your brakes abruptly while taking the curve"
    ],
    "answer": 0
  },
  {
    "question": "Night driving is difficult. We should do the following when a vehicle comes towards us at night:",
    "options": [
      "dim your lights by switching to low beam",
      "brighten your light by switching to high beam",
      "switch on your headlights intermittently"
    ],
    "answer": 0
  },
  {
    "question": "At night, when approaching a curve or intersection with poor visibility, be sure to:",
    "options": [
      "switch off your headlights to enable oncoming motorists to see you",
      "flash your headlights to let pedestrians and oncoming motorists know...",
      "switch on your interior lights"
    ],
    "answer": 1
  },
  {
    "question": "What is the best safety rule when driving a motor vehicle?",
    "options": [
      "Never insist on your right-of-way",
      "Blow your horn to assert your right-of-way",
      "Always demand for the right-of-way"
    ],
    "answer": 0
  },
  {
    "question": "A blind spot is either at your right or left that you do not see on your side mirror. What should you do before backing-up?",
    "options": [
      "Turn your head to see that the way is clear",
      "Turn your wheel all the way to the right and pull up",
      "Turn your wheel all the way to the left and pull up"
    ],
    "answer": 0
  },
  {
    "question": "Road crash can be avoided if the drivers:",
    "options": [
      "follow traffic signs and pertinent traffic rules and regulations",
      "totally disobey traffic laws",
      "are ignorant of traffic laws"
    ],
    "answer": 0
  },
  {
    "question": "What should you do whenever you are driving on a highway with a lot of potholes?",
    "options": [
      "Increase speed",
      "Reduce speed",
      "Always change lane"
    ],
    "answer": 1
  },
  {
    "question": "Sometimes, a driver passes through a busy street with so many pedestrians. Which of the following should a driver do?",
    "options": [
      "Slowdown and check for safety when passing through",
      "Proceed with usual speed",
      "Stop at all cost"
    ],
    "answer": 0
  },
  {
    "question": "Driving in heavy rains can be extremely dangerous due to limited visibility. What should you do?",
    "options": [
      "When you cannot see more than 20 meters in front of you, turn on your hazard lights...",
      "Turn on your headlights and slow down or park at a safe place if situation is risky",
      "Turn on your hazard lights, blow your horn and continue driving"
    ],
    "answer": 1
  },
  {
    "question": "If you see a ball coming from behind a parked vehicle, it is more likely that a kid is following it. What will you do?",
    "options": [
      "Increase your speed",
      "Slow down",
      "Blow your horn and maintain your speed"
    ],
    "answer": 1
  },
  {
    "question": "What should do when you see a traffic sign \"ACCIDENT PRONE AREA\"?",
    "options": [
      "Slow down and be more alert than usual",
      "Increase your speed",
      "Blow your horn and resume your normal speed"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is not a safe place to overtake?",
    "options": [
      "When approaching a crest or upon a curve",
      "At an intersection",
      "All of the answers"
    ],
    "answer": 2
  },
  {
    "question": "Disregarding traffic lights during late hours of the night could:",
    "options": [
      "make you a good driver",
      "involve you in a fatal road crash",
      "decrease your fuel consumption"
    ],
    "answer": 1
  },
  {
    "question": "A good driver must meet one's social responsibilities of caring for others by:",
    "options": [
      "driving noisily to attract the attention of residents...",
      "exercising care for other pedestrians and vehicles around",
      "blowing one's horn every now and then"
    ],
    "answer": 1
  },
  {
    "question": "When the vehicle you are driving runs off the road or hits an electric post or a parked car, the most probable reason is:",
    "options": [
      "you are driving too fast and you lost control of your vehicle",
      "you lost brake",
      "you are trying to overtake"
    ],
    "answer": 0
  },
  {
    "question": "If your vehicle broke down on the road, what should you do?",
    "options": [
      "Leave the vehicle and call for a mechanic",
      "Switch on the hazard warning lights and display an Early Warning Device (EWD)...",
      "Turn off the engine and call for a mechanic"
    ],
    "answer": 1
  },
  {
    "question": "What is the primary responsibility of a driver in times of a road crash?",
    "options": [
      "Aid the victim",
      "Run and hide",
      "Ask for victim's identification card"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is a quality of a defensive driver?",
    "options": [
      "drivers who knows how to properly use clutch and brake pedals...",
      "drivers that are using the basic knowledge of vehicle maintenance0",
      "driver who continues to drive even with flat tires to avoid an impounding ticket"
    ],
    "answer": 1
  },
  {
    "question": "Which one is correct road discipline?",
    "options": [
      "hiding from traffic enforcers during oplan sita",
      "following the advice of the elderly",
      "knowing and abiding by the traffic rules and regulations"
    ],
    "answer": 2
  },
  {
    "question": "How can you overcome stress?",
    "options": [
      "stopping, getting out of the vehicle, shouting at anybody...",
      "taking a deep breath, sitting comfortably, listening to soothing music...",
      "driving faster than allowed, listen to loud music..."
    ],
    "answer": 1
  },
  {
    "question": "What may happen if a driver failed to overcome stress?",
    "options": [
      "proper changing lanes",
      "smooth braking",
      "road rage"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following actions may result to road rage?",
    "options": [
      "following a vehicle with enough space to maneuver",
      "cutting off other vehicles or following too close",
      "allowing other motorists to overtake with ease"
    ],
    "answer": 1
  },
  {
    "question": "What is the ultimate result of a road rage?",
    "options": [
      "Death",
      "more friends",
      "refreshment"
    ],
    "answer": 0
  },
  {
    "question": "If you feel drowsy while driving, it is important that you:",
    "options": [
      "park at a safe place, and take a short break before proceeding",
      "speed up to reach your destination faster",
      "stop driving, switch on the hazard lights and take a nap"
    ],
    "answer": 0
  },
  {
    "question": "Can a driver allow a cyclist to hitch on his vehicle?",
    "options": [
      "No, especially without permission from an enforcer",
      "No, road crash may happen",
      "No"
    ],
    "answer": 2
  },
  {
    "question": "What is the first thing to do if you experience a tire blowout?",
    "options": [
      "Don't step on the brakes, focus on the steering wheel",
      "Step on your brakes immediately to avoid hitting the motor vehicle",
      "Switch off the engine"
    ],
    "answer": 0
  },
  {
    "question": "What is the main purpose of having a vehicle undergo regular vehicle maintenance inspection?",
    "options": [
      "to verify the chassis and engine numbers of the vehicle",
      "to check the roadworthiness of the vehicle",
      "to check the driver's performance"
    ],
    "answer": 1
  },
  {
    "question": "When do you need to follow the traffic rules and regulations?",
    "options": [
      "when avoiding an enforcer",
      "when parked",
      "while at the steering wheel"
    ],
    "answer": 2
  },
  {
    "question": "Under R.A. 8750, Children must be properly restraint if they are:",
    "options": [
      "10 years old",
      "6 years old and below",
      "7 years old"
    ],
    "answer": 1
  },
  {
    "question": "In driving, the most important sense the driver needs is:",
    "options": [
      "hearing",
      "smelling",
      "seeing"
    ],
    "answer": 2
  },
  {
    "question": "Identify this traffic sign: (30 km/h)",
    "options": [
      "driving speed to beat the traffic",
      "distance of the next intersection is 30 km",
      "required speed limit is 30kph"
    ],
    "answer": 2
  },
  {
    "question": "Identify this traffic sign: (GIVE WAY)",
    "options": [
      "you must give right-of-way",
      "you have the right-of-way",
      "early warning device"
    ],
    "answer": 0
  },
  {
    "question": "What is the meaning of yellow painted curb?",
    "options": [
      "No loading/Unloading",
      "No Parking",
      "No waiting"
    ],
    "answer": 1
  },
  {
    "question": "What do you need to do upon parking and getting out of the vehicle?",
    "options": [
      "lock all the doors",
      "engage the parking brake",
      "blow horn"
    ],
    "answer": 1
  },
  {
    "question": "What do rumble strips on the road indicate?",
    "options": [
      "To stop at once and wait for a go signal...",
      "To be aware of the speed approaching obstructions or intersections",
      "To be more aggressive"
    ],
    "answer": 1
  },
  {
    "question": "What is the required color of headlights?",
    "options": [
      "any color may do",
      "red",
      "white or yellowish white"
    ],
    "answer": 2
  },
  {
    "question": "What is the required color of brake lights?",
    "options": [
      "White",
      "bright red",
      "yellow"
    ],
    "answer": 1
  },
  {
    "question": "What are the requirements for motor vehicle registration?",
    "options": [
      "Anti-carnapping clearance",
      "LTO inspection of the vehicle and emission test compliance",
      "District Traffic Enforcement Clearance"
    ],
    "answer": 1
  },
  {
    "question": "When do you need to use your seat belt?",
    "options": [
      "When driving on a national road",
      "When driving above 10 kph",
      "While the engine is running and before moving off"
    ],
    "answer": 2
  },
  {
    "question": "What is the primary objective of the Seat Belt Act?",
    "options": [
      "To restrict the driver in times of road rage",
      "To complete the practical driving course",
      "To secure and safeguard the passengers and drivers of a motor vehicles"
    ],
    "answer": 2
  },
  {
    "question": "What is the maximum height that a driver can install his mobile phone from the base of the dashboard?",
    "options": [
      "2 inches",
      "4 inches",
      "6 inches"
    ],
    "answer": 1
  },
  {
    "question": "Under R.A. No. 11229, What is the allowable age that a child may sit in front passenger seat of a car?",
    "options": [
      "more than 12 years old",
      "16 years old and above",
      "18 years old and above"
    ],
    "answer": 0
  },
  {
    "question": "What is the height requirement for a child to be exempted to use a child restraint system?",
    "options": [
      "100 cms and above",
      "150 cms and above",
      "180 cms and above"
    ],
    "answer": 1
  },
  {
    "question": "Can an expired child restraint system be used when it still looks in good shape?",
    "options": [
      "Yes",
      "No",
      "Yes, provided that it is allowed by traffic enforcers"
    ],
    "answer": 1
  },
  {
    "question": "When does a driver need to wear a helmet when riding a motorcycle?",
    "options": [
      "For long and short drives",
      "For long or short drives and in any type of road or highway",
      "For national road only"
    ],
    "answer": 1
  },
  {
    "question": "What type of helmet should a rider must use?",
    "options": [
      "Standard motorcycle helmet compliant to specifications of LTO",
      "Standard motorcycle helmet compliant to specifications of DENR",
      "Standard motorcycle helmet compliant to specifications of DTI"
    ],
    "answer": 2
  },
  {
    "question": "Who are responsible if a motorcycle was used in the commission of a crime?",
    "options": [
      "owner, driver and backrider",
      "driver only",
      "backrider and driver"
    ],
    "answer": 0
  },
  {
    "question": "Under the Children's Safety on Motorcycles Act, a child below 18 years old can't ride in a two-wheeled motorcycle on public roads unless:",
    "options": [
      "The child can comfortably reach his/her feet on the standard foot peg... and is wearing the standard protective helmet.",
      "There is a high density of fast moving vehicles...",
      "The driver can grasp the waist of the child..."
    ],
    "answer": 0
  },
  {
    "question": "What is the violation of a driver overtaking at an intersection having a one lane direction?",
    "options": [
      "Overtaking at an intersection",
      "Obstruction",
      "Disregarding traffic signals"
    ],
    "answer": 0
  },
  {
    "question": "When are you allowed to pick up passengers at a pedestrian lane?",
    "options": [
      "When traffic enforcers are not looking",
      "When a passenger is already waiting",
      "Loading and unloading passengers at a pedestrian lane is not allowed"
    ],
    "answer": 2
  },
  {
    "question": "Is a driver allowed to load cargo more than the vehicle's registered load capacity?",
    "options": [
      "Yes",
      "No",
      "Yes, if the cargo is fragile or perishable"
    ],
    "answer": 1
  },
  {
    "question": "Where can you contest an alleged traffic violation?",
    "options": [
      "at the traffic adjudication office concerned",
      "on the street, before the traffic enforcer leaves",
      "at any adjudication office"
    ],
    "answer": 0
  },
  {
    "question": "Who has the authority to confiscate a driver's license during a normal traffic violation?",
    "options": [
      "LTO Law Enforcement Officers or LTO Deputized Agents",
      "Anybody, for as long as the violation is within the provisions of R.A. No. 4136",
      "Anybody, for as long as the traffic enforcer is a permanent employee..."
    ],
    "answer": 0
  },
  {
    "question": "A 30-day suspension of the driver's license shall be imposed if:",
    "options": [
      "The traffic violation committed is grave",
      "The driver fails to pay the corresponding penalty of the apprehension within 15 days",
      "The driver fails to pay the fine within 72 hours"
    ],
    "answer": 1
  },
  {
    "question": "What does this hand signal mean when you are coming from the roadside and your signal is malfunctioning? (arm pointing straight left)",
    "options": [
      "You are turning left.",
      "You are turning right.",
      "You are going to stop."
    ],
    "answer": 0
  },
  {
    "question": "What should be the appropriate action when you see this traffic sign? (SLOW DOWN ACCIDENT PRONE AREA)",
    "options": [
      "Slow down and be more alert than usual",
      "Increase your speed",
      "Blow your horn and resume your normal normal speed"
    ],
    "answer": 0
  },
  {
    "question": "Where do you usually see this traffic sign? (Chevron pointing downwards)",
    "options": [
      "Before the bridge",
      "Before changing lane",
      "At the column of a foot bridge"
    ],
    "answer": 2
  },
  {
    "question": "What should a law enforcer do upon seizing a motorcycle from a traffic offender?",
    "options": [
      "Use the motorcycle temporarily",
      "Surrender the motorcycle to authorities",
      "Send the motorcycle to the impounding area"
    ],
    "answer": 2
  },
  {
    "question": "What does the law require you to do upon approaching an intersection with a STOP sign?",
    "options": [
      "Slow down and proceed when it is safe",
      "Yield the right-of-way if necessary...",
      "Stop and proceed when it is safe"
    ],
    "answer": 2
  },
  {
    "question": "After passing or overtaking another vehicle, you can safely move back into your original lane if:",
    "options": [
      "the driver you passed honks his horn",
      "you can see in the rear-view mirror the overtaken car",
      "you can see in the side-view mirror the overtaken car"
    ],
    "answer": 1
  },
  {
    "question": "Drivers moving slower than other motorists should use the:",
    "options": [
      "outer lane",
      "center lane",
      "inner lane"
    ],
    "answer": 0
  },
  {
    "question": "Some signs are called \"lane-use\" signs. They appear to direct you into the correct lane as you reach the actual intersection. They are usually seen:",
    "options": [
      "before an intersection",
      "after an intersection",
      "on an intersection"
    ],
    "answer": 0
  },
  {
    "question": "If you encounter an emergency vehicle (ambulance, fire trucks, police) with sirens on, what should you do?",
    "options": [
      "Obstruct their passage and never allow them to pass through",
      "Just ignore",
      "Pull over to the left or right side of the road and give way"
    ],
    "answer": 2
  },
  {
    "question": "A driver while on a highway shall yield the right of way to:",
    "options": [
      "pedestrians crossing within a crosswalk",
      "pedestrians crossing at intersection...",
      "vehicles about to enter the highway"
    ],
    "answer": 0
  },
  {
    "question": "With Anti-lock Braking System (ABS) installed on your vehicle, what should you do while driving with maximum speed and you have to stop suddenly?",
    "options": [
      "Slam the brake pedal",
      "Apply brakes gently with steady pressure",
      "Pump the brake pedal"
    ],
    "answer": 1
  },
  {
    "question": "Your speed while driving at night should depend on:",
    "options": [
      "the physical, mental condition and skill of the driver",
      "the roadworthiness of the motor vehicle and weather condition",
      "all of the answers are correct"
    ],
    "answer": 2
  },
  {
    "question": "The most effective way to deal with a tailgater is to:",
    "options": [
      "ignore him but do not allow him to get away",
      "slow down and let him pass",
      "increase your speed and be alert on your brakes"
    ],
    "answer": 1
  },
  {
    "question": "What should you do when an incoming vehicle is forced to cross the centerline to avoid hitting another vehicle which suddenly changed lane?",
    "options": [
      "Ignore it because you have the right-of-way",
      "Blow your horn and turn on your headlight",
      "Be alert, be prepared to slow down, and give way"
    ],
    "answer": 2
  },
  {
    "question": "What may happen if the driver deliberately disregard a regulatory traffic sign?",
    "options": [
      "Road Crash",
      "Nothing",
      "Passengers will be happy"
    ],
    "answer": 0
  },
  {
    "question": "When you want to change or shift to higher gear to speed up, and a car in the opposite direction crosses quickly to your lane, what will you do?",
    "options": [
      "be alert, stop and give way to the car crossing",
      "insist on your right-of-way",
      "turn left immediately"
    ],
    "answer": 0
  },
  {
    "question": "Who will win between two parties if they failed to overcome stress?",
    "options": [
      "neither the aggressor nor the victim",
      "adjudication officer",
      "insurance company"
    ],
    "answer": 0
  },
  {
    "question": "Driving along an open road, a PWD in a wheel chair abruptly crosses the road. How do you prevent yourself hitting the PWD?",
    "options": [
      "move fast",
      "hold on to steering wheel and shift to an open space to avoid the PWD",
      "Prepare to stop"
    ],
    "answer": 1
  },
  {
    "question": "Can a driver who had the opportunity to avoid a road crash and neglected to avoid such road crash be jointly held liable?",
    "options": [
      "Yes",
      "No",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "When parking, how many meters is allowed from the location of a fire hydrant?",
    "options": [
      "more than one meter of the fire hydrant",
      "more than four meters of the fire hydrant",
      "there is no regulation as to where to park around the fire hydrant"
    ],
    "answer": 1
  },
  {
    "question": "Driving a car, which lane should you use in a three (3) lane expressway during normal situation?",
    "options": [
      "1st lane",
      "2nd lane",
      "3rd lane"
    ],
    "answer": 1
  },
  {
    "question": "Is a driver allowed to drive on the transition lines?",
    "options": [
      "Yes",
      "No",
      "Yes, if traffic flow is heavy"
    ],
    "answer": 1
  },
  {
    "question": "What should you do if a pedestrian is crossing a non-signalized pedestrian lane?",
    "options": [
      "Stop and let the pedestrian cross",
      "Stop and blow horn",
      "Drive faster and do not wait for the pedestrian to cross"
    ],
    "answer": 0
  }
];
