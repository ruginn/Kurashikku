import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faq = () => {
    const faqSection = [
        {
          id: 1,
          question: "What is the dress code at Kurashiku?",
          answer: "We recommend smart-casual attire for our dining experience. While there is no strict dress code, we encourage our guests to dress comfortably and stylishly."
        },
        {
          id: 2,
          question: "Do I need to make a reservation?",
          answer: "Reservations are highly recommended, especially during peak dining hours. You can easily make a reservation through our website or by giving us a call."
        },
        {
          id: 3,
          question: "Can I make special dietary requests or customize my order?",
          answer: "Yes, we are happy to accommodate special dietary requests and preferences whenever possible. Please inform us of your requirements when making a reservation, and our chefs will do their best to tailor your dining experience."
        },
        {
          id: 4,
          question: "Is there a vegetarian or vegan menu available?",
          answer: "Yes, we offer a selection of vegetarian and vegan options. Our chefs are skilled at creating plant-based dishes that are just as flavorful and artfully presented as our traditional offerings."
        },
        {
          id: 5,
          question: "What is the best way to experience Kurashiku?",
          answer: "We recommend trying our tasting menu to get a comprehensive experience of our culinary offerings. It's an ideal way to savor a variety of dishes curated by our chefs."
        },
        {
          id: 6,
          question: "Do you offer takeout or delivery services?",
          answer: "Yes, we provide takeout services. You can also check with our delivery partners for home delivery options. However, please note that the full dining experience is best enjoyed in our restaurant."
        },
        {
          id: 7,
          question: "Can I host private events or celebrations at Kurashiku?",
          answer: "Absolutely! We offer private dining options for special events and celebrations. Get in touch with our team to discuss the details, and we'll be delighted to make your event memorable."
        },
        {
          id: 8,
          question: "What is the corkage fee for bringing our own wine?",
          answer: "Our corkage fee is $25 per bottle for wine or sake. We encourage you to explore our wine and sake selection, but we understand that some guests may have their favorites."
        },
        {
          id: 9,
          question: "Are children welcome at Kurashiku?",
          answer: "Yes, we welcome families with children. We have a children's menu and high chairs available. Please let us know in advance if you need any special accommodations for your little ones."
        },
        {
          id: 10,
          question: "Is there parking available near the restaurant?",
          answer: "There are parking garages and street parking options near Kurashiku, but availability may vary. We recommend using public transportation or rideshare services for convenience."
        }
      ];
    
    
    
    return (
        <div className="flex justify-center">
            <div className="w-[800px]">
                <Accordion type="single" collapsible>
                        {faqSection.map((item) => {
                            return (
                                <div key={item.id}>
                                    <AccordionItem value={`item-${item.id}`} >

                                        <AccordionTrigger>{item.question}</AccordionTrigger>
                                        <AccordionContent>{item.answer}</AccordionContent>
                                    </AccordionItem>
                                </div>
                            )
                        })}
                </Accordion>
            </div>
        </div>
    )
}

export default Faq