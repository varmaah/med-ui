import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators'




export function getServices() {
 return [{
  "id": "1",
  "serviceName" : "Radiofrequency ablation",
  "header" : "one Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tinc",
  "description_one" : "Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "2",
  "serviceName" : "Epural stero injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincunt ",
  "description_one" : "Epural stero injections is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Epural stero injections intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincunt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming  quod mazim placerat facer possim assum."
},
{
  "id": "3",
  "serviceName" : "Superion implant",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Superion implant is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Superion implant intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincun t ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "4",
  "serviceName" : "Si joint fusion",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Si joint fusion is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" :  "Si joint fusion intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
   "id": "5",
  "serviceName" : "SCS",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "SCS is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "SCS blation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "6",
  "serviceName" : "Kyphoplasty",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "7",
  "serviceName" : "Discography",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : " Discography is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Discography intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "8",
  "serviceName" : "Trigger Point Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Trigger Point Injections is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Trigger Point Injectionsintially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "9",
  "serviceName" : "Facet Joint Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Facet Joint Injections is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Facet Joint Injections intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "10",
  "serviceName" : "Sympathetic nerve blocks",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Sympathetic nerve blocks is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Sympathetic nerve blocks intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "11",
  "serviceName" : "Cervical/Lumbar MNBB",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : " Cervical/Lumbar MNBB is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Cervical/Lumbar MNBB intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "12",
  "serviceName" : "Knee Injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : " Knee Injections is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Knee Injections intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "13",
  "serviceName" : "Selective nerve root blocks",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : " Selective nerve root blocks is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Selective nerve root blocks intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "14",
  "serviceName" : "Facial Injections",
  "header" : "Facial Injections Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Facial Injections Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : " Facial Injections Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
},
{
  "id": "15",
  "serviceName" : "Intrarticular joint injections",
  "header" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
  "description_one" : "Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
  "description_two" : "Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
  "approach" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
  "important_things" :"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
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
 routeParamTaken = false;

 constructor(private route : ActivatedRoute) { 
   this.services = getServices();
 }

  ngOnInit() {
    this.subscriptions.add(this.route.queryParams.pipe(takeWhile(() =>!this.routeParamTaken)).subscribe(queryParams => {
      if(queryParams['selectedServiceId']) {
        this.services.forEach(service => {
          if(service.id === queryParams['selectedServiceId'] ) {
            this.selectedService = service.serviceName;
          }
        })
      }
  }))
  }

  selectService(selection) {
    this.selectedService = selection;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
