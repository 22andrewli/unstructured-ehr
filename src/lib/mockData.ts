import type { EHRResult } from "@/components/ResultsTable";
import type { PatientRecord } from "@/components/PatientRecordsDialog";
import type { SearchGroup, GroupOperator } from "@/components/SearchBar";

// Mock EHR data for demonstration
const mockEHRDatabase = [
  {
    patientId: "PT-849271",
    notes: 12,
    texts: [
      `COMPREHENSIVE PROGRESS NOTE - INTERNAL MEDICINE

PATIENT: PT-849271
DATE OF SERVICE: January 15, 2024
PROVIDER: Dr. Sarah Mitchell, MD, FACP
VISIT TYPE: Follow-up visit for chronic disease management

CHIEF COMPLAINT: Patient presents for routine follow-up of Type 2 diabetes mellitus, uncontrolled, and hypertension management.

HISTORY OF PRESENT ILLNESS:
This is a 58-year-old male with a past medical history significant for Type 2 diabetes mellitus diagnosed 8 years ago, essential hypertension for 12 years, hyperlipidemia, and obesity (BMI 34.2) who presents today for routine follow-up of his chronic conditions. The patient reports intermittent compliance with his diabetes medications over the past three months, citing gastrointestinal side effects from Metformin including nausea and occasional diarrhea. He admits to dietary indiscretions, particularly during the holiday season, with increased consumption of carbohydrates and sugary beverages. He denies any episodes of hypoglycemia, polyuria, polydipsia, or unexplained weight loss. The patient reports checking his blood glucose at home approximately 2-3 times per week, with fasting readings ranging from 180-260 mg/dL.

Regarding his hypertension, the patient states he has been compliant with Lisinopril 20mg daily. He denies headaches, visual changes, chest pain, or shortness of breath. He does not monitor his blood pressure at home but reports feeling "fine" most days. He continues to smoke approximately half a pack of cigarettes daily, down from one pack previously. He consumes alcohol socially, approximately 2-3 drinks per week.

REVIEW OF SYSTEMS:
Constitutional: Denies fever, chills, night sweats, or unintentional weight changes.
HEENT: Denies vision changes, hearing loss, sore throat, or nasal congestion.
Cardiovascular: Denies chest pain, palpitations, orthopnea, or lower extremity edema.
Respiratory: Denies shortness of breath, cough, or wheezing.
Gastrointestinal: Reports intermittent nausea with Metformin. Denies abdominal pain, vomiting, diarrhea (other than medication-related), or constipation.
Genitourinary: Denies dysuria, hematuria, or urinary frequency.
Musculoskeletal: Reports occasional bilateral foot numbness and tingling, worse at night.
Neurological: Denies headaches, dizziness, syncope, or focal weakness.
Psychiatric: Denies depression, anxiety, or sleep disturbances.
Endocrine: Denies heat or cold intolerance, excessive thirst, or frequent urination.

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 148/94 mmHg (repeated: 144/92 mmHg), Heart rate 78 bpm, Respiratory rate 16, Temperature 98.4°F, SpO2 97% on room air, Weight 234 lbs, Height 5'10", BMI 33.6
General: Alert, oriented, well-developed male in no acute distress. Appears stated age.
HEENT: Normocephalic, atraumatic. Pupils equal, round, reactive to light. Extraocular movements intact. Fundoscopic exam reveals mild nonproliferative diabetic retinopathy bilaterally. Oral mucosa moist without lesions.
Neck: Supple, no lymphadenopathy, no thyromegaly, no JVD.
Cardiovascular: Regular rate and rhythm, normal S1 and S2, no murmurs, gallops, or rubs. No peripheral edema.
Respiratory: Clear to auscultation bilaterally, no wheezes, rhonchi, or rales.
Abdomen: Soft, non-tender, non-distended, normoactive bowel sounds, no hepatosplenomegaly.
Extremities: Warm and well-perfused, no cyanosis or clubbing. Pedal pulses 2+ bilaterally. Decreased sensation to monofilament testing on bilateral plantar surfaces.
Neurological: Cranial nerves II-XII intact. Motor strength 5/5 in all extremities. Decreased vibratory sensation in bilateral lower extremities.

LABORATORY DATA (obtained 3 days prior):
Hemoglobin A1c: 8.9% (elevated from 7.8% six months ago)
Fasting glucose: 245 mg/dL
Comprehensive metabolic panel: Sodium 141, Potassium 4.2, Chloride 102, CO2 24, BUN 22, Creatinine 1.1, eGFR 78, Glucose 238, Calcium 9.4
Lipid panel: Total cholesterol 224, LDL 142, HDL 38, Triglycerides 220
Urine microalbumin/creatinine ratio: 45 mg/g (mildly elevated)

ASSESSMENT AND PLAN:

1. Type 2 Diabetes Mellitus, Uncontrolled (E11.65)
Current HbA1c of 8.9% is above goal of <7.0%. Patient has evidence of early diabetic complications including mild nonproliferative retinopathy and peripheral neuropathy with microalbuminuria. Will increase Metformin to 1000mg BID if tolerated (currently on 500mg BID due to GI side effects). Adding Jardiance 10mg daily for additional glycemic control and cardio-renal protection given microalbuminuria. Discussed importance of dietary modifications and provided referral to diabetes educator and registered dietitian. Recommended blood glucose monitoring at least twice daily. Will recheck HbA1c in 3 months. Continue annual dilated eye exams with ophthalmology.

2. Essential Hypertension (I10)
Blood pressure remains above goal despite current therapy. Increasing Lisinopril to 40mg daily. Adding Amlodipine 5mg daily for additional blood pressure control. Goal BP <130/80 given diabetes. Recommended home blood pressure monitoring and provided instructions for proper technique. Counseled extensively on sodium restriction and DASH diet. Follow-up in 4 weeks to reassess blood pressure control.

3. Hyperlipidemia (E78.5)
LDL remains elevated at 142 mg/dL despite Atorvastatin 20mg daily. Given high cardiovascular risk with diabetes, target LDL should be <70 mg/dL. Increasing Atorvastatin to 40mg daily. Will recheck lipid panel in 6-8 weeks.

4. Diabetic Peripheral Neuropathy (E11.42)
Patient reports bilateral foot numbness and tingling consistent with diabetic peripheral neuropathy confirmed on exam with decreased sensation to monofilament and vibration. Starting Gabapentin 100mg TID, may titrate up as needed for symptom control. Counseled on daily foot inspections and proper footwear.

5. Tobacco Use Disorder (F17.210)
Patient continues to smoke despite multiple counseling sessions. Discussed smoking cessation options again including nicotine replacement therapy and Chantix. Patient declined pharmacotherapy at this time but agreed to reduce to 5 cigarettes daily as an intermediate goal.

PATIENT EDUCATION:
Extensive time spent counseling patient on the importance of glycemic control, blood pressure management, and lifestyle modifications. Discussed complications of uncontrolled diabetes including cardiovascular disease, nephropathy, retinopathy, and neuropathy. Patient verbalized understanding and agreed to improve medication compliance and dietary habits.

FOLLOW-UP:
Return to clinic in 4 weeks for blood pressure recheck. Lab work including comprehensive metabolic panel and HbA1c in 3 months. Referrals placed for diabetes education, nutrition counseling, and ophthalmology.

Electronically signed by: Dr. Sarah Mitchell, MD, FACP
Date/Time: January 15, 2024 at 14:32`,
      "Follow-up visit for diabetes management. HbA1c improved to 7.2% from 8.1%. Continue current regimen. Blood pressure stable at 128/82.",
    ],
  },
  {
    patientId: "PT-338492",
    notes: 8,
    texts: [
      "Chief complaint: chest pain and shortness of breath. Patient reports intermittent chest pain for 3 days. History includes hypertension and hyperlipidemia. ECG shows normal sinus rhythm.",
      `EMERGENCY DEPARTMENT PROGRESS NOTE

PATIENT: PT-338492
DATE/TIME OF ARRIVAL: January 10, 2024 at 18:45
DATE/TIME OF EVALUATION: January 10, 2024 at 19:02
PROVIDER: Dr. Michael Chen, MD, FACEP

CHIEF COMPLAINT: Chest pain and shortness of breath

HISTORY OF PRESENT ILLNESS:
This is a 62-year-old male with a past medical history significant for hypertension (diagnosed 15 years ago), hyperlipidemia, former tobacco use (quit 5 years ago, 30 pack-year history), and family history of coronary artery disease (father had MI at age 55) who presents to the emergency department with a chief complaint of chest pain and shortness of breath that started approximately 3 days ago but has acutely worsened over the past 6 hours.

The patient describes the chest pain as a substernal pressure sensation, rated 6/10 in intensity at its worst, which radiates to his left arm and jaw. The pain initially occurred only with exertion such as climbing stairs but has progressed to occurring at rest. He reports associated shortness of breath, particularly when lying flat, and has been sleeping on two pillows for the past two nights. He also endorses mild diaphoresis and nausea but denies vomiting. He took two aspirin at home before coming to the ED which provided minimal relief.

The patient denies any recent illness, fever, cough, hemoptysis, leg swelling, or recent travel. He has not had any previous episodes of chest pain like this. His last cardiac evaluation was 3 years ago with a normal stress echocardiogram. He reports being under increased work stress recently and has not been consistently taking his blood pressure and cholesterol medications.

PAST MEDICAL HISTORY:
1. Essential hypertension - diagnosed 2009
2. Hyperlipidemia - diagnosed 2012
3. Obesity - BMI 31
4. Osteoarthritis of bilateral knees
5. GERD

SURGICAL HISTORY:
1. Appendectomy - 1985
2. Right knee arthroscopy - 2018

MEDICATIONS:
1. Lisinopril 20mg daily (admits to poor compliance recently)
2. Atorvastatin 40mg daily (admits to poor compliance recently)
3. Omeprazole 20mg daily
4. Aspirin 81mg daily
5. Ibuprofen 400mg PRN for knee pain

ALLERGIES: Penicillin (rash)

FAMILY HISTORY:
Father: Deceased at 72, history of MI at age 55, hypertension, diabetes
Mother: Living, age 84, hypertension, osteoporosis
Brother: Age 58, hypertension, hyperlipidemia

SOCIAL HISTORY:
Former smoker, quit 5 years ago, 30 pack-year history. Occasional alcohol use, 1-2 drinks weekly. Denies illicit drug use. Works as an accountant. Married with two adult children. Sedentary lifestyle.

REVIEW OF SYSTEMS:
Constitutional: Denies fever, chills, or weight changes. Reports fatigue over past week.
Cardiovascular: Chest pain and dyspnea as per HPI. Denies palpitations or syncope.
Respiratory: Dyspnea on exertion and when lying flat. Denies cough or hemoptysis.
Gastrointestinal: Mild nausea, no vomiting, no abdominal pain.
All other systems reviewed and negative.

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 168/102 mmHg, Heart rate 92 bpm and regular, Respiratory rate 22, Temperature 98.6°F, SpO2 94% on room air (improved to 98% on 2L NC)
General: Alert, oriented, anxious-appearing male in mild distress, diaphoretic.
HEENT: Normocephalic, atraumatic. Mucous membranes moist.
Neck: No JVD, no carotid bruits, no lymphadenopathy.
Cardiovascular: Tachycardic, regular rhythm, S4 gallop noted, no murmurs or rubs. PMI nondisplaced.
Respiratory: Bilateral basilar crackles, no wheezes. Mild increased work of breathing.
Abdomen: Soft, non-tender, non-distended, normoactive bowel sounds.
Extremities: No lower extremity edema. Pulses 2+ bilaterally. No calf tenderness.
Neurological: Alert and oriented x3. No focal deficits.

DIAGNOSTIC STUDIES:
ECG (19:15): Normal sinus rhythm at 92 bpm. ST-segment depressions of 1mm in leads V4-V6 and II, III, aVF. No ST elevations. QTc 440ms.
Previous ECG from 2021 for comparison: Normal sinus rhythm, no ST changes.

Chest X-ray: Mild pulmonary vascular congestion. Cardiomegaly. No focal consolidation or pneumothorax.

Laboratory Results:
Troponin I (initial): 0.08 ng/mL (normal <0.04) - ELEVATED
Troponin I (3-hour): 0.24 ng/mL - RISING
BNP: 580 pg/mL (elevated)
CBC: WBC 9.2, Hgb 14.1, Plt 234
BMP: Na 140, K 4.1, Cl 101, CO2 23, BUN 18, Cr 1.0, Glucose 142
PT/INR: 12.1/1.0

EMERGENCY DEPARTMENT COURSE:
Upon arrival, patient was placed on cardiac monitor, IV access established, and supplemental oxygen initiated. Given aspirin 324mg (in addition to home dose), Plavix 600mg loading dose, Heparin bolus and drip initiated per ACS protocol. Atorvastatin 80mg administered. Nitroglycerin SL provided with improvement in chest pain from 6/10 to 3/10. Started on nitroglycerin drip at 10 mcg/min.

Cardiology consulted and patient accepted for admission to the CCU with plan for urgent cardiac catheterization in the morning given NSTEMI presentation with rising troponins and dynamic ECG changes.

ASSESSMENT:
1. Non-ST Elevation Myocardial Infarction (NSTEMI) - Elevated and rising troponins with dynamic ST changes on ECG
2. Acute decompensated heart failure - Elevated BNP, pulmonary congestion on CXR, orthopnea
3. Hypertensive urgency - BP 168/102, likely contributing to cardiac demand
4. Hyperlipidemia - Poorly controlled, contributing to CAD
5. Medication noncompliance - Contributing factor to acute presentation

PLAN:
1. Admit to CCU under Cardiology service (Dr. Patricia Williams accepting)
2. Continue ACS protocol: Aspirin, Plavix, Heparin drip, Atorvastatin 80mg
3. NPO after midnight for cardiac catheterization in AM
4. Nitroglycerin drip titrate to chest pain relief
5. Diurese with Lasix 40mg IV for pulmonary congestion
6. Beta-blocker held given potential for cath in AM
7. Serial troponins q6h
8. Continuous telemetry monitoring
9. Cardiology to determine need for urgent vs. next-day cath based on clinical trajectory
10. Social work consult for cardiac rehabilitation planning

DISPOSITION: Admitted to CCU
TIME OF DISPOSITION: 22:15
CONDITION AT DISPOSITION: Stable, improved chest pain, oxygen requirement decreased

Electronically signed by: Dr. Michael Chen, MD, FACEP
Date/Time: January 10, 2024 at 22:30`,
    ],
  },
  {
    patientId: "PT-571038",
    notes: 15,
    texts: [
      `ENDOCRINOLOGY CONSULTATION NOTE

PATIENT: PT-571038
DATE OF SERVICE: December 28, 2023
REQUESTING PHYSICIAN: Dr. Robert Taylor, MD (Primary Care)
CONSULTING PHYSICIAN: Dr. Amanda Foster, MD, FACE
REASON FOR CONSULTATION: Type 1 diabetes mellitus management, recurrent hypoglycemia

HISTORY OF PRESENT ILLNESS:
Thank you for this consultation regarding this 24-year-old female with Type 1 diabetes mellitus diagnosed at age 12 who has been experiencing recurrent episodes of hypoglycemia requiring intervention. The patient was referred for optimization of her insulin regimen and evaluation of hypoglycemia unawareness.

The patient reports a 12-year history of Type 1 diabetes, initially well-controlled through adolescence with an insulin pump. She transitioned to multiple daily injections (MDI) during college due to preference and has remained on this regimen. Her current insulin regimen consists of Lantus (insulin glargine) 20 units at bedtime and Humalog (insulin lispro) using a sliding scale with meals, typically ranging from 4-8 units depending on carbohydrate intake.

Over the past 6 months, the patient reports experiencing approximately 3-4 hypoglycemic episodes per week, defined as blood glucose <70 mg/dL. More concerning, she has had three severe hypoglycemic episodes in the past 3 months requiring assistance from others. The most recent episode occurred 2 weeks ago when she was found unresponsive by her roommate at 3 AM. Emergency medical services were called, and she received glucagon injection with blood glucose documented at 34 mg/dL. She was transported to the emergency department, treated with IV dextrose, and discharged after observation.

The patient admits that her ability to recognize hypoglycemic symptoms has diminished over the past year. She previously experienced classic adrenergic symptoms (tremor, sweating, palpitations) at glucose levels around 65-70 mg/dL but now often does not recognize symptoms until glucose is below 50 mg/dL. She reports that neuroglycopenic symptoms such as confusion and difficulty concentrating are often her first indication of low blood sugar.

Contributing factors identified include irregular meal timing due to her work schedule as a nurse (12-hour shifts with variable breaks), increased exercise (started training for a half marathon 4 months ago), and possible overcorrection of hyperglycemia. She denies alcohol abuse, eating disorder behaviors, or intentional insulin overdose. She checks her blood glucose 4-6 times daily using a fingerstick glucometer and does not currently use a continuous glucose monitor (CGM).

PAST MEDICAL HISTORY:
1. Type 1 diabetes mellitus - diagnosed age 12 (12-year duration)
2. Hypothyroidism - diagnosed age 19, on levothyroxine
3. Celiac disease - diagnosed age 14, adherent to gluten-free diet
4. Diabetic retinopathy - mild nonproliferative, stable on annual exams
5. Depression - managed, on sertraline

SURGICAL HISTORY:
None

MEDICATIONS:
1. Lantus 20 units subcutaneous at bedtime
2. Humalog sliding scale with meals (average 15-20 units total daily)
3. Levothyroxine 75 mcg daily
4. Sertraline 50 mg daily
5. Multivitamin daily

ALLERGIES: No known drug allergies

FAMILY HISTORY:
Mother: Type 2 diabetes, Hashimoto's thyroiditis
Father: Healthy
Maternal grandmother: Type 2 diabetes, deceased from stroke
No family history of Type 1 diabetes

SOCIAL HISTORY:
Works as a registered nurse on a medical-surgical unit, 12-hour rotating shifts. Single, lives with roommate. Denies tobacco use. Social alcohol use, 1-2 drinks on weekends. No illicit drug use. Active - running 15-20 miles/week training for half marathon.

REVIEW OF SYSTEMS:
Constitutional: Denies fever, chills. Reports fatigue, especially on days following hypoglycemic episodes.
Cardiovascular: Denies chest pain, palpitations (except during hypoglycemia).
Neurological: Reports episodes of confusion and dizziness with hypoglycemia. Denies numbness/tingling in extremities.
Psychiatric: Managed depression, stable on current medication. Reports anxiety related to fear of hypoglycemia, particularly overnight.
Endocrine: Cold intolerance (related to hypothyroidism, improved on levothyroxine). Denies heat intolerance or weight changes.
All other systems reviewed and negative.

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 112/68 mmHg, Heart rate 68 bpm, Weight 138 lbs, Height 5'6", BMI 22.3
General: Well-appearing, healthy young woman in no acute distress.
HEENT: No thyromegaly, no proptosis, moist mucous membranes.
Cardiovascular: Regular rate and rhythm, no murmurs.
Respiratory: Clear to auscultation bilaterally.
Abdomen: Soft, non-tender, no hepatosplenomegaly. Multiple insulin injection sites noted on abdomen, no lipohypertrophy.
Extremities: No edema, no skin changes. Injection sites on arms without lipohypertrophy.
Neurological: Alert and oriented, cranial nerves intact, sensation intact to monofilament bilaterally in feet.

LABORATORY REVIEW:
HbA1c (1 week ago): 6.2% (below target range, suggesting frequent hypoglycemia)
Fasting glucose: 78 mg/dL
C-peptide: <0.1 ng/mL (consistent with Type 1 DM)
TSH: 2.4 mIU/L (normal, well-controlled on levothyroxine)
Celiac panel: Negative (confirming dietary compliance)
Comprehensive metabolic panel: Within normal limits, Cr 0.8
Urine microalbumin/creatinine ratio: 15 mg/g (normal)

Patient's glucose log reviewed - demonstrates significant glycemic variability with readings ranging from 42-320 mg/dL over past 2 weeks. Nocturnal hypoglycemia documented on multiple occasions.

ASSESSMENT:
1. Type 1 Diabetes Mellitus with recurrent severe hypoglycemia (E10.649)
2. Hypoglycemia unawareness
3. Glycemic variability with HbA1c below target suggesting overtreatment
4. Hypothyroidism, well-controlled
5. Celiac disease, well-controlled

RECOMMENDATIONS:

1. INSULIN REGIMEN ADJUSTMENT:
- Reduce Lantus from 20 units to 16 units at bedtime to decrease nocturnal hypoglycemia risk
- Consider splitting basal insulin to 8 units BID (morning and bedtime) if nocturnal hypoglycemia persists
- Review carbohydrate-to-insulin ratios; current sliding scale may be too aggressive
- Implement structured carbohydrate counting with fixed ratios: start with 1:10 (1 unit per 10g carb) for meals
- Correction factor: 1 unit for every 40 mg/dL above 150 mg/dL (conservative to avoid overcorrection)
- Target pre-meal glucose: 100-150 mg/dL (higher than standard to restore hypoglycemia awareness)

2. CONTINUOUS GLUCOSE MONITORING (CGM):
- Strongly recommend initiation of CGM (Dexcom G7 or Libre 3) for real-time glucose monitoring and trend arrows
- CGM will provide alerts for impending hypoglycemia and help identify patterns
- Will assist with prior authorization paperwork for insurance

3. HYPOGLYCEMIA AWARENESS TRAINING:
- Goal: Strict avoidance of hypoglycemia for 2-3 weeks to restore counter-regulatory hormone response
- Temporarily accept higher blood glucose readings (target 120-180 mg/dL)
- Review symptoms of hypoglycemia and establish new recognition threshold
- Always treat glucose <100 mg/dL if feeling symptomatic

4. EXERCISE MANAGEMENT:
- Reduce basal insulin by 20% on days of long runs (>60 minutes)
- Consume 15-30g carbohydrates before exercise without insulin coverage
- Check glucose before, during (every 30-45 min), and after exercise
- Avoid exercise if glucose <100 mg/dL; consume carbs and recheck

5. EMERGENCY PREPAREDNESS:
- Prescribe Baqsimi (glucagon nasal powder) for emergency use by roommate/family
- Educate roommate and close contacts on recognition and treatment of severe hypoglycemia
- Recommend medical ID bracelet

6. FOLLOW-UP:
- Return to endocrinology in 4 weeks with 2-week glucose log (or CGM data if initiated)
- Will adjust regimen based on data
- Consider referral for insulin pump therapy if MDI optimization unsuccessful
- HbA1c goal: 6.5-7.5% with reduction in hypoglycemic episodes

DISCUSSION:
I spent 45 minutes with the patient discussing the assessment and recommendations above. We reviewed proper carbohydrate counting techniques, insulin dosing principles, and strategies for hypoglycemia prevention. The patient was receptive to recommendations and eager to improve her diabetes management while reducing hypoglycemic episodes. She expressed interest in CGM and potentially returning to insulin pump therapy in the future. We discussed that temporary acceptance of higher glucose readings is necessary to restore hypoglycemia awareness.

I have discussed this case with Dr. Taylor, the referring physician, and will coordinate care with his office.

Electronically signed by: Dr. Amanda Foster, MD, FACE
Date/Time: December 28, 2023 at 16:45`,
      "Diabetes education completed. Patient demonstrates proper insulin injection technique. Discussed carbohydrate counting and blood glucose monitoring.",
    ],
  },
  {
    patientId: "PT-692847",
    notes: 6,
    texts: [
      "New diagnosis of essential hypertension. Blood pressure readings consistently above 140/90. No evidence of end-organ damage. Starting Amlodipine 5mg daily.",
      `PRIMARY CARE FOLLOW-UP NOTE

PATIENT: PT-692847
DATE OF SERVICE: January 8, 2024
PROVIDER: Dr. Jennifer Walsh, MD

CHIEF COMPLAINT: Blood pressure follow-up and medication management

HISTORY OF PRESENT ILLNESS:
This is a 45-year-old female who returns to clinic today for follow-up of newly diagnosed essential hypertension. The patient was diagnosed 6 weeks ago after multiple elevated blood pressure readings were documented during a routine wellness visit and subsequent follow-up appointments. At that time, she was started on Amlodipine 5mg daily after lifestyle modification counseling.

Since starting the medication, the patient reports checking her blood pressure at home using an automated cuff approximately 3-4 times per week. She has recorded her readings in a log which she brings today. Home readings have ranged from 128-138 systolic and 80-88 diastolic, with an average of approximately 132/84 mmHg based on her records. This represents significant improvement from her pre-treatment readings which averaged 152/96 mmHg.

The patient reports tolerating Amlodipine well with no significant side effects. She denies ankle swelling, flushing, headaches, dizziness, or palpitations. She has made lifestyle modifications including reducing sodium intake (now cooking most meals at home, avoiding processed foods, reading nutrition labels), increasing physical activity (walking 30 minutes daily, 5 days per week), and limiting alcohol consumption to 1-2 glasses of wine on weekends. She has lost 4 pounds over the past 6 weeks through these modifications.

She denies chest pain, shortness of breath, visual changes, or any symptoms concerning for end-organ damage. She has no history of stroke, TIA, or peripheral vascular disease. Her father was diagnosed with hypertension in his 50s and had a stroke at age 72.

PAST MEDICAL HISTORY:
1. Essential hypertension - newly diagnosed (6 weeks ago)
2. Hyperlipidemia - diet controlled
3. Migraine headaches - occasional, managed with ibuprofen PRN
4. Anxiety - managed without medication

MEDICATIONS:
1. Amlodipine 5mg daily
2. Ibuprofen 400mg PRN headache (uses rarely, 1-2x/month)
3. Multivitamin daily

ALLERGIES: Sulfa (rash)

SOCIAL HISTORY:
Non-smoker, never smoker. Alcohol: 1-2 glasses wine on weekends. No illicit drugs. Works as a paralegal, sedentary job but now incorporating walking breaks. Married, two children ages 12 and 15. Regular sleep schedule, 7 hours nightly.

FAMILY HISTORY:
Father: Hypertension, stroke at age 72, type 2 diabetes
Mother: Hyperlipidemia, osteoporosis
No family history of premature cardiovascular disease (before age 55 in men, 65 in women)

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 132/84 mmHg (right arm, seated, after 5 minutes rest), repeated 130/82 mmHg. Heart rate 72 bpm, regular. Weight 168 lbs (down 4 lbs from last visit), Height 5'5", BMI 27.9
General: Well-appearing, comfortable, in no distress
HEENT: PERRLA, EOMI, no AV nicking or retinal hemorrhages on fundoscopic exam
Neck: No JVD, no carotid bruits, thyroid normal
Cardiovascular: Regular rate and rhythm, normal S1/S2, no murmurs, gallops, or rubs
Respiratory: Clear to auscultation bilaterally
Abdomen: Soft, non-tender, no masses, no renal bruits
Extremities: No peripheral edema, dorsalis pedis pulses 2+ bilaterally
Neurological: Alert and oriented, no focal deficits

LABORATORY RESULTS (obtained 4 weeks ago at initial diagnosis):
Basic metabolic panel: Na 140, K 4.0, Cl 102, CO2 25, BUN 14, Creatinine 0.9, Glucose 94
Lipid panel: Total cholesterol 215, LDL 128, HDL 58, Triglycerides 145
Urinalysis: No protein, no blood
EKG: Normal sinus rhythm, no LVH criteria

ASSESSMENT:
1. Essential Hypertension (I10) - improved with current therapy
   - Blood pressure at goal (<130/80 for primary prevention)
   - Good medication tolerance
   - Positive lifestyle modifications in place
   - Low 10-year ASCVD risk (calculated 3.2%)

PLAN:
1. Continue Amlodipine 5mg daily - well-tolerated and achieving blood pressure goals
2. Continue lifestyle modifications:
   - DASH diet principles with sodium restriction <2300mg daily
   - Regular aerobic exercise (current walking program excellent)
   - Weight loss goal: additional 10 lbs to achieve BMI <25
   - Limit alcohol to current levels
3. Continue home blood pressure monitoring 2-3x weekly
4. Discussed importance of medication compliance for long-term cardiovascular protection
5. Regarding hyperlipidemia: LDL 128 is borderline. Given low ASCVD risk, will continue diet modification. Consider statin therapy if LDL remains >130 at next visit or if other risk factors develop.
6. Limit ibuprofen use as NSAIDs can elevate blood pressure; switch to acetaminophen for headaches when possible
7. Follow-up in 3 months with repeat blood pressure check
8. Repeat comprehensive metabolic panel and lipid panel at next visit to monitor kidney function and cholesterol levels
9. Annual ophthalmologic exam recommended for hypertensive screening

PATIENT EDUCATION:
Discussed the importance of long-term blood pressure control for prevention of stroke, heart attack, kidney disease, and vision loss. Reviewed warning signs of hypertensive emergency (severe headache, vision changes, chest pain, shortness of breath) and advised to seek immediate care if these occur. Patient reports good medication compliance and expressed commitment to continuing lifestyle modifications. Questions answered, patient verbalized understanding of plan.

Return to clinic in 3 months or sooner if concerns arise.

Electronically signed by: Dr. Jennifer Walsh, MD
Date/Time: January 8, 2024 at 11:45`,
    ],
  },
  {
    patientId: "PT-104958",
    notes: 22,
    texts: [
      `MULTIDISCIPLINARY COMPLEX CARE NOTE

PATIENT: PT-104958
DATE OF SERVICE: January 12, 2024
PROVIDER: Dr. David Kang, MD (Internal Medicine/Complex Care)
CARE TEAM: Cardiology (Dr. Smith), Nephrology (Dr. Patel), Endocrinology (Dr. Lee)

REASON FOR VISIT: Comprehensive management of multiple chronic conditions

HISTORY OF PRESENT ILLNESS:
This is a 71-year-old male with a complex medical history including Type 2 diabetes mellitus, essential hypertension, chronic kidney disease stage 3b, heart failure with preserved ejection fraction (HFpEF), atrial fibrillation on anticoagulation, and peripheral arterial disease who presents for comprehensive chronic disease management appointment. This visit follows recent hospitalizations and multiple subspecialty consultations.

The patient was hospitalized 6 weeks ago for acute exacerbation of heart failure precipitated by dietary indiscretion (high sodium intake during holiday gatherings) and medication nonadherence. During that hospitalization, he required IV diuresis with Lasix, and his medication regimen was adjusted. He was discharged on increased doses of Lasix and Metolazone and was seen by cardiology in follow-up 2 weeks post-discharge.

Currently, the patient reports he is feeling "about 80% of his normal" with persistent mild fatigue and dyspnea with moderate exertion (climbing one flight of stairs, walking more than two blocks). He can perform activities of daily living independently but notes decreased exercise tolerance compared to his baseline 6 months ago. He denies orthopnea, paroxysmal nocturnal dyspnea, or lower extremity edema at this time. He weighs himself daily and reports stable weight over the past 2 weeks at approximately 198 lbs, down from 210 lbs at hospital admission.

Regarding his diabetes, the patient reports checking blood glucose 2-3 times daily with fasting readings in the 140-180 mg/dL range and post-meal readings up to 220 mg/dL. He was previously on Metformin which was discontinued during hospitalization due to acute kidney injury (creatinine peaked at 2.1). His endocrinologist has deferred Metformin reinitiation given persistent CKD stage 3b and is considering alternative agents.

The patient reports adherence to his medication regimen since discharge but acknowledges the complexity of his regimen (12+ medications) makes this challenging. He uses a pill organizer prepared by his daughter weekly. He has been following a low-sodium diet with help from his wife who prepares most meals. He estimates sodium intake of approximately 2000mg daily.

PAST MEDICAL HISTORY:
1. Type 2 diabetes mellitus - 18-year duration, with nephropathy and neuropathy
2. Essential hypertension - 25 years, on multiple agents
3. Chronic kidney disease Stage 3b (baseline eGFR 35-40, creatinine 1.6-1.8)
4. Heart failure with preserved ejection fraction (EF 55% on last echo)
5. Atrial fibrillation, permanent, rate-controlled
6. Peripheral arterial disease - status post left femoral-popliteal bypass 2019
7. Diabetic peripheral neuropathy - on gabapentin
8. Hyperlipidemia - on statin
9. Obesity - BMI 31
10. Osteoarthritis of bilateral knees
11. Benign prostatic hyperplasia
12. GERD
13. History of acute kidney injury (during recent hospitalization)

SURGICAL HISTORY:
1. Left femoral-popliteal bypass (2019)
2. Cholecystectomy (2005)
3. Bilateral cataract surgery (2020)
4. TURP for BPH (2015)

CURRENT MEDICATIONS:
1. Furosemide (Lasix) 80mg twice daily
2. Metolazone 2.5mg daily (take 30 min before morning Lasix)
3. Lisinopril 10mg daily (reduced from 20mg given CKD)
4. Carvedilol 12.5mg twice daily
5. Amlodipine 10mg daily
6. Eliquis 5mg twice daily (dose reduced for renal function)
7. Glipizide 10mg twice daily
8. Atorvastatin 40mg at bedtime
9. Gabapentin 300mg three times daily
10. Tamsulosin 0.4mg at bedtime
11. Omeprazole 20mg daily
12. Potassium chloride 20mEq daily
13. Aspirin 81mg daily
14. Vitamin D3 2000 IU daily

ALLERGIES: Codeine (nausea/vomiting), IV contrast (mild rash - premedicate if needed)

FAMILY HISTORY:
Father: Deceased age 68, MI
Mother: Deceased age 82, heart failure, diabetes
Brother: Living age 68, diabetes, hypertension, bypass surgery age 62

SOCIAL HISTORY:
Retired postal worker. Lives with wife of 48 years in single-story home. Has three adult children, one daughter lives nearby and assists with appointments and medication management. Former smoker - quit 25 years ago, 20 pack-year history. Denies alcohol use currently, social drinker in the past. No illicit drug use. Limited mobility, uses cane for stability. Has handicap parking permit.

REVIEW OF SYSTEMS:
Constitutional: Fatigue as described. Denies fever, chills, or night sweats. Weight stable.
Cardiovascular: Dyspnea on exertion as described. Denies chest pain, palpitations, or syncope. No lower extremity edema currently.
Respiratory: Dyspnea with exertion. Denies cough, wheezing, or hemoptysis.
Gastrointestinal: Decreased appetite, early satiety. Occasional constipation. Denies nausea, vomiting, or abdominal pain.
Genitourinary: Nocturia x2-3, improved from x5 prior to TURP. Denies dysuria or hematuria.
Musculoskeletal: Bilateral knee pain, chronic. Bilateral foot numbness/tingling.
Neurological: Neuropathic symptoms as above. Denies dizziness, headaches, or focal weakness.
Psychiatric: Occasional frustration with medical complexity. Denies depression or anxiety.

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 138/78 mmHg (seated, right arm), Heart rate 74 bpm (irregularly irregular), Respiratory rate 16, Temperature 97.8°F, SpO2 95% on room air, Weight 198 lbs (stable)
General: Elderly male, appears stated age, mildly fatigued-appearing but in no acute distress.
HEENT: Anicteric sclerae, moist mucous membranes, no JVD at 45 degrees (down from 10cm during admission)
Cardiovascular: Irregularly irregular rhythm, normal S1/S2, I/VI systolic murmur at apex (unchanged), no S3 or rub. PMI nondisplaced.
Respiratory: Clear to auscultation bilaterally, no wheezes or crackles. Good air movement.
Abdomen: Soft, non-distended, non-tender, normoactive bowel sounds, no hepatomegaly.
Extremities: No peripheral edema. Left lower extremity with well-healed surgical scar, palpable dorsalis pedis pulse (1+). Right DP pulse 2+. Mild venous stasis changes bilaterally.
Neurological: Alert and oriented x3. Cranial nerves intact. Decreased sensation to monofilament bilateral feet (diabetic neuropathy pattern).

LABORATORY RESULTS (obtained 3 days ago):
BMP: Na 138, K 4.6, Cl 100, CO2 24, BUN 38, Creatinine 1.7, eGFR 38, Glucose 156
CBC: WBC 6.8, Hgb 11.2 (baseline 11-12), Plt 198
BNP: 420 pg/mL (down from 1,850 at admission, baseline ~300)
HbA1c: 8.5% (up from 7.8% six months ago)
Lipid panel: Total cholesterol 168, LDL 82, HDL 42, Triglycerides 220
Urinalysis: Protein 100mg/dL, no blood
Urine albumin/creatinine ratio: 380 mg/g (elevated, diabetic nephropathy)
Iron studies: Ferritin 85, TIBC 320, Iron 55, Saturation 17% (low normal)
PTH: 78 pg/mL (slightly elevated, secondary hyperparathyroidism of CKD)

RECENT STUDIES:
Echocardiogram (during hospitalization, 6 weeks ago): EF 55%, grade II diastolic dysfunction, mild MR, moderate LAE, no pericardial effusion
Renal ultrasound (4 months ago): Bilateral kidneys normal in size, no hydronephrosis, increased echogenicity consistent with medical renal disease

ASSESSMENT AND PLAN:

1. HEART FAILURE WITH PRESERVED EJECTION FRACTION (I50.32)
- Currently compensated, improved from acute exacerbation
- BNP trending down, no current volume overload on exam
- Continue current diuretic regimen: Lasix 80mg BID + Metolazone 2.5mg daily
- Continue beta-blocker and ACE-inhibitor for HFpEF management
- Daily weights; call if weight increases >3 lbs in 1-2 days
- Sodium restriction <2g daily, fluid restriction 2L daily
- Follow-up with Cardiology (Dr. Smith) in 4 weeks
- Consider SGLT2 inhibitor (per cardiology) given dual benefit for HF and diabetes

2. CHRONIC KIDNEY DISEASE, STAGE 3B (N18.4)
- eGFR 38, improved from AKI during hospitalization (eGFR nadir ~28)
- Significant albuminuria (UACR 380) indicating diabetic nephropathy
- Continue ACE-inhibitor for nephroprotection (monitor K closely given CKD)
- Metformin remains held; do not restart with current eGFR
- Avoid NSAIDs and nephrotoxins
- Consider SGLT2 inhibitor for nephroprotection (pending cardiology input)
- Follow-up with Nephrology (Dr. Patel) in 6 weeks for CKD management
- Monitor for anemia of CKD (Hgb 11.2, stable)
- Vitamin D supplementation continued; may need active vitamin D if PTH rises further

3. TYPE 2 DIABETES MELLITUS, WITH COMPLICATIONS (E11.65)
- HbA1c 8.5%, above goal, worsening glycemic control
- Metformin contraindicated with current kidney function
- Continue Glipizide 10mg BID but monitor for hypoglycemia (risk increased in CKD)
- Discussed with Endocrinology (Dr. Lee) - recommendation to start SGLT2 inhibitor (Jardiance 10mg daily) for glycemic control, cardio-renal protection
  - Will coordinate with Cardiology given overlapping benefit for HFpEF
  - Patient counseled on SGLT2i risks: genital infections, volume depletion
  - Check glucose more frequently during initiation
- Target HbA1c 7.5-8.0% given age, comorbidities, hypoglycemia risk
- Diabetic foot care reinforced; annual podiatry visit scheduled
- Annual ophthalmology exam - overdue, referral placed

4. ATRIAL FIBRILLATION (I48.91)
- Rate controlled on Carvedilol
- Anticoagulated with Eliquis 5mg BID (dose appropriate for age and renal function)
- CHA2DS2-VASc score 5 (high stroke risk, anticoagulation indicated)
- HAS-BLED score 3 (moderate bleeding risk, continue anticoagulation with monitoring)
- Continue current regimen

5. PERIPHERAL ARTERIAL DISEASE (I73.9)
- Status post left femoral-popliteal bypass 2019, patent on last duplex
- Continue aspirin 81mg daily and statin therapy
- Supervised walking program recommended but limited by deconditioning
- Refer to cardiac rehabilitation for supervised exercise program

6. HYPERTENSION (I10)
- Blood pressure 138/78, acceptable given multiple comorbidities and orthostatic risk
- Target <140/90 given age and fall risk
- Continue current multi-drug regimen; avoid further intensification given kidney function

7. MEDICATION RECONCILIATION AND COMPLEXITY
- Patient on 14 medications; high pill burden and polypharmacy concerns
- Reviewed all medications with patient and daughter
- Deprescribed: Omeprazole (no clear indication, possible long-term harm) - will trial H2 blocker if needed
- Daughter will continue to prepare weekly pill organizer
- Pharmacy consulted for medication synchronization (all refills aligned)

PATIENT EDUCATION:
Spent 40 minutes with patient and his daughter discussing his multiple conditions, medication regimen, warning signs requiring medical attention (weight gain, worsening shortness of breath, chest pain, decreased urine output), and importance of dietary adherence. Provided written instructions for daily weight monitoring and when to call the office. Discussed goals of care given complexity of illness; patient wishes to remain active and independent as long as possible.

COORDINATION OF CARE:
- Cardiology follow-up scheduled 4 weeks
- Nephrology follow-up scheduled 6 weeks  
- Endocrinology follow-up scheduled 8 weeks
- Will obtain prior authorization for SGLT2 inhibitor
- Cardiac rehabilitation referral placed
- Ophthalmology referral placed
- Labs (BMP, CBC) to be repeated in 2 weeks

FOLLOW-UP:
Return to complex care clinic in 8 weeks, or sooner if concerns arise. Patient and daughter have direct phone number to nurse care coordinator for questions.

Electronically signed by: Dr. David Kang, MD
Date/Time: January 12, 2024 at 15:30`,
      "Renal function stable. eGFR 45 mL/min. Diabetes control suboptimal with HbA1c 8.5%. Adjusting medications to improve glycemic control while protecting kidney function.",
    ],
  },
  {
    patientId: "PT-827364",
    notes: 4,
    texts: [
      "Annual wellness visit. Patient reports occasional headaches and fatigue. Blood pressure elevated at 148/92. No prior diagnosis of hypertension. Recommend lifestyle modifications and follow-up.",
    ],
  },
  {
    patientId: "PT-445623",
    notes: 10,
    texts: [
      `NEUROLOGY CONSULTATION NOTE

PATIENT: PT-445623
DATE OF SERVICE: January 5, 2024
REFERRING PHYSICIAN: Dr. Karen Murphy, MD (Primary Care)
CONSULTING PHYSICIAN: Dr. Christopher Huang, MD, PhD (Neurology)
REASON FOR CONSULTATION: Evaluation of diabetic peripheral neuropathy and neuropathic pain

HISTORY OF PRESENT ILLNESS:
Thank you for referring this 67-year-old male with a 15-year history of Type 2 diabetes mellitus who presents for evaluation of progressive peripheral neuropathy symptoms affecting bilateral lower extremities. The patient reports a 3-year history of numbness and tingling in his feet, which has gradually progressed over time and now significantly impacts his quality of life.

The patient describes the symptoms as beginning in his toes and gradually extending to involve the entire feet and now reaching the mid-calf level bilaterally. He characterizes the sensation as "pins and needles" and "like walking on cotton" with associated numbness. In addition to sensory symptoms, he reports developing burning pain in his feet over the past 18 months, rated 5-7/10 in severity, which is worse at night and often interferes with sleep. He also notes occasional "electric shock" sensations shooting through his feet. The symptoms are constant but vary in intensity throughout the day.

He has tried over-the-counter lidocaine patches with minimal relief and uses ibuprofen occasionally, which does not help the neuropathic pain. He has not tried prescription neuropathic pain medications. He denies weakness in his legs but acknowledges balance difficulties, particularly in low-light conditions. He has had two falls in the past year, both without injury, attributed to not feeling the ground properly. He now uses a nightlight to navigate to the bathroom.

The patient reports that his diabetes control has been suboptimal over the past several years, with most recent HbA1c of 7.8%, improved from 8.5% one year ago after intensification of his diabetes regimen. He checks his feet daily for wounds as instructed and has not had any foot ulcers or infections. He sees a podiatrist annually.

He denies symptoms of autonomic neuropathy including gastroparesis, orthostatic hypotension, urinary retention, or erectile dysfunction. He denies symptoms suggestive of mononeuropathy or radiculopathy. He has no history of alcohol abuse, B12 deficiency, thyroid disease, or other conditions associated with peripheral neuropathy.

PAST MEDICAL HISTORY:
1. Type 2 diabetes mellitus - diagnosed 15 years ago, on oral agents and basal insulin
2. Diabetic peripheral neuropathy - progressive over 3 years
3. Diabetic retinopathy - mild nonproliferative, followed by ophthalmology
4. Hypertension - controlled on medication
5. Hyperlipidemia - on statin
6. Obesity - BMI 32
7. Obstructive sleep apnea - on CPAP
8. Chronic low back pain - degenerative disc disease per MRI 2020
9. History of deep vein thrombosis (2015) - completed anticoagulation, provoked by surgery

SURGICAL HISTORY:
1. Right total knee arthroplasty (2015)
2. Appendectomy (1980)

MEDICATIONS:
1. Metformin 1000mg twice daily
2. Glipizide 10mg twice daily
3. Lantus insulin 25 units at bedtime
4. Lisinopril 20mg daily
5. Atorvastatin 40mg at bedtime
6. Aspirin 81mg daily
7. Omeprazole 20mg daily
8. Ibuprofen 400mg as needed (uses 2-3x weekly)
9. Lidocaine 4% patch as needed (minimal effect)

ALLERGIES: No known drug allergies

FAMILY HISTORY:
Father: Type 2 diabetes, died of stroke at age 70
Mother: Hypertension, died of heart failure at age 78
Sister: Type 2 diabetes, peripheral neuropathy
No family history of hereditary neuropathy

SOCIAL HISTORY:
Retired high school teacher. Lives with wife. Non-smoker (never). Former social drinker, quit alcohol 10 years ago when diagnosed with diabetes - prior intake was 2-3 drinks weekly. No illicit drug use. Uses CPAP nightly with good compliance. Limited mobility due to knee arthritis and neuropathy; uses cane occasionally.

REVIEW OF SYSTEMS:
Constitutional: Occasional fatigue. No fever, chills, or weight loss.
HEENT: Wears glasses, last eye exam 6 months ago.
Cardiovascular: No chest pain, palpitations, or orthostatic symptoms.
Respiratory: No dyspnea. Uses CPAP for OSA.
Gastrointestinal: No nausea, vomiting, dysphagia, or constipation.
Genitourinary: Normal urinary function. No erectile dysfunction.
Musculoskeletal: Chronic low back pain. Bilateral knee arthritis (right TKA done).
Neurological: Neuropathy symptoms as detailed. Denies headaches, dizziness, vision changes, weakness, or coordination difficulties beyond balance issues from neuropathy.
Psychiatric: No depression or anxiety.

PHYSICAL EXAMINATION:
Vital Signs: Blood pressure 134/78 mmHg, Heart rate 72 bpm, Weight 245 lbs, Height 5'11", BMI 34.2
General: Well-appearing, overweight male in no acute distress
Mental Status: Alert, oriented x3, appropriate affect, normal speech, memory and attention intact
Cranial Nerves: II-XII intact. Visual fields full. Pupils reactive. EOM intact. Facial strength and sensation symmetric. Hearing intact. Palate elevates symmetrically. Tongue midline. Shoulder shrug symmetric.

Motor Examination:
- Bulk: Normal throughout
- Tone: Normal throughout
- Strength (MRC scale):
  - Upper extremities: Deltoids 5/5 bilaterally, biceps 5/5, triceps 5/5, wrist extension/flexion 5/5, grip 5/5, finger abduction 5/5
  - Lower extremities: Hip flexion 5/5, knee extension 5/5, knee flexion 5/5, ankle dorsiflexion 4+/5 bilaterally (mild weakness), ankle plantarflexion 5/5, great toe extension 4/5 bilaterally
- No fasciculations, no atrophy

Sensory Examination:
- Light touch: Decreased below knees bilaterally, absent on plantar surfaces of feet
- Pinprick: Decreased below mid-calf bilaterally, absent on feet
- Vibration (128 Hz tuning fork): Absent at great toes and ankles bilaterally, present at knees
- Proprioception: Impaired at great toes bilaterally (3 of 5 correct), intact at ankles
- Monofilament (10g): Not perceived on plantar surfaces of feet bilaterally at any test point

Deep Tendon Reflexes:
- Biceps 2+ bilaterally
- Triceps 2+ bilaterally  
- Brachioradialis 2+ bilaterally
- Patellar 1+ bilaterally
- Achilles absent bilaterally

Coordination: Finger-to-nose intact. Heel-to-shin mildly impaired bilaterally (sensory ataxia)
Gait: Antalgic gait, widened base, uses cane. Romberg positive. Unable to perform tandem gait.
Foot examination: Skin intact, no ulcerations or calluses. Dry skin, decreased hair on distal legs. No Charcot deformities. Pedal pulses 2+ bilaterally.

ELECTRODIAGNOSTIC STUDIES:
Nerve conduction studies and electromyography were performed today.

Motor nerve conduction studies:
- Bilateral peroneal motor nerves: Prolonged distal latencies, reduced amplitudes, slowed conduction velocities
- Bilateral tibial motor nerves: Prolonged distal latencies, reduced amplitudes, slowed conduction velocities
- Upper extremity motor studies: Normal

Sensory nerve conduction studies:
- Bilateral sural nerves: Absent responses
- Bilateral superficial peroneal nerves: Absent responses
- Upper extremity sensory studies: Normal amplitudes with mildly prolonged latencies

EMG:
- Tibialis anterior: Mild chronic denervation changes (reduced recruitment, increased amplitude/duration of motor unit potentials)
- Gastrocnemius: Mild chronic denervation changes
- Proximal muscles and upper extremity muscles: Normal

Interpretation: Findings are consistent with a length-dependent, axonal-predominant sensorimotor polyneuropathy affecting the lower extremities, most consistent with diabetic peripheral neuropathy.

LABORATORY REVIEW:
HbA1c: 7.8%
Fasting glucose: 145 mg/dL
Vitamin B12: 485 pg/mL (normal)
TSH: 2.1 mIU/L (normal)
Serum protein electrophoresis: No monoclonal protein
Comprehensive metabolic panel: Normal renal and liver function
CBC: Normal

ASSESSMENT:
1. Diabetic Peripheral Neuropathy, painful (E11.42)
   - 15-year history of diabetes with progressive length-dependent sensorimotor polyneuropathy
   - Electrodiagnostic studies confirm axonal sensorimotor polyneuropathy
   - Significant functional impairment with balance difficulty and neuropathic pain
   - High risk for foot ulceration given absent monofilament sensation

2. Neuropathic Pain - uncontrolled, impacting sleep quality

3. Falls risk - due to sensory ataxia and proprioceptive loss

RECOMMENDATIONS:

1. NEUROPATHIC PAIN MANAGEMENT:
Starting Gabapentin 100mg three times daily with meals. Will titrate gradually as follows:
- Week 1-2: 100mg TID
- Week 3-4: 200mg TID  
- Week 5-6: 300mg TID
- May increase to 400mg TID if needed and tolerated
- Maximum dose 600mg TID if necessary for pain control
- Monitor for sedation, dizziness, peripheral edema
- Avoid abrupt discontinuation

Alternative agents to consider if gabapentin ineffective or not tolerated:
- Duloxetine 30-60mg daily
- Pregabalin 75-150mg BID
- Topical capsaicin 8% (Qutenza) - may consider for refractory cases

2. GLYCEMIC CONTROL:
- Optimal glucose control is essential to slow neuropathy progression
- Encourage continued improvement in HbA1c toward goal of <7%
- Refer to diabetes educator for reinforcement of management strategies
- Avoid hypoglycemia which can worsen neuropathy

3. FALL PREVENTION:
- Physical therapy referral for gait training, balance exercises, and strengthening
- Occupational therapy for home safety evaluation
- Assistive device optimization (current cane use is appropriate)
- Nightlights in hallways and bathroom (patient already using)
- Remove throw rugs and clutter
- Consider grab bars in bathroom

4. FOOT CARE:
- Continue daily foot inspections with mirror for plantar surfaces
- Continue annual podiatry visits, may need more frequent given severity
- Proper fitting footwear with wide toe box
- Avoid going barefoot
- Immediate evaluation for any cuts, blisters, or skin changes
- Patient is HIGH RISK for foot ulceration

5. DISCONTINUE IBUPROFEN:
- NSAIDs do not treat neuropathic pain effectively and pose renal/cardiovascular risks
- Use acetaminophen for any non-neuropathic pain needs

6. FOLLOW-UP:
- Return to neurology in 8 weeks to assess response to gabapentin
- Repeat nerve conduction studies in 12 months to monitor progression
- Call clinic for significant side effects or inadequate pain relief

I discussed these findings and recommendations in detail with the patient and his wife. The patient understands that diabetic neuropathy is a chronic condition that may progress but that symptoms can be managed. He is motivated to improve his diabetes control and agrees to start gabapentin therapy. Written instructions provided.

Thank you for this interesting consultation. Please do not hesitate to contact me with questions.

Electronically signed by: Dr. Christopher Huang, MD, PhD
Date/Time: January 5, 2024 at 17:15`,
      "Chest pain evaluation: Patient experienced acute chest pain during exercise. Troponins negative. EKG unremarkable. Likely angina - referring to cardiology.",
    ],
  },
  {
    patientId: "PT-913745",
    notes: 7,
    texts: [
      "Gestational diabetes screening positive. Patient at 26 weeks gestation. Fasting glucose 105 mg/dL. Starting dietary modifications and glucose monitoring. Will reassess in 2 weeks.",
      "Follow-up for gestational diabetes. Blood sugars well controlled with diet alone. Fasting average 92 mg/dL. Continue current management.",
    ],
  },
];

