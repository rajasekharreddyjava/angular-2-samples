/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './comment-section-1.ngfactory';
import * as import2 from '../../../components/change-detection/comment-section-1';
import * as import3 from './comment-section-2.ngfactory';
import * as import4 from '../../../components/change-detection/comment-section-2';
import * as import5 from '../../../components/change-detection/comment-demo';
const styles_CommentDemo:any[] = ([] as any[]);
export const RenderType_CommentDemo:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_CommentDemo,
  data: {}
}
);
export function View_CommentDemo_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Change Detection'])),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-md-6'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'comment-section-1',([] as any[]),(null as any),(null as any),(null as any),import1.View_CommentSection1_0,import1.RenderType_CommentSection1)),
    import0.ɵdid(24576,(null as any),0,import2.CommentSection1,([] as any[]),(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-md-6'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'comment-section-2',([] as any[]),(null as any),(null as any),(null as any),import3.View_CommentSection2_0,import3.RenderType_CommentSection2)),
    import0.ɵdid(24576,(null as any),0,import4.CommentSection2,([] as any[]),(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'style',
        'margin: 15px;'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import5.CommentDemo = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.count()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Increment Counter'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Read more here']))
  ]
  ,(null as any),(ck,v) => {
    var co:import5.CommentDemo = v.component;
    const currVal_0:any = co.counter;
    ck(v,27,0,currVal_0);
  });
}
function View_CommentDemo_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'comment-demo',([] as any[]),(null as any),(null as any),(null as any),View_CommentDemo_0,RenderType_CommentDemo)),
    import0.ɵdid(24576,(null as any),0,import5.CommentDemo,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const CommentDemoNgFactory:import0.ComponentFactory<import5.CommentDemo> = import0.ɵccf('comment-demo',import5.CommentDemo,View_CommentDemo_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL2NoYW5nZS1kZXRlY3Rpb24vY29tbWVudC1kZW1vLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL2NoYW5nZS1kZXRlY3Rpb24vY29tbWVudC1kZW1vLnRzIiwibmc6Ly8vVXNlcnMvdG9yL0RldmVsb3BtZW50L2FuZ3VsYXItMi1zYW1wbGVzL2NvbXBvbmVudHMvY2hhbmdlLWRldGVjdGlvbi9jb21tZW50LWRlbW8uaHRtbCIsIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL2NoYW5nZS1kZXRlY3Rpb24vY29tbWVudC1kZW1vLnRzLkNvbW1lbnREZW1vX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPkNoYW5nZSBEZXRlY3Rpb248L2gxPlxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXG4gICAgICAgIDxjb21tZW50LXNlY3Rpb24tMT48L2NvbW1lbnQtc2VjdGlvbi0xPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxjb21tZW50LXNlY3Rpb24tMj48L2NvbW1lbnQtc2VjdGlvbi0yPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTVweDtcIj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY291bnQoKVwiPkluY3JlbWVudCBDb3VudGVyPC9idXR0b24+XG4gICAgICAgIDxkaXY+PHN0cm9uZz57e2NvdW50ZXJ9fTwvc3Ryb25nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48aDQ+PGEgaHJlZj1cImh0dHA6Ly93d3cuc3ludGF4c3VjY2Vzcy5jb20vdmlld2FydGljbGUvY2hhbmdlLWRldGVjdGlvbi1pbi1hbmd1bGFyLTIuMFwiPlJlYWQgbW9yZSBoZXJlPC9hPjwvaDQ+IiwiPGNvbW1lbnQtZGVtbz48L2NvbW1lbnQtZGVtbz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUk7SUFBcUI7TUFDekI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0I7SUFFbEI7Z0JBQUE7SUFBdUM7SUFDckM7TUFFTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNCO0lBQ2xCO2dCQUFBO0lBQXVDO0lBQ3JDO0lBQ0o7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtNQUN2QjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtNQUFBO01BQVI7SUFBQTtJQUEwQjtJQUEwQjtJQUNwRDtJQUFLO0lBQVE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEwQjtJQUNyQztJQUNKO0lBQ047TUFBSTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1GOzs7O0lBSGxFO0lBQUE7Ozs7O0lDZHJCO2dCQUFBOzs7OyJ9
