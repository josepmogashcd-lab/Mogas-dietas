/* Traducciones de la tabla de alimentos y de «Mis alimentos» (CA · EN) */
(function(){
const T = {
"Fruta":["Fruites","Fruit"],"Verduras y hortalizas":["Verdures i hortalisses","Vegetables"],"Legumbres":["Llegums","Legumes"],"Carne":["Carn","Meat"],"Pescado":["Peix","Fish"],"Marisco":["Marisc","Shellfish"],"Frutos secos":["Fruits secs","Nuts"],"Varios":["Varis","Other"],
"Albaricoque":["Albercoc","Apricot"],"Aguacate":["Alvocat","Avocado"],"Cereza":["Cirera","Cherry"],"Coco":["Coco","Coconut"],"Dátil":["Dàtil","Date"],"Higo":["Figa","Fig"],"Kiwi":["Kiwi","Kiwi"],"Limón":["Llimona","Lemon"],"Fresa":["Maduixa","Strawberry"],"Mandarina":["Mandarina","Mandarin"],"Mango":["Mango","Mango"],"Melón":["Meló","Melon"],"Arándanos":["Nabius","Blueberries"],"Pera":["Pera","Pear"],"Piña":["Pinya","Pineapple"],"Plátano":["Plàtan","Banana"],"Manzana":["Poma","Apple"],"Melocotón":["Préssec","Peach"],"Ciruela":["Pruna","Plum"],"Uva":["Raïm","Grapes"],"Sandía":["Síndria","Watermelon"],"Naranja":["Taronja","Orange"],"Batidos de frutas":["Batuts de fruita","Fruit smoothies"],
"Berenjena":["Albergínia","Aubergine"],"Ajo":["All","Garlic"],"Brócoli":["Bròquil","Broccoli"],"Calabacín":["Carbassó","Courgette"],"Alcachofa":["Carxofa","Artichoke"],"Cebolla":["Ceba","Onion"],"Pepino":["Cogombre","Cucumber"],"Col":["Col","Cabbage"],"Coliflor":["Coliflor","Cauliflower"],"Lechuga":["Enciam","Lettuce"],"Endivia":["Endívia","Endive"],"Escarola":["Escarola","Escarole"],"Espárrago":["Espàrrec","Asparagus"],"Espinaca":["Espinac","Spinach"],"Yuca":["Iuca","Cassava"],"Judía tierna":["Mongeta tendra","Green beans"],"Boniato":["Moniato","Sweet potato"],"Zanahoria":["Pastanaga","Carrot"],"Patata":["Patata","Potato"],"Pimiento":["Pebrot","Pepper"],"Puerro":["Porro","Leek"],"Remolacha":["Remolatxa","Beetroot"],"Tomate":["Tomàquet","Tomato"],"Calabaza":["Carbassa","Pumpkin"],"Gazpacho":["Gaspatxo","Gazpacho"],"Crema de verduras":["Crema de verdures","Vegetable soup"],
"Garbanzos":["Cigrons","Chickpeas"],"Lentejas":["Llenties","Lentils"],"Judías":["Mongetes","Beans"],"Soja":["Soja","Soy"],"Guisantes":["Pèsols","Peas"],
"Potro":["Cavall","Horse meat"],"Conejo":["Conill","Rabbit"],"Pavo":["Gall dindi","Turkey"],"Pollo":["Pollastre","Chicken"],"Cerdo":["Porc","Pork"],"Ternera":["Vedella","Beef"],"Cordero":["Xai","Lamb"],"Jamón ibérico":["Pernil ibèric","Iberian ham"],"Lonchas de pavo":["Llesques de gall dindi","Sliced turkey"],"Lomo embuchado":["Llom embotit","Cured pork loin"],"Jamón dulce":["Pernil dolç","Cooked ham"],
"Salmón":["Salmó","Salmon"],"Atún":["Tonyina","Tuna"],"Sardina":["Sardina","Sardine"],"Anguila":["Anguila","Eel"],"Besugo":["Besuc","Sea bream (besugo)"],"Dorada":["Orada","Gilt-head bream"],"Merluza":["Lluç","Hake"],"Rape":["Rap","Monkfish"],"Lenguado":["Llenguado","Sole"],"Bacalao":["Bacallà","Cod"],"Lubina":["Llobarro","Sea bass"],
"Almejas":["Cloïsses","Clams"],"Berberechos":["Escopinyes","Cockles"],"Langosta":["Llagosta","Lobster"],"Cangrejo":["Cranc","Crab"],"Gambas":["Gambes","Prawns"],"Cigala":["Escamarlà","Langoustine"],"Calamar":["Calamar","Squid"],"Sepia":["Sípia","Cuttlefish"],"Navajas":["Navalles","Razor clams"],"Pulpo":["Pop","Octopus"],"Mejillones":["Musclos","Mussels"],"Ostras":["Ostres","Oysters"],
"Almendras":["Ametlles","Almonds"],"Avellanas":["Avellanes","Hazelnuts"],"Anacardos":["Anacards","Cashews"],"Cacahuetes":["Cacauets","Peanuts"],"Pistachos":["Festucs","Pistachios"],"Nueces":["Nous","Walnuts"],
"Arroz":["Arròs","Rice"],"Pasta":["Pasta","Pasta"],"Quinoa":["Quinoa","Quinoa"],"Huevos":["Ous","Eggs"],"Setas":["Bolets","Mushrooms"],"Maíz":["Blat de moro","Sweetcorn"],"Pan":["Pa","Bread"],"Pan integral":["Pa integral","Wholemeal bread"],"Leche":["Llet","Milk"],"Queso":["Formatge","Cheese"],"Yogur":["Iogurt","Yogurt"],"Cereales":["Cereals","Cereal"],"Avena":["Civada","Oats"],"Bebida vegetal":["Beguda vegetal","Plant-based drink"],"Olivas":["Olives","Olives"],"Tofu":["Tofu","Tofu"],"Seitán":["Seitan","Seitan"],"Heura":["Heura","Heura"],"Chocolate +#%":["Xocolata +#%","Chocolate +#%"],"Tortitas de arroz o maíz":["Galetes d'arròs o blat de moro","Rice or corn cakes"],
"🥦 Mis alimentos":["🥦 Els meus aliments","🥦 My foods"],"Mis alimentos":["Els meus aliments","My foods"],
"🥦 Mis alimentos (no me gustan / intolerancias)":["🥦 Els meus aliments (no m'agraden / intoleràncies)","🥦 My foods (dislikes / intolerances)"],
"Antes de empezar, tu nutricionista necesita saber qué alimentos no te gustan o no te sientan bien, para preparar tu dieta.":["Abans de començar, el teu nutricionista necessita saber quins aliments no t'agraden o no et senten bé, per preparar la teva dieta.","Before you start, your nutritionist needs to know which foods you don't like or that don't agree with you, to prepare your diet."],
"Toca un alimento":["Toca un aliment","Tap a food"],"una vez":["un cop","once"],"si no te gusta (👎) y":["si no t'agrada (👎) i","if you don't like it (👎) and"],"otra vez":["un altre cop","again"],
"si tienes intolerancia o te sienta mal (🚫). Una tercera vez lo deja como estaba. Los que marques no te saldrán en la dieta.":["si hi tens intolerància o et sent malament (🚫). Una tercera vegada el deixa com estava. Els que marquis no et sortiran a la dieta.","if you're intolerant to it or it doesn't agree with you (🚫). A third tap puts it back. The ones you mark won't appear in your diet."],
"Me gusta":["M'agrada","I like it"],"👎 No me gusta":["👎 No m'agrada","👎 I don't like it"],"🚫 Intolerancia o me sienta mal":["🚫 Intolerància o em sent malament","🚫 Intolerant or doesn't agree with me"],
"Marcados: # 👎 · # 🚫":["Marcats: # 👎 · # 🚫","Marked: # 👎 · # 🚫"],"Todavía no has marcado ninguno.":["Encara no n'has marcat cap.","You haven't marked any yet."],
"📤 Guardar y enviar a mi nutricionista":["📤 Guardar i enviar al meu nutricionista","📤 Save and send to my nutritionist"],"✅ Guardar":["✅ Guardar","✅ Save"],
"📤 Enviar a mi nutricionista":["📤 Enviar al meu nutricionista","📤 Send to my nutritionist"],"🥦 Revisar mis alimentos":["🥦 Revisar els meus aliments","🥦 Review my foods"],
"✅ Guardado. Tu dieta ya no te propondrá los alimentos que has marcado.":["✅ Guardat. La teva dieta ja no et proposarà els aliments que has marcat.","✅ Saved. Your diet won't suggest the foods you've marked any more."],
"Si no se ha abierto WhatsApp, vuelve a pulsar «Enviar a mi nutricionista».":["Si no s'ha obert WhatsApp, torna a prémer «Enviar al meu nutricionista».","If WhatsApp didn't open, tap «Send to my nutritionist» again."],
"Este enlace es para tu nutricionista: ábrelo desde su panel («📥 Recibir respuesta de un cliente»).":["Aquest enllaç és per al teu nutricionista: obre'l des del seu panell («📥 Rebre resposta d'un client»).","This link is for your nutritionist: open it from their panel («📥 Receive a client's reply»)."],
"📅 ¿Qué día es hoy? (ajusta tu dieta)":["📅 Quin dia és avui? (ajusta la teva dieta)", "📅 What kind of day is today? (adjust your diet)"],
"¿Qué día es hoy?":["Quin dia és avui?", "What kind of day is today?"],
"🌙 Pre-cama":["🌙 Pre-llit", "🌙 Bedtime snack"],
"🏋️ Día de entreno de fuerza":["🏋️ Dia d'entrenament de força", "🏋️ Strength training day"],
"😴 Día sin entreno":["😴 Dia sense entrenament", "😴 Rest day (no training)"],
"🏃 Tirada media":["🏃 Tirada mitjana", "🏃 Medium run"],
"🏃 Tirada corta":["🏃 Tirada curta", "🏃 Short run"],
"⚡ Doble sesión":["⚡ Doble sessió", "⚡ Double session"],
"🏋️ Solo fuerza":["🏋️ Només força", "🏋️ Strength only"],
"😴 Descanso":["😴 Descans", "😴 Rest day"],
"· # kcal":["· # kcal", "· # kcal"],
"(+# kcal)":["(+# kcal)", "(+# kcal)"],
"(−# kcal)":["(−# kcal)", "(−# kcal)"],
"igual":["igual", "same"],
"+# ración":["+# ració", "+# portion"],
"+# raciones":["+# racions", "+# portions"],
"−# ración":["−# ració", "−# portion"],
"−# raciones":["−# racions", "−# portions"],
"🥤 Batido post-entreno":["🥤 Batut post-entrenament", "🥤 Post-workout shake"],
"# g de proteína en polvo":["# g de proteïna en pols", "# g protein powder"],
"con agua (≈# kcal)":["amb aigua (≈# kcal)", "with water (≈# kcal)"],
"Tómalo al acabar de entrenar.":["Pren-te'l en acabar d'entrenar.", "Have it right after training."],
"Hoy sigue tu dieta tal cual.":["Avui segueix la teva dieta tal qual.", "Today, follow your diet as it is."],
"La proteína y las verduras no cambian. Cualquier hidrato de tu tabla vale: mismas raciones, el que prefieras.":["La proteïna i les verdures no canvien. Qualsevol hidrat de la teva taula val: les mateixes racions, el que prefereixis.", "Protein and vegetables don't change. Any carb from your table works: same portions, whichever you prefer."],
"📅 Otro tipo de día":["📅 Un altre tipus de dia", "📅 Another kind of day"],
"💪 Día fuera de lo común (entreno muy largo)":["💪 Dia fora del normal (entrenament molt llarg)", "💪 Unusual day (very long session)"],
"🏃 Entreno o tirada muy larga":["🏃 Entrenament o tirada molt llarga", "🏃 Very long session or run"],
"fuera de lo habitual":["fora de l'habitual", "beyond your usual"],
"Puedes añadir # kcal: # ración de hidratos en la cena. Si ya has cenado, añádelas al desayuno de mañana.":["Pots afegir # kcal: # ració d'hidrats al sopar. Si ja has sopat, afegeix-les a l'esmorzar de demà.", "You can add # kcal: # carb portion at dinner. If you've already had dinner, add them to tomorrow's breakfast."],
"Puedes añadir # kcal: # raciones de hidratos en la cena. Si ya has cenado, añádelas al desayuno de mañana.":["Pots afegir # kcal: # racions d'hidrats al sopar. Si ja has sopat, afegeix-les a l'esmorzar de demà.", "You can add # kcal: # carb portions at dinner. If you've already had dinner, add them to tomorrow's breakfast."],
"🕐 #:#–#:#":["🕐 #:#–#:#", "🕐 #:#–#:#"],
"🕐 #:#":["🕐 #:#", "🕐 #:#"],
"🍞 Desayuno · #:#–#:#":["🍞 Esmorzar · #:#–#:#", "🍞 Breakfast · #:#–#:#"],
"🍞 Desayuno · #:#":["🍞 Esmorzar · #:#", "🍞 Breakfast · #:#"],
"🥗 Comida · #:#–#:#":["🥗 Dinar · #:#–#:#", "🥗 Lunch · #:#–#:#"],
"🥗 Comida · #:#":["🥗 Dinar · #:#", "🥗 Lunch · #:#"],
"🍎 Merienda · #:#–#:#":["🍎 Berenar · #:#–#:#", "🍎 Afternoon snack · #:#–#:#"],
"🍎 Merienda · #:#":["🍎 Berenar · #:#", "🍎 Afternoon snack · #:#"],
"🍽️ Cena · #:#–#:#":["🍽️ Sopar · #:#–#:#", "🍽️ Dinner · #:#–#:#"],
"🍽️ Cena · #:#":["🍽️ Sopar · #:#", "🍽️ Dinner · #:#"],
"🌙 Pre-cama · #:#–#:#":["🌙 Pre-llit · #:#–#:#", "🌙 Bedtime snack · #:#–#:#"],
"🌙 Pre-cama · #:#":["🌙 Pre-llit · #:#", "🌙 Bedtime snack · #:#"],
"⭐ Receta especial (5 recetas del mes)":["⭐ Recepta especial (5 receptes del mes)", "⭐ Special recipe (5 recipes of the month)"],
"⭐":["⭐", "⭐"],
"Tus 5 recetas especiales del mes":["Les teves 5 receptes especials del mes", "Your 5 special recipes of the month"],
"· para tu":["· per al teu", "· for your"],
"cena":["sopar", "dinner"],
"comida":["dinar", "lunch"],
"(# kcal)":["(# kcal)", "(# kcal)"],
"Para un día especial, por ejemplo el viernes por la noche. Las cantidades ya están ajustadas a tus kcal. Úsalas de vez en cuando: algunas sacian menos que tu plato de siempre.":["Per a un dia especial, per exemple divendres a la nit. Les quantitats ja estan ajustades a les teves kcal. Fes-les servir de tant en tant: algunes sacien menys que el teu plat de sempre.", "For a special day, for example Friday night. The amounts are already adjusted to your kcal. Use them now and then: some are less filling than your usual plate."],
"📚 Ver todas las recetas":["📚 Veure totes les receptes", "📚 See all recipes"],
"🌙 Para la cena":["🌙 Per al sopar", "🌙 For dinner"],
"☀️ Para la comida":["☀️ Per al dinar", "☀️ For lunch"],
"Todas las recetas":["Totes les receptes", "All recipes"],
"para tu":["per al teu", "for your"],
"Busca: pollo, pasta, salmón…":["Cerca: pollastre, pasta, salmó…", "Search: chicken, pasta, salmon…"],
"⭐ Las 5 del mes":["⭐ Les 5 del mes", "⭐ This month's 5"],
"Cantidades para tu":["Quantitats per al teu", "Amounts for your"],
"de # kcal. Pésalo todo con báscula, y el aceite también.":["de # kcal. Pesa-ho tot amb bàscula, i l'oli també.", "of # kcal. Weigh everything, oil included."],
"Ingredientes":["Ingredients", "Ingredients"],
"Cómo se hace":["Com es fa", "How to make it"],
"⭐ Otras recetas del mes":["⭐ Altres receptes del mes", "⭐ Other recipes this month"],
"Las recetas todavía no se han cargado. Vuelve a abrir la app en un momento.":["Les receptes encara no s'han carregat. Torna a obrir l'app d'aquí a un moment.", "The recipes haven't loaded yet. Reopen the app in a moment."]
};
if(!window.I18N) return;
I18N.ca = I18N.ca || {}; I18N.en = I18N.en || {};
Object.entries(T).forEach(([es,[ca,en]])=>{ I18N.ca[es]=ca; I18N.en[es]=en; });
})();
/* Comida y cena automáticas: textos generados (CA · EN) */
(function(){
if(!window.I18N) return;
const A=(es,ca,en)=>{ I18N.ca[es]=ca; I18N.en[es]=en; };
const P1={"pechuga de pollo o pavo a la plancha":["pit de pollastre o gall dindi a la planxa","grilled chicken or turkey breast"],
 "pescado blanco (merluza, bacalao, lenguado…)":["peix blanc (lluç, bacallà, llenguado…)","white fish (hake, cod, sole…)"],
 "sepia, calamar, pulpo o langostinos a la plancha":["sípia, calamar, pop o llagostins a la planxa","grilled cuttlefish, squid, octopus or prawns"],
 "ternera magra (bistec o picada magra)":["vedella magra (bistec o picada magra)","lean beef (steak or lean mince)"],
 "lomo de cerdo retirando la grasa":["llom de porc sense el greix","pork loin, fat trimmed"],
 "hamburguesa de ternera o pollo":["hamburguesa de vedella o pollastre","beef or chicken burger"],
 "pescado azul (salmón, atún…), 1 día a la semana":["peix blau (salmó, tonyina…), 1 dia a la setmana","oily fish (salmon, tuna…), once a week"],
 "Heura o bocados vegetales marinados":["Heura o daus vegetals marinats","Heura or marinated plant-based bites"],"tofu firme":["tofu ferm","firm tofu"]};
Object.entries(P1).forEach(([es,[ca,en]])=>A(`# g de ${es}`,`# g de ${ca}`,`# g ${en}`));
A("tortilla de # huevos + # claras","truita de # ous + # clares","omelette with # eggs + # egg whites");A("tortilla de # huevos","truita de # ous","omelette with # eggs");
const P2={"# lata de atún al natural (# g escurrido)":["# llauna de tonyina al natural (# g escorreguda)","# can of tuna in water (# g drained)"],"# huevo duro":["# ou dur","# hard-boiled egg"],
 "# tarrina de queso fresco de Burgos desnatado (# g)":["# terrina de mató o formatge fresc desnatat (# g)","# tub of low-fat fresh Burgos cheese (# g)"],"# g de lonchas de pavo o jamón dulce":["# g de llesques de gall dindi o pernil dolç","# g sliced turkey or cooked ham"],
 "# g de jamón serrano sin grasa":["# g de pernil serrà sense greix","# g lean serrano ham"],"# g de pechuga de pollo a la plancha":["# g de pit de pollastre a la planxa","# g grilled chicken breast"],
 "# g de salmón ahumado":["# g de salmó fumat","# g smoked salmon"],"# g de gambas cocidas":["# g de gambes cuites","# g cooked prawns"],"# mozzarella light (# g)":["# mozzarella light (# g)","# light mozzarella (# g)"],"# g de queso feta":["# g de formatge feta","# g feta cheese"]};
Object.entries(P2).forEach(([es,[ca,en]])=>A(es,ca,en));
const EX={"# g de aguacate":["# g d'alvocat","# g avocado"],"# g de frutos secos":["# g de fruits secs","# g nuts"],"# g de semillas":["# g de llavors","# g seeds"],"# lata de aceitunas rellenas (# g)":["# llauna d'olives farcides (# g)","# can of stuffed olives (# g)"],
 "# g de jamón ibérico":["# g de pernil ibèric","# g Iberian ham"],"# g de mayonesa light":["# g de maionesa light","# g light mayonnaise"],"# g de tomate frito":["# g de tomàquet fregit","# g tomato sauce"],"# g más de AOVE":["# g més d'oli d'oliva verge extra","# g more extra virgin olive oil"],"# g de chocolate #%":["# g de xocolata #%","# g #% chocolate"]};
Object.entries(EX).forEach(([es,[ca,en]])=>A(es,ca,en));
const PO={"# pieza de fruta (o # g de sandía, melón o piña)":["# peça de fruita (o # g de síndria, meló o pinya)","# piece of fruit (or # g watermelon, melon or pineapple)"],"# yogur desnatado o # yogur griego ligero":["# iogurt desnatat o # iogurt grec lleuger","# low-fat yogurt or # light Greek yogurt"],
 "# kéfir desnatado":["# quefir desnatat","# low-fat kefir"],"# yogur proteico desnatado":["# iogurt proteic desnatat","# low-fat high-protein yogurt"],"# yogur natural o griego ligero con # g de frutos rojos":["# iogurt natural o grec lleuger amb # g de fruits vermells","# plain or light Greek yogurt with # g berries"],
 "# yogur proteico":["# iogurt proteic","# high-protein yogurt"],"# kéfir con # g de miel":["# quefir amb # g de mel","# kefir with # g honey"]};
Object.entries(PO).forEach(([es,[ca,en]])=>A(es,ca,en));
const HCN={"arroz blanco o basmati":["arròs blanc o basmati","white or basmati rice"],"arroz integral":["arròs integral","brown rice"],"pasta":["pasta","pasta"],"pasta integral":["pasta integral","wholegrain pasta"],"cuscús":["cuscús","couscous"],"quinoa":["quinoa","quinoa"],"bulgur":["bulgur","bulgur"],"mijo":["mill","millet"],"trigo sarraceno":["fajol","buckwheat"],"lentejas":["llenties","lentils"],"garbanzos":["cigrons","chickpeas"],"alubias / judías":["mongetes","beans"],"guisantes":["pèsols","peas"],"patata":["patata","potato"],"boniato":["moniato","sweet potato"]};
Object.entries(HCN).forEach(([es,[ca,en]])=>{ const de=/^[aeiouàèéíòóú]/i.test(ca)?"d'":"de ";
  A(`# g de ${es} en crudo (= # g cocido)`,`# g ${de}${ca} en cru (= # g cuit)`,`# g ${en}, raw (= # g cooked)`);
  A(`# g de ${es} (en crudo)`,`# g ${de}${ca} (en cru)`,`# g ${en} (raw)`); });
A("# g de pan blanco","# g de pa blanc","# g white bread");A("# g de pan integral","# g de pa integral","# g wholemeal bread");
A("# g de tortillas de trigo (fajitas): # fajita de unos # g","# g de truites de blat (fajitas): # fajita d'uns # g","# g wheat tortillas (wraps): # wrap of about # g");
A("# g de tortillas de trigo (fajitas): # fajitas de unos # g","# g de truites de blat (fajitas): # fajitas d'uns # g","# g wheat tortillas (wraps): # wraps of about # g");
[["Elige una opción de cada grupo. Ya está calculado para tus # kcal.","Tria una opció de cada grup. Ja està calculat per a les teves # kcal.","Choose one option from each group. It's already worked out for your # kcal."],
 ["🍚 Hidratos","🍚 Hidrats","🍚 Carbs"],["Esta cena va sin hidratos.","Aquest sopar va sense hidrats.","This dinner has no carbs."],["Mejor integrales.","Millor integrals.","Wholegrain is best."],
 ["🥦 Verduras","🥦 Verdures","🥦 Vegetables"],["🍗 Proteína","🍗 Proteïna","🍗 Protein"],["(≈# g de proteína)","(≈# g de proteïna)","(≈# g protein)"],
 ["Una opción del grupo 1, pesada en crudo:","Una opció del grup 1, pesada en cru:","One option from group 1, weighed raw:"],
 ["O # opciones del grupo 2 (sin cocinar, ideal para ensaladas; puedes repetir):","O # opcions del grup 2 (sense cuinar, ideal per a amanides; pots repetir):","Or # options from group 2 (no cooking, ideal for salads; you can repeat):"],
 ["🥑 Extra","🥑 Extra","🥑 Extra"],["1 opción, y otra más los días de entreno:","1 opció, i una altra els dies d'entrenament:","1 option, plus another on training days:"],["1 opción:","1 opció:","1 option:"],
 ["🍎 Postre","🍎 Postres","🍎 Dessert"],["+ # g de AOVE pesado y vinagre al gusto.","+ # g d'oli d'oliva verge extra pesat i vinagre al gust.","+ # g extra virgin olive oil, weighed, and vinegar to taste."],
 ["#–# g de verduras crudas, hervidas, al vapor, al horno o en airfryer (sin pasarte de volumen: llenan mucho).","100–200 g de verdures crues, bullides, al vapor, al forn o a la fregidora d'aire (sense passar-te de volum: omplen molt).","100–200 g of vegetables, raw, boiled, steamed, oven-baked or air-fried (don't overdo the volume: they're very filling)."],
 ["#–# g de verduras a peso: crudas, hervidas, al vapor, al horno o en airfryer. Nunca fritas ni salteadas con aceite.","#–# g de verdures a pes: crues, bullides, al vapor, al forn o a la fregidora d'aire. Mai fregides ni saltejades amb oli.","#–# g of vegetables by weight: raw, boiled, steamed, oven-baked or air-fried. Never fried or sautéed in oil."],
 ["Los días de entreno de fuerza:","Els dies d'entrenament de força:","On strength training days:"],["(por ejemplo,","(per exemple,","(for example,"],["en total).","en total).","in total)."],
 ["Una opción del grupo #, pesada en crudo:","Una opció del grup #, pesada en cru:","One option from group #, weighed raw:"],["O # opciones del grupo # (sin cocinar, ideal para ensaladas; puedes repetir):","O # opcions del grup # (sense cuinar, ideal per a amanides; pots repetir):","Or # options from group # (no cooking, ideal for salads; you can repeat):"],
 ["# opción, y otra más los días de entreno:","# opció, i una altra els dies d'entrenament:","# option, plus another on training days:"],["# opción:","# opció:","# option:"],
 ["# g de pescado azul (salmón, atún…), # día a la semana","# g de peix blau (salmó, tonyina…), # dia a la setmana","# g oily fish (salmon, tuna…), # day a week"],
 ["🥗 Comida","🥗 Dinar","🥗 Lunch"],["Ganancia muscular · # kcal/día","Guany muscular · # kcal/dia","Muscle gain · # kcal/day"],["Mejora de masa muscular · # kcal/día","Millora de massa muscular · # kcal/dia","Muscle gain · # kcal/day"],["Rendimiento · # kcal/día","Rendiment · # kcal/dia","Performance · # kcal/day"],["Rendimiento (normocalórica)","Rendiment (normocalòrica)","Performance (maintenance calories)"],["Mejora de masa muscular (superávit)","Millora de massa muscular (superàvit)","Muscle gain (surplus)"],["Mantenimiento · # kcal/día","Manteniment · # kcal/dia","Maintenance · # kcal/day"]
].forEach(([es,ca,en])=>A(es,ca,en));
})();
(function(){ if(!window.I18N) return; const A=(es,ca,en)=>{ I18N.ca[es]=ca; I18N.en[es]=en; };
[["Dieta vegana","Dieta vegana","Vegan diet"],["dieta vegana","dieta vegana","vegan diet"],["Dieta vegetariana (con huevo y lácteos)","Dieta vegetariana (amb ou i làctics)","Vegetarian diet (with eggs and dairy)"],["dieta vegetariana (con huevo y lácteos)","dieta vegetariana (amb ou i làctics)","vegetarian diet (with eggs and dairy)"],
 ["Dieta # % vegetal: proteínas de soja, tofu, tempeh, seitán, Heura y legumbres. Tu nutricionista te indicará si necesitas vitamina B#.","Dieta # % vegetal: proteïnes de soja, tofu, tempeh, seitan, Heura i llegums. El teu nutricionista t'indicarà si necessites vitamina B#.","# % plant-based diet: protein from soy, tofu, tempeh, seitan, Heura and legumes. Your nutritionist will tell you if you need vitamin B#."],
 ["# g de tempeh","# g de tempeh","# g tempeh"],["# g de seitán","# g de seitan","# g seitan"],["# g de soja texturizada (pesada en seco, luego se hidrata)","# g de soja texturitzada (pesada en sec, després s'hidrata)","# g textured soy (weighed dry, then rehydrated)"],
 ["# g de hamburguesa vegetal de soja o guisante","# g d'hamburguesa vegetal de soja o pèsol","# g soy or pea plant-based burger"],["# g de edamame (pesado ya cocido)","# g d'edamame (pesat ja cuit)","# g edamame (weighed cooked)"],
 ["# g de edamame cocido","# g d'edamame cuit","# g cooked edamame"],["# g de tofu firme","# g de tofu ferm","# g firm tofu"],["# g de soja texturizada (en seco)","# g de soja texturitzada (en sec)","# g textured soy (dry)"],["# g de legumbres cocidas","# g de llegums cuits","# g cooked legumes"],
 ["# yogur de soja natural (# g)","# iogurt de soja natural (# g)","# plain soy yogurt (# g)"],["# g de hummus","# g d'hummus","# g hummus"],["# yogur de soja natural","# iogurt de soja natural","# plain soy yogurt"],
 ["# yogur de soja natural o # yogur de soja natural","# iogurt de soja natural","# plain soy yogurt"],["# g de mayonesa vegana","# g de maionesa vegana","# g vegan mayonnaise"]
].forEach(([es,ca,en])=>A(es,ca,en)); })();
(function(){ if(!window.I18N) return; const A=(es,ca,en)=>{ I18N.ca[es]=ca; I18N.en[es]=en; I18N.ca[es.toLowerCase()]=ca.toLowerCase(); I18N.en[es.toLowerCase()]=en.toLowerCase(); };
const N={huevo:["ou","eggs"],"lácteos":["làctics","dairy"],pescado:["peix","fish"]};
const combos=[["huevo"],["lácteos"],["pescado"],["huevo","lácteos","pescado"],["huevo","pescado"],["lácteos","pescado"]];
combos.forEach(c=>{ const j=(a,y)=>a.length>1?a.slice(0,-1).join(", ")+` ${y} `+a[a.length-1]:a[0];
  A(`Dieta vegetal (con ${j(c,"y")})`,`Dieta vegetal (amb ${j(c.map(x=>N[x][0]),"i")})`,`Plant-based diet (with ${j(c.map(x=>N[x][1]),"and")})`); });
A("Dieta vegetal: proteínas de soja, tofu, tempeh, seitán, Heura y legumbres. Tu nutricionista te indicará si necesitas vitamina B#.","Dieta vegetal: proteïnes de soja, tofu, tempeh, seitan, Heura i llegums. El teu nutricionista t'indicarà si necessites vitamina B#.","Plant-based diet: protein from soy, tofu, tempeh, seitan, Heura and legumes. Your nutritionist will tell you if you need vitamin B#.");
[["# g de proteína de guisante texturizada (pesada en seco)","# g de proteïna de pèsol texturitzada (pesada en sec)","# g textured pea protein (weighed dry)"],["# g de legumbres cocidas (lentejas, garbanzos, alubias)","# g de llegums cuits (llenties, cigrons, mongetes)","# g cooked legumes (lentils, chickpeas, beans)"],
 ["Bol de cereales con bebida vegetal (sin azúcar)","Bol de cereals amb beguda vegetal (sense sucre)","Cereal bowl with unsweetened plant-based drink"],["Crema de arroz con bebida vegetal (sin azúcar)","Crema d'arròs amb beguda vegetal (sense sucre)","Cream of rice with unsweetened plant-based drink"],
 ["Yogur de soja natural con kiwi, avena y chía","Iogurt de soja natural amb kiwi, civada i xia","Plain soy yogurt with kiwi, oats and chia"],["Bol de yogur de soja natural con avena, fruta, frutos secos y chía","Bol de iogurt de soja natural amb civada, fruita, fruits secs i xia","Plain soy yogurt bowl with oats, fruit, nuts and chia"],
 ["# ml de bebida de avellanas y arroz, de avena o de soja (sin azúcar)","# ml de beguda d'avellanes i arròs, de civada o de soja (sense sucre)","# ml hazelnut-rice, oat or soy drink (unsweetened)"],["# g de yogur de soja natural","# g de iogurt de soja natural","# g plain soy yogurt"],["# g de proteína vegetal en polvo","# g de proteïna vegetal en pols","# g plant protein powder"],["# g de sirope de agave","# g de xarop d'atzavara","# g agave syrup"]
].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
(function(){ if(!window.I18N) return; [
 ["Mínimo #–# g de verduras (crudas, hervidas, al vapor, al horno o en airfryer) para tener vitaminas y minerales. Ojo con la saciedad: no te pases de volumen, que lo importante es que te comas todos los hidratos y toda la proteína.","Mínim #–# g de verdures (crues, bullides, al vapor, al forn o a la fregidora d'aire) per tenir vitamines i minerals. Compte amb la sacietat: no et passis de volum, que el més important és que et mengis tots els hidrats i tota la proteïna.","At least #–# g of vegetables (raw, boiled, steamed, oven-baked or air-fried) for vitamins and minerals. Watch the fullness: don't overdo the volume, what matters is eating all your carbs and protein."],
 ["#–# g de verduras a peso: crudas, hervidas, al vapor, al horno o en airfryer. Nunca fritas ni salteadas con aceite. La verdura es clave para la saciedad.","#–# g de verdures a pes: crues, bullides, al vapor, al forn o a la fregidora d'aire. Mai fregides ni saltejades amb oli. La verdura és clau per a la sacietat.","#–# g of vegetables by weight: raw, boiled, steamed, oven-baked or air-fried. Never fried or sautéed in oil. Vegetables are key for fullness."]
].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
(function(){ if(!window.I18N) return; [
 ["O # opciones del grupo # (ideal para platos fríos, ensaladas, pokes, wraps o bocadillos fríos; puedes repetir):","O # opcions del grup # (ideal per a plats freds, amanides, pokes, wraps o entrepans freds; pots repetir):","Or # options from group # (ideal for cold dishes, salads, pokes, wraps or cold sandwiches; you can repeat):"],
 ["# huevo duro (talla M)","# ou dur (talla M)","# hard-boiled egg (size M)"],["# g de queso fresco tipo Burgos (Burgo de Arias)","# g de formatge fresc tipus Burgos (Burgo de Arias)","# g fresh Burgos-style cheese"],
 ["# g de queso fresco de Burgos desnatado (# %)","# g de formatge fresc de Burgos desnatat (# %)","# g low-fat fresh Burgos cheese (# %)"],
 ["# g de queso en lonchas light (de unas # kcal por # g; ≈# lonchas)","# g de formatge en llesques light (d'unes # kcal per # g; ≈# llesques)","# g light sliced cheese (about # kcal per # g; ≈# slices)"],
 ["# g de queso cottage","# g de formatge cottage","# g cottage cheese"],["# lata de atún al natural (≈# g escurrido)","# llauna de tonyina al natural (≈# g escorreguda)","# can of tuna in water (≈# g drained)"],
 ["# g de bonito del norte en aceite, escurrido","# g de bonítol del nord en oli, escorregut","# g albacore tuna in oil, drained"],["# g de bonito del norte al natural","# g de bonítol del nord al natural","# g albacore tuna in water"],
 ["# g de pechuga de pollo ya hecha a la plancha","# g de pit de pollastre ja fet a la planxa","# g grilled chicken breast (already cooked)"],["# g de pechuga de pavo en dados o en lonchas","# g de pit de gall dindi a daus o en llesques","# g turkey breast, diced or sliced"],
 ["# g de salmón en dados (fresco o ahumado, para poke)","# g de salmó a daus (fresc o fumat, per a poke)","# g diced salmon (fresh or smoked, for poke)"],["# g de jamón serrano en virutas (o # g de ibérico)","# g de pernil serrà a encenalls (o # g d'ibèric)","# g serrano ham shavings (or # g Iberian)"],
 ["# g de colas de langostino o gambas cocidas","# g de cues de llagostí o gambes cuites","# g cooked prawn tails or shrimp"],["# g de pulpo cocido","# g de pop cuit","# g cooked octopus"],
 ["# g de mozzarella (o # g de mozzarella light)","# g de mozzarella (o # g de mozzarella light)","# g mozzarella (or # g light mozzarella)"],["# g de mozzarella light (≈⅓ de bola)","# g de mozzarella light (≈⅓ de bola)","# g light mozzarella (≈⅓ of a ball)"],
 ["# g de queso feta (o # g de feta light)","# g de formatge feta (o # g de feta light)","# g feta (or # g light feta)"],["# g de queso feta light","# g de formatge feta light","# g light feta"],
 ["# g de edamame cocido (de bote o congelado)","# g d'edamame cuit (de pot o congelat)","# g cooked edamame (jar or frozen)"],["# g de legumbres cocidas (garbanzos, lentejas o alubias)","# g de llegums cuits (cigrons, llenties o mongetes)","# g cooked legumes (chickpeas, lentils or beans)"],
 ["# g de quinoa cocida (aporta más hidrato que proteína)","# g de quinoa cuita (aporta més hidrat que proteïna)","# g cooked quinoa (more carbs than protein)"],
 ["# g de Heura o bocados vegetales","# g d'Heura o daus vegetals","# g Heura or plant-based bites"],["# g de soja texturizada (pesada en seco)","# g de soja texturitzada (pesada en sec)","# g textured soy (weighed dry)"]
].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
(function(){ if(!window.I18N) return; [["Ayer","Ahir","Yesterday"],["Hoy","Avui","Today"],["# días","# dies","# days"],["▲ # puntos vs. el día anterior","▲ # punts vs. el dia anterior","▲ # points vs. the day before"],["▼ # puntos vs. el día anterior","▼ # punts vs. el dia anterior","▼ # points vs. the day before"],["Igual que el día anterior","Igual que el dia anterior","Same as the day before"],
["▲ # puntos vs. los # días anteriores","▲ # punts vs. els # dies anteriors","▲ # points vs. the previous # days"],["▼ # puntos vs. los # días anteriores","▼ # punts vs. els # dies anteriors","▼ # points vs. the previous # days"],["Igual que los # días anteriores","Igual que els # dies anteriors","Same as the previous # days"]
].forEach(([es,ca,en])=>{ if(!(es in I18N.ca)){ I18N.ca[es]=ca; I18N.en[es]=en; } }); })();
(function(){ if(!window.I18N) return; [
["Contesta con sinceridad: así tu nota será real.","Contesta amb sinceritat: així la teva nota serà real.","Answer honestly: that way your score will be real."],
["¿Has respetado tus comidas sin picar entre horas?","Has respectat els teus àpats sense picar entre hores?","Did you stick to your meals without snacking in between?"],["Sí, sin picar","Sí, sense picar","Yes, no snacking"],["He picado algo","He picat alguna cosa","I snacked a bit"],
["¿Has puesto verdura en la comida y en la cena?","Has posat verdura al dinar i al sopar?","Did you have vegetables at lunch and dinner?"],["En las dos","A tots dos","At both"],["Solo en una","Només en un","Only one"],["En ninguna","En cap","Neither"],
["¿Cuántas piezas de fruta has comido?","Quantes peces de fruita has menjat?","How many pieces of fruit did you eat?"],
["¿Has comido la ración de hidratos en comida y cena?","Has menjat la ració d'hidrats al dinar i al sopar?","Did you eat your carb portion at lunch and dinner?"],["¿Has comido la ración de hidratos de la comida?","Has menjat la ració d'hidrats del dinar?","Did you eat your carb portion at lunch?"],
["En las dos, con su cantidad","A tots dos, amb la seva quantitat","At both, the right amount"],["Sí, con su cantidad","Sí, amb la seva quantitat","Yes, the right amount"],["Me he pasado de cantidad","M'he passat de quantitat","I had too much"],
["¿Has controlado las cantidades y las grasas?","Has controlat les quantitats i els greixos?","Did you keep amounts and fats under control?"],["Sí, de forma lógica y equilibrada","Sí, de manera lògica i equilibrada","Yes, in a sensible, balanced way"],["Me he pasado un poco","M'he passat una mica","I overdid it a little"],["He perdido el control","He perdut el control","I lost control"],
["Aceite pesado, frutos secos, aguacate, quesos… es donde más se escapan las calorías.","Oli pesat, fruits secs, alvocat, formatges… és on més s'escapen les calories.","Weighed oil, nuts, avocado, cheese… that's where calories slip in most."],
["¿El pan, la pasta, el arroz y los cereales han sido integrales?","El pa, la pasta, l'arròs i els cereals han estat integrals?","Were your bread, pasta, rice and cereals wholegrain?"],["A medias","A mitges","Partly"],
["¿Has comido ultraprocesados?","Has menjat ultraprocessats?","Did you eat ultra-processed food?"],["Productos con una etiqueta larga de ingredientes: bollería, precocinados, embutidos, salsas, snacks…","Productes amb una etiqueta llarga d'ingredients: brioixeria, precuinats, embotits, salses, snacks…","Products with a long ingredient list: pastries, ready meals, cured meats, sauces, snacks…"],
["¿Te has pasado con la sal?","T'has passat amb la sal?","Did you overdo the salt?"],["Un poco","Una mica","A little"],["Mucho","Molt","A lot"],["Sal añadida, embutidos, salsas, aperitivos salados, precocinados…","Sal afegida, embotits, salses, aperitius salats, precuinats…","Added salt, cured meats, sauces, salty snacks, ready meals…"],
["¿Has comido hoy algún alimento rico en omega-#?","Has menjat avui algun aliment ric en omega-#?","Did you eat any food rich in omega-# today?"],
["Salmón, sardinas, caballa o boquerones, atún o bonito, nueces, semillas de chía o lino. Lo ideal: al menos # días a la semana.","Salmó, sardines, verat o seitons, tonyina o bonítol, nous, llavors de xia o lli. L'ideal: com a mínim # dies a la setmana.","Salmon, sardines, mackerel or anchovies, tuna or bonito, walnuts, chia or flax seeds. Ideally: at least # days a week."],
["Nueces, semillas de chía, lino o cáñamo, edamame o tofu, aceite de lino. Lo ideal: al menos # días a la semana.","Nous, llavors de xia, lli o cànem, edamame o tofu, oli de lli. L'ideal: com a mínim # dies a la setmana.","Walnuts, chia, flax or hemp seeds, edamame or tofu, flaxseed oil. Ideally: at least # days a week."],
["Fuerza o cardio: cuenta todo. Se valora por semanas.","Força o cardio: compta tot. Es valora per setmanes.","Strength or cardio: it all counts. Scored by week."],
["puntos por perder el control con las cantidades","punts per perdre el control amb les quantitats","points for losing control of amounts"],["Omega-# de hoy: ✔","Omega-# d'avui: ✔","Today's omega-#: ✔"],
["Entreno","Entrenament","Training"],["# – # h","# – # h","# – # h"]
].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
(function(){ if(!window.I18N) return; [["No mide tu salud ni tu peso de hoy: mide tus hábitos. Es la nota de lo que está en tus manos (comer bien, moverte, dormir y evitar el alcohol y el tabaco) para llegar a tener un cuerpo sano.",
"No mesura la teva salut ni el teu pes d'avui: mesura els teus hàbits. És la nota del que està a les teves mans (menjar bé, moure't, dormir i evitar l'alcohol i el tabac) per arribar a tenir un cos sa.",
"It doesn't measure your health or your weight today: it measures your habits. It's the score for what's in your hands (eating well, moving, sleeping, avoiding alcohol and tobacco) to reach a healthy body."]].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
(function(){ if(!window.I18N) return; [["(≈# kcal de azúcar)","(≈# kcal de sucre)","(≈# kcal of sugar)"]].forEach(([es,ca,en])=>{ I18N.ca[es]=ca; I18N.en[es]=en; }); })();