function findTermMatches(
  text: string,
  terms: string[]
): { start: number; end: number; term: string }[] {
  const highlights: { start: number; end: number; term: string }[] = [];
  
  terms.forEach((term) => {
    const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      highlights.push({
        start: match.index,
        end: match.index + match[0].length,
        term: term,
      });
    }
  });

  // Sort and merge overlapping highlights
  highlights.sort((a, b) => a.start - b.start);
  
  return highlights;
}

function textMatchesGroup(text: string, group: SearchGroup): boolean {
  const textLower = text.toLowerCase();
  return group.terms.some(term => textLower.includes(term.toLowerCase()));
}

function evaluateGroupsOnText(
  text: string, 
  groups: SearchGroup[], 
  operators: GroupOperator[]
): boolean {
  if (groups.length === 0) return false;
  if (groups.length === 1) return textMatchesGroup(text, groups[0]);

  // Start with the first group's result
  let result = textMatchesGroup(text, groups[0]);

  // Apply each operator with the next group
  for (let i = 0; i < operators.length; i++) {
    const nextGroupMatch = textMatchesGroup(text, groups[i + 1]);
    const operator = operators[i];

    switch (operator) {
      case "INCLUDING":
        // Both must match (AND)
        result = result && nextGroupMatch;
        break;
      case "OR":
        // Either can match
        result = result || nextGroupMatch;
        break;
      case "EXCLUDING":
        // First must match, second must NOT match (AND NOT)
        result = result && !nextGroupMatch;
        break;
    }
  }

  return result;
}

