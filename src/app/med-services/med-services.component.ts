import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators'





export function getServices() {
 return [{
  "id": "1",
  "serviceName" : 'Cervical/Lumbar Medial Branch Nerve Blocks (MBNB)',
  "header" : "one Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tinc",
  'description_one' : "Medial branch nerve blocks are usually used as a diagnostic procedure to determine if the facet joints in your spine are causing pain. Facet joints are located in the back of the spine from the neck to the lower back. It is common for facet joints to become arthritic and painful, sometimes as early as in a person’s 20s. Facet joint pain is typically located in the low back or neck, sometimes with radiation to the buttocks or shoulders. It is usually made worse by bending backwards at the waist or leaning forward, such as when standing at a sink. A medial branch nerve block is a procedure in which an anesthetic is injected near the nerves connected to your facet joints. Typically several levels of the spine are injected in one procedure. If you experience significant pain relief immediately after the injection, then the facet joint is likely to be the source of the your pain.",
  "description_two" : "The procedure is primarily diagnostic, meaning that if you have pain relief after the medial branch nerve block, then you may be a candidate for a subsequent procedure called a Radiofrequency Ablation for longer pain relief.",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "2",
  "serviceName" : "Facet Joint Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincunt ",
  "description_one" : "Another way of treating facet joint pain is to directly inject numbing medication and steroid into the facet joint. ",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming  quod mazim placerat facer possim assum."
},
{
  "id": "3",
  "serviceName" : "Radiofrequency Ablation (RFA)",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Radiofrequency ablation is a therapy that uses radiofrequency waves to deliver heat to targeted nerve tissues. This can help reduce chronic pain symptoms that are associated with various conditions by destroying ablating the nerve to the painful area. It is usually used on nerves that will eventually grow back, so many people will periodically repeat the procedure.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "4",
  "serviceName" : "Epidural Steroid Injections (ESI)",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Epidural steroid injections (ESIs) are a common treatment option for low back and leg pain along with neck and arm pain. Sometimes the injection alone is sufficient to provide relief, but commonly an epidural steroid injection is used in combination with a physical therapy to provide longer lasting benefit. An epidural steroid injection can be very beneficial during an acute episode of back/leg pain or neck/arm pain. Epidural steroid injections also may be used to treat similar conditions in the thoracic spine.",
  "description_two" :  "Epidural steroid injections may be performed with an interlaminar approach, which targets multiple affected nerves, or with a transforaminal, or selective nerve root approach, to target specific nerve roots. Additionally, a caudal epidural steroid injection may target multiple nerves or specific nerves by using a catheter.",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
   "id": "5",
  "serviceName" : "Superion",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "The Superion implant is used to treat pain in the back and legs from lumbar spinal stenosis. Individuals with spinal stenosis commonly experience relief by bending forward or sitting. It acts as an indirect decompression device, recreating this spinal position and relieving pressure on the affected nerves. Superion can be used to provide patients with an alternative when conservative treatment has failed and laminectomy is too aggressive.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "6",
  "serviceName" : "Sacroiliac Joint Fusion",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Sacroiliac Joint Anatomy and Function<br>The sacroiliac (SI) joint is a low-motion joint that connects the pelvis to either side of the sacrum (tailbone), acting primarily as a shock-absorber between the lower body and torso. This joint is the point where the base of the spine connects to the pelvis.<br>Dysfunction in the SI joint can produce significant lower back pain, as well as hip pain. Sacroiliac joint dysfunction can be the result of too much motion, too little motion, or inflammation of the joint.<br>There is evidence that those who have undergone a lumbar spinal fusion are at a heightened risk for SI joint pain.",
  "description_two" : "In a sacroiliac joint fusion, your doctor makes two small incisions over the sacroiliac joint and places two small bone grafts in the sacroiliac joint to stabilize it and prevent movement, thereby reducing pain from the joint. There are no screws or metal hardware placed in the joint or pelvis with this procedure. The recovery period is brief, typically less than one week.",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "7",
  "serviceName" : "Spinal Cord Stimulation (SCS)",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : " Spinal Cord Stimulation (SCS) has been in use for nearly 50 years. SCS systems use a small battery and thin, flexible wires called leads. The stimulator delivers a mild electric current through the leads to mask pain signals from reaching the brain.  A remote control allows you to increase or decrease the level of stimulation, turn it on and off, and target different areas in your back, legs, neck, or arms using programs specifically designed for you. This stimulation does not get rid of what is causing the pain. It changes the way the brain perceives it. SCS therapy may use a gentle tingling sensation, called paresthesias, to replace the pain. Other forms of SCS use higher frequencies that do not create any paresthesia. The amount of pain relief achieved is different for everyone, but the therapy is considered successful if it reduces your pain by at least 50%, improves your level of function by 50%, or if you are able to reduce medication use by 50%.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "8",
  "serviceName" : "Kyphoplasty",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Kyphoplasty is a minimally invasive procedure used to treat vertebral compression fractures. A needle is placed in the collapsed vertebral body under x-ray guidance, and a balloon is inflated. This restores some of the lost height from the fracture. The balloon is removed, and bone cement is injected in the space to stabilize the fractured vertebral body and subsequently reduce pain.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "9",
  "serviceName" : "Discography",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Discography is a procedure used to determine is specific vertebral discs are a source of pain. Discography is performed by injecting contrast material into a disc under x-ray guidance. A surgeon may request discography when planning spine surgery to determine which disc levels will require surgery.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "10",
  "serviceName" : "Trigger Point Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Trigger points are tender areas in muscle that cause pain and reduce range of motion and function.  The pain may be localized, or it may radiate to other areas. Trigger points are commonly seen in chronic musculoskeletal disorders such as neck and low back pain. Trigger point injections are used to temporarily reduce muscle pain, and also to allow better participation in a physical therapy program.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "11",
  "serviceName" : "Sympathetic nerve blocks",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Sympathetic nerve blocks reduce the transmission of pain signals from sympathetic nerve roots to treat chronic pain. This type of block is typically performed if conventional treatment methods such as over-the-counter pain medication or steroid injections have not been effective. Sympathetic nerve blocks are typically used to treat chronic abdominal, pelvic, or rectal pain, and they are also used to treat Complex Regional Pain Syndrome (CRPS), also known as Reflex Sympathetic Dystrophy (RSD) in the arms or legs. These injections do not usually use steroids, so they can be administered more frequently, if needed, to control pain. In some cases, sympathetic nerve blocks may also be used diagnostically to see if someone might be a good candidate for a spinal cord stimulator.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "12",
  "serviceName" : "Knee/Hip/Shoulder Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "If you have osteoarthritis in your knee or hip, corticosteroids may provide temporary pain relief. Intra-articular joint injections are most commonly performed in the knee, hip, and shoulder, but they can be performed in other joints as well. This procedure involves the injection of corticosteroids into the affected joint. This can provide quick and sometimes long-lasting pain relief.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "13",
  "serviceName" : "Selective nerve root blocks",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Selective nerve root block injections are used to treat an inflamed spinal nerve root. This may be caused by a herniated disc, or by degenerative changes in the spine, such as bone spurs, thickening of spinal ligaments, or misalignment of the spine. In these conditions, there may be a chemical irritation or pinching of the nerve due to mechanical compression. Multiple nerve blocks may be performed if more than one nerve is suspected of causing pain.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "14",
  "serviceName" : "Trigeminal Nerve Pain",
  "header" : "Facial Injections Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "The Gasserian ganglion is a small collection of nerve cells and fibers found at the base of the skull. It has three nerve branches known as the Trigeminal Nerves. These three branches are responsible for sensation on the side of the face. The Gasserian ganglion or trigeminal ganglion injection is a brief, minimally invasive procedure that is performed using local anesthetic to inhibit the signals from going through those nerves in order to control facial pain. Sometimes steroid is also used for this procedure.",
  "description_two" : "",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "15",
  "serviceName" : 'Intrarticular joint injections',
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  'important_things' :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
} ]
}
@Component({
  selector: 'app-med-services',
  templateUrl: './med-services.component.html',
  styleUrls: ['./med-services.component.css']
})
export class MedServicesComponent implements OnInit, OnDestroy {
readonly services : any

 selectedService :string;
 subscriptions = new Subscription();

 constructor(private route : ActivatedRoute, private router: Router) { 
   this.services = getServices();
 }

  ngOnInit() {
    window.scroll(0, 0);
    this.subscriptions.add(this.route.queryParams.subscribe(queryParams => {
      if(queryParams['selectedServiceId']) {
        this.services.forEach(service => {
          if(service.id === queryParams['selectedServiceId'] ) {
            this.selectedService = service.serviceName;
          }
        })
      } else {
        this.selectedService = this.services[0].serviceName;
      }
  }))
  }

  selectService(selection) {
    this.selectedService = selection;
    window.scroll(0, 0);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  contactNav() {
    this.router.navigate(['/' + 'contact-us']);
    window.scroll(0, 0);
  }

}
