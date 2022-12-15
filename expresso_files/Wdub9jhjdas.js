;/*FB_PKG_DELIM*/

__d("PolarisFacebookConnectUserListItem.react",["fbt","PolarisAssetManagerGlyphMapping","PolarisFBConnectHelpers","PolarisIGCoreBorderedIcon","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreListItem","PolarisIGCoreText","PolarisIGCoreToast","PolarisNewUserActivatorsStrings","PolarisQueryParams","PolarisReactRedux","PolarissuggestedUserSelectors","browserHistory","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l="connect_to_facebook",m=h._("Connect to Facebook"),n=h._("Follow your friends"),o=h._("Connect");function a(a){var b=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("PolarissuggestedUserSelectors").shouldDisplayFacebookConnect(a),isLoading:d("PolarissuggestedUserSelectors").isInitialLoad(a)}},[]),d("PolarisReactRedux").shallowEqual),e=b.canFBConnect;b=b.isLoading;var f=k(!1),g=f[0],h=f[1];f=d("PolarisQueryParams").parseQueryParams();f[l]!=null&&f[l].length>0&&(d("browserHistory").browserHistory.replace(d("browserHistory").browserHistory.location.pathname),h(!0));return g?i.jsx(c("PolarisIGCoreToast"),{duration:1500,onClose:function(){return h(!1)},children:d("PolarisNewUserActivatorsStrings").FACEBOOK_COMPLETED}):e&&i.jsx(c("PolarisIGCoreListItem"),{action:i.jsx(c("PolarisIGCoreButton"),{disabled:b,loading:b,onClick:function(){return d("PolarisFBConnectHelpers").redirectToFBOAuth(d("browserHistory").browserHistory.location.pathname+"?"+l+"=true",a.analyticsContext)},children:o}),icon:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:m,color:"facebook",icon:d("PolarisAssetManagerGlyphMapping").ICONS.FACEBOOK_CIRCLE_FILLED_24,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium}),subtitle:n,title:i.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:m}),truncateText:!1})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserGridItem.react",["PolarisFollowButtonContainer.react","PolarisIGCoreUserCard","PolarisReactRedux","PolarisrelationshipSelectors","PolarisuserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.analyticsContext,e=a.id,f=a.onFollowClick,g=a.position,j=d("PolarisReactRedux").useSelector(i(function(b){return{relationship:d("PolarisrelationshipSelectors").getRelationship(b.relationships,a.id),user:d("PolarisuserSelectors").getUserById(b,a.id)}},[a.id]),d("PolarisReactRedux").shallowEqual),k=j.relationship;j=j.user;var l=function(){f!=null&&k&&f({index:g,userId:e,followedByViewer:d("PolarisrelationshipSelectors").followedByViewer(k)})},m=function(){a.onUsernameClick({index:g,userId:e})},n=j.profilePictureUrl,o=j.suggestionDescription,p=j.username;return n==null||o==null||p==null?null:h.jsx(c("PolarisIGCoreUserCard"),{button:h.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:b,onClick:l,relationship:k,userId:j.id}),isVerified:j.isVerified,onUsernameClick:m,src:n,subtitle:o,username:p})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserGrid.react",["PolarisIGCoreBox","PolarisIGCoreDeck","PolarisIGCoreSpinner","PolarisUserGridItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isLoading,d=a.onFollowClick,e=a.onUsernameClick,f=a.onVisibilityChange,g=a.subHeader,i=a.suffix;a=a.userIds;var j=function(a){d&&d(a)},k=function(a,b){f&&f(a,b)},l=function(a){e&&e(a)};return b?h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",marginTop:4,width:"100%",children:h.jsx(c("PolarisIGCoreSpinner"),{})}):h.jsx(c("PolarisIGCoreDeck"),{cardType:"USER",hasBlur:!0,headerText:g,onVisibilityChange:k,suffix:i,children:a.map(function(a,b){return h.jsx(c("PolarisUserGridItem.react"),{id:a,onFollowClick:j,onUsernameClick:l,position:b},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSuggestedUserList.react",["fbt","PolarisConnectionsLogger","PolarisFBConnectHelpers","PolarisFacebookConnectUserListItem.react","PolarisIGCoreBox","PolarisIGCoreDivider","PolarisIGCoreText","PolarisReactRedux","PolarisRoutes","PolarisSeeAllLink.react","PolarisUserActionLoadSULV2","PolarisUserGrid.react","PolarisUserList.react","PolarissuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;b=h._("Suggestions For You");e=h._("Suggestions for you");var k=h._("See All");h=h._("See all");function a(a){var b=a.analyticsContext,e=a.avatarSize;e=e===void 0?"large":e;var f=a.borderlessFollowButton;f=f===void 0?!1:f;var g=a.backgroundColor;g=g===void 0?"ig-primary-background":g;a.children;var h=a.footer,k=a.hideName;k=k===void 0?!1:k;var l=a.hideStoryRings;l=l===void 0?!1:l;var m=a.hideUpsells;m=m===void 0?!1:m;var n=a.initialRenderCount;n=n===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:n;var o=a.isLoading,p=a.onDismiss,q=a.subHeader,r=a.userIds,s=a.variant;s=s===void 0?"LIST":s;var t=a.viewModule,u={};a=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("PolarissuggestedUserSelectors").shouldDisplayFacebookConnect(a)}},[]),d("PolarisReactRedux").shallowEqual);a=a.canFBConnect;var v=function(a){var b=a.followedByViewer,c=a.index;a=a.userId;if(b)return;z("recommended_follow_button_tapped",a,c)},w=function(a){var b=a.index;a=a.userId;z("recommended_username_tapped",a,b)},x=function(a,b){if(r==null)return;for(a=a;a<=b-1;++a){var c=r[a];u[c]||(z("recommended_user_impression",c,a),u[c]=!0)}},y=function(a){var b=a.index;a=a.userId;u[a]||(z("recommended_user_impression",a,b),u[a]=!0)},z=function(a,c,e){d("PolarisConnectionsLogger").logConnectionAction({eventName:a,position:e,targetId:c,containerModule:b,viewModule:t})};return s==="GRID"?i.jsx(c("PolarisUserGrid.react"),{avatarSize:e,isLoading:o,onFollowClick:v,onUsernameClick:w,onVisibilityChange:x,subHeader:q,suffix:i.jsx(c("PolarisSeeAllLink.react"),{href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH}),userIds:r||[]}):i.jsxs(i.Fragment,{children:[q!=null&&i.jsx(c("PolarisIGCoreBox"),{marginBottom:3,marginTop:4,paddingX:3,children:i.jsx(c("PolarisIGCoreText").Section,{children:q})}),i.jsxs(c("PolarisIGCoreBox"),{color:g,paddingY:2,children:[!m&&i.jsxs(i.Fragment,{children:[d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisFacebookConnectUserListItem.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.discover_people}),a&&d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisIGCoreBox"),{paddingY:2,children:i.jsx(c("PolarisIGCoreDivider"),{})})]}),i.jsx(c("PolarisUserList.react"),{avatarSize:e,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:f,"data-testid":void 0,hideName:k,hideStoryRings:l,hoverPositionType:"fixed",initialRenderCount:n,isLoading:Boolean(o),onDismiss:p,onFollowClick:v,onScrollChange:y,onUsernameClick:w,truncateListItemText:!0,userIds:r||[],usernameTriggerAnalyticsContext:"suggested_user"}),h]})]})}a.displayName=a.name+" [from "+f.id+"]";g.HEADER_TEXT=b;g.HEADER_TEXT_V2=e;g.SEE_ALL_TEXT=k;g.SEE_ALL_TEXT_V2=h;g.SuggestedUserList=a}),98);
__d("PolarisFetchingSuggestedUserList.react",["fbt","PolarisIGCoreBox","PolarisIGCoreButton","PolarisReactRedux","PolarisRoutes","PolarisSuggestedUserList.react","PolarisUserActionLoadSULV2","PolarissuggestedUserSelectors","hero-tracing-placeholder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect;function l(){return i.jsx(c("PolarisIGCoreBox"),{paddingX:4,paddingY:3,children:i.jsx(c("PolarisIGCoreButton"),{borderless:!0,href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,children:h._("See All Suggestions")})})}l.displayName=l.name+" [from "+f.id+"]";function a(a){var b=a.analyticsContext,c=a.avatarSize;c=c===void 0?"medium":c;var e=a.backgroundColor,f=a.borderlessFollowButton;f=f===void 0?!1:f;var g=a.count,h=a.footer,m=a.header,n=a.hideName;n=n===void 0?!1:n;var o=a.hideUpsells;o=o===void 0?!1:o;var p=a.initialRenderCount,q=p===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:p;p=a.variant;p=p===void 0?"LIST":p;a=a.viewModule;var r=d("PolarisReactRedux").useSelector(j(function(a){return{isLoading:a.suggestedUsers.isLoadingSuggestions,suggestedUserIds:d("PolarissuggestedUserSelectors").getSuggestions(a)}},[]),d("PolarisReactRedux").shallowEqual),s=r.isLoading,t=r.suggestedUserIds,u=d("PolarisReactRedux").useDispatch(),v=j(function(a){return u(d("PolarisUserActionLoadSULV2").loadSULV2({maxNumberToDisplay:a}))},[u]);k(function(){t.length===0&&v(q)},[q,v,t.length]);return i.jsxs(i.Fragment,{children:[i.jsx(d("PolarisSuggestedUserList.react").SuggestedUserList,{analyticsContext:b,avatarSize:c,backgroundColor:e,borderlessFollowButton:f,hideName:n,hideUpsells:o,initialRenderCount:q,isLoading:s,subHeader:m!==void 0?m:d("PolarisSuggestedUserList.react").HEADER_TEXT,userIds:isNaN(g)?t.slice(0,q):t.slice(0,g),variant:p,viewModule:a}),p==="LIST"&&(h!==void 0?h:i.jsx(l,{})),i.jsx(d("hero-tracing-placeholder").HeroHoldTrigger,{description:"FetchingSuggestedUserList",hold:s})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);