function getAllTermsFromGroups(groups: SearchGroup[]): string[] {
  return groups.flatMap(group => group.terms);
}

export function searchEHRs(
  groups: SearchGroup[],
  operators: GroupOperator[]
): {
  results: EHRResult[];
  stats: {
    patientCount: number;
    noteCount: number;
    avgNotesPerPatient: number;
  };
} {
  if (groups.length === 0) {
    return {
      results: [],
      stats: { patientCount: 0, noteCount: 0, avgNotesPerPatient: 0 },
    };
  }

  const allTerms = getAllTermsFromGroups(groups);
  const matchedResults: EHRResult[] = [];
  const matchedPatients = new Set<string>();
  let totalNotes = 0;

  mockEHRDatabase.forEach((patient) => {
    patient.texts.forEach((text) => {
      const isMatch = evaluateGroupsOnText(text, groups, operators);

      if (isMatch) {
        const highlights = findTermMatches(text, allTerms);
        
        if (highlights.length > 0) {
          matchedResults.push({
            patientId: patient.patientId,
            matchedText: text,
            highlights,
            totalNotes: patient.notes,
          });
          
          if (!matchedPatients.has(patient.patientId)) {
            matchedPatients.add(patient.patientId);
            totalNotes += patient.notes;
          }
        }
      }
    });
  });

  const patientCount = matchedPatients.size;
  
  return {
    results: matchedResults,
    stats: {
      patientCount,
      noteCount: totalNotes,
      avgNotesPerPatient: patientCount > 0 
        ? Math.round((totalNotes / patientCount) * 10) / 10 
        : 0,
    },
  };
}

// Get all records for a specific patient
export function getPatientRecords(patientId: string): PatientRecord[] {
  const patient = mockEHRDatabase.find(p => p.patientId === patientId);
  
  if (!patient) return [];
  
  // Generate mock dates for each note
  const baseDate = new Date('2024-01-15');
  
  return patient.texts.map((text, index) => {
    const noteDate = new Date(baseDate);
    noteDate.setDate(baseDate.getDate() - (patient.texts.length - 1 - index) * 45);
    
    return {
      noteIndex: index + 1,
      text,
      date: noteDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };
  });
}
