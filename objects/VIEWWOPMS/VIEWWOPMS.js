mos = {
    "objectName": "VIEWWOPMS",
    "className": "psdi.app.workorder.virtual.ViewWOPMsSet",
    "description": "Non-persistent table used to View WOs & PMs.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the asset for the work order or PM.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Identifies the location for the work order or PM.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "SITEID",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the work orders and PMs for the asset or location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Include Children",
            "remarks": "Display work orders, tickets, PMs, routes and collections for the asset's or location's children?  This attribute is not used by ci-based VIEWWOPMS.  CIs uses SHOWCONTAINMENTCIS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": false,
            "title": "Configuration Item",
            "remarks": "Identifies the ci for the work order, ticket, PM, route or collection.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "SHOWPARENTS",
            "required": true,
            "persistent": false,
            "title": "Include Ancestors",
            "remarks": "Display work orders, tickets, PMs, routes and collections for the asset's or location's ancestors?  This attribute is not used by ci-based VIEWWOPMS.  CIs uses SHOWCONTAINMENTCIS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWCONTAINMENTCIS",
            "required": true,
            "persistent": false,
            "title": "Show Containment CIs",
            "remarks": "Display work orders, tickets, PMs, routes and collections for the configuration items related to the object's CI via a containment relationship?  This attribute is not used by asset- and location-based VIEWWOPMS.  Those VIEWWOPMS objects use SHOWCHILDREN and SHOWPARENTS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWHISTORY",
            "required": true,
            "persistent": false,
            "title": "Include History",
            "remarks": "show work that is not current, that is, work with statuses that have resulted in a true IsHistory flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWGLOBALWORK",
            "required": false,
            "persistent": false,
            "title": "Show Global Work",
            "remarks": "If 1, show work with null multiassetlocci.worksiteid. If 0, show work with non-null multiassetlocci.worksiteid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTORANCESTORS",
            "target": "ASSETANCESTOR",
            "remarks": "Relationship from VIEWWOPMS to the ASSETANCESTOR object, used to see if the VIEWWOPMS asset has any ancestors.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and assetnum=:assetnum and ancestor!=assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTORCHILDREN",
            "target": "ASSETANCESTOR",
            "remarks": "Relationship from VIEWWOPMS to the ASSETANCESTOR object, used to see if any children assets exist for the VIEWWOPMS asset.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and ancestor=:assetnum and ancestor!=assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI for the current non-persistent VIEWWOPMS object. (ci.cinum=viewwopms.cinum).  The resulting set will contain one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTAINMENTANCESTOR",
            "target": "CIRELATION",
            "remarks": "Relationship to the cirelation table, used to find the current configuration item's ancestor (  (cirelation.sourceci=:cinum or cirelation.targetci=:cinum) and exists (select 1 from relationrules where cirelation.relationnum=relationrules.relationnum and containment=1 and sourceclass = (select classstructureid from ci where cinum=cirelation.sourceci) and targetclass = (select classstructureid from ci where cinum=cirelation.targetci) )  ).  The resulting set will contain more than zero objects if the configuration item is in a containment relationship.",
            "whereClause": "(cirelation.sourceci=:cinum or cirelation.targetci=:cinum) and ancestorci is not null and exists (select 1 from relationrules where cirelation.relationnum=relationrules.relationnum and containment=1 and sourceclass = (select classstructureid from ci where cinum=cirelation.sourceci) and targetclass = (select classstructureid from ci where cinum=cirelation.targetci)  )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSET",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current asset.  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDANCESTORS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.ancestor=collectdetails.assetnum and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDCHILDREN",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current asset or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.assetnum=collectdetails.assetnum and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYASSETANDFAMILY",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset, its children and its ancestors. PMs that pertain to the asset, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and assetancestor.assetnum=collectdetails.assetnum union select 1 from assetancestor where assetancestor.siteid=collectdetails.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and assetancestor.ancestor=collectdetails.assetnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYCI",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current configuration item.  The resulting set will contain zero or more objects.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOC",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location.  The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDANCESTORS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.ancestor=collectdetails.location and locancestor.siteid=:siteid and locancestor.location=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDCHILDREN",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.location=collectdetails.location and locancestor.siteid=:siteid and locancestor.ancestor=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCD_BYLOCANDFAMILY",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the CollectDetails table, used to find the CollectDetails records involving the current location, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and locancestor.location=collectdetails.location union select 1 from locancestor where locancestor.siteid=collectdetails.siteid and locancestor.siteid=:siteid and locancestor.location=:location and locancestor.ancestor=collectdetails.location)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWSC_BYASSET",
            "target": "CONTRACTASSET",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetid=(select assetid from asset where assetnum=:assetnum and siteid=:siteid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORANCESTORS",
            "target": "LOCANCESTOR",
            "remarks": "Relationship from VIEWWOPMS to the LOCANCESTOR object, used to see if the VIEWWOPMS location has any ancestors.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and location=:location and ancestor!=location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTORCHILDREN",
            "target": "LOCANCESTOR",
            "remarks": "Relationship from VIEWWOPMS to the LOCANCESTOR object, used to see if any children locations exist for the VIEWWOPMS location.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and ancestor=:location and ancestor!=location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYASSET",
            "target": "PM",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOC",
            "target": "PM",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOCANDANCESTORS",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select siteid from locancestor where pm.location=locancestor.ancestor and pm.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPM_BYLOCANDFAMILY",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists ( (select siteid from locancestor where pm.location=locancestor.ancestor and pm.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select siteid from locancestor where pm.location=locancestor.location and pm.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid) )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMCHILD_BYASSET",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find all PMs for the asset and its children specified in the assetnum field.  The resulting set will contain zero or many.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from assetancestor where ancestor =:assetnum)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMCHILD_BYLOC",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find all PMs for the location and its children specified in the location field.  The resulting set will contain zero or many.",
            "whereClause": "(location=:location or location in (select location from locancestor where ancestor =:location and siteid=:siteid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSET",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset. PMs that pertain to the asset via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "(assetnum=:assetnum and siteid=:siteid) or exists (select 1 from route_stop where route_stop.route=pm.route and route_stop.siteid=pm.siteid and route_stop.assetnum=:assetnum and route_stop.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDANCESTORS",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset or its ancestors. PMs that pertain to the asset or an ancestor via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and (assetancestor.ancestor=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.ancestor=route_stop.assetnum and route_stop.route=pm.route and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDCHILDREN",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset or its children. PMs that pertain to the asset or a child via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and (assetancestor.assetnum=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.assetnum=route_stop.assetnum and route_stop.route=pm.route and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYASSETANDFAMILY",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current asset, its children and its ancestors. PMs that pertain to the asset, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and (assetancestor.assetnum=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.assetnum=route_stop.assetnum and route_stop.route=pm.route and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid))) union (select 1 from assetancestor where assetancestor.siteid=pm.siteid and assetancestor.siteid=:siteid and  assetancestor.assetnum=:assetnum and (assetancestor.ancestor=pm.assetnum or (pm.assetnum is null and exists (select 1 from route_stop where assetancestor.ancestor=route_stop.assetnum and  route_stop.route=pm.route and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOC",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location. PMs that pertain to the location via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "(location=:location and siteid=:siteid) or exists (select 1 from route_stop where route_stop.route=pm.route and route_stop.siteid=pm.siteid and route_stop.location=:location and route_stop.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDANCESTORS",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location or its ancestors. PMs that pertain to the location or an ancestor via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.location=:location and (locancestor.ancestor=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.ancestor=route_stop.location and route_stop.route=pm.route and locancestor.location=:location and locancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDCHILDREN",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location or its children. PMs that pertain to the location or a child via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and (locancestor.location=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.location=route_stop.location and route_stop.route=pm.route and locancestor.ancestor=:location and locancestor.siteid=:siteid))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWPMRS_BYLOCANDFAMILY",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records involving the current location, its children and its ancestors. PMs that pertain to the location, a child or a parent via a route_stop are also included.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and (locancestor.location=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.location=route_stop.location and route_stop.route=pm.route and locancestor.ancestor=:location and locancestor.siteid=:siteid))) union (select 1 from locancestor where locancestor.siteid=pm.siteid and locancestor.siteid=:siteid and locancestor.location=:location and (locancestor.ancestor=pm.location or (pm.location is null and exists (select 1 from route_stop where locancestor.ancestor=route_stop.location and route_stop.route=pm.route and locancestor.location=:location and locancestor.siteid=:siteid)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSET",
            "target": "ROUTE_STOP",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDANCESTORS",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.ancestor=route_stop.assetnum and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDCHILDREN",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.assetnum=route_stop.assetnum and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYASSETANDFAMILY",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current asset, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.siteid=:siteid and assetancestor.ancestor=:assetnum and assetancestor.assetnum=route_stop.assetnum union select 1 from assetancestor where assetancestor.siteid=route_stop.siteid and assetancestor.siteid=:siteid and assetancestor.assetnum=:assetnum and assetancestor.ancestor=route_stop.assetnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOC",
            "target": "ROUTE_STOP",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDANCESTORS",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location or its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.ancestor=route_stop.location and locancestor.siteid=:siteid and locancestor.location=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDCHILDREN",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location or its children.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.location=route_stop.location and locancestor.siteid=:siteid and locancestor.ancestor=:location )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRS_BYLOCANDFAMILY",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route_stop records involving the current location, its children and its ancestors.  The resulting set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and exists (select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.siteid=:siteid and locancestor.ancestor=:location and locancestor.location=route_stop.location union select 1 from locancestor where locancestor.siteid=route_stop.siteid and locancestor.siteid=:siteid and locancestor.location=:location and locancestor.ancestor=route_stop.location)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRSCHILD_BYASSET",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop records, used to find the route_stops records for a given asset and its children.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from assetancestor where ancestor =:assetnum)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWRSCHILD_BYLOC",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop records, used to find the route_stops records for a given location and its children.",
            "whereClause": "(location=:location or location in (select location from locancestor where ancestor =:location )) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWO_BYASSET",
            "target": "WORKORDER",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWO_BYCI",
            "target": "WORKORDER",
            "remarks": "Relationship from the non-persistent VIEWWOPMS table to workorder. The resulting set will contain zero or more objects. This relationship is used when the View Work Details dialog is launched from a configuration item field.",
            "whereClause": "cinum=:cinum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "VIEWWO_BYLOC",
            "target": "WORKORDER",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOCHILD_BYASSET",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find all workorders for the asset and its children specified in the assetnum field.  The resulting set will contain zero or many.",
            "whereClause": "assetnum in (select assetnum from assetancestor where ancestor =:assetnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOCHILD_BYLOC",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find all workorders for the location and its children specified in the location field.  The resulting set will contain zero or many.",
            "whereClause": "location in (select location from locancestor where ancestor =:location ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current cofiguration item and its related containment and non-containment configuration items. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.cinum=:cinum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSET",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSET_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work order-related work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSET_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.assetnum=:assetnum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDANCESTORS_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDCHILDREN_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current assetnum, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current assetnum. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYASSETANDFAMILY_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current assetnum, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.ancestor and multiassetlocci.siteid=assetancestor.siteid and assetancestor.assetnum=:assetnum and assetancestor.siteid=:siteid) union (select 1 from assetancestor where multiassetlocci.assetnum=assetancestor.assetnum and  multiassetlocci.siteid=assetancestor.siteid and assetancestor.ancestor=:assetnum and assetancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYCI",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYCI_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYCI_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current cofiguration item. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.cinum=:cinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOC",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOC_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOC_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and multiassetlocci.location=:location and multiassetlocci.siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDANCESTORS_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where ( (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDCHILDREN_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work site involving the current location and its children. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( exists (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid or multiassetlocci.worksiteid is null) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY_WORKSITENOTNULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find site-specific work records involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid=workview.siteid) and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": null
        },
        {
            "name": "VIEWWORK_BYLOCANDFAMILY_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null work siteid involving the current location, its children and its ancestors. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class and exists ( (select 1 from locancestor where multiassetlocci.location=locancestor.ancestor and multiassetlocci.siteid=locancestor.siteid and locancestor.location=:location and locancestor.siteid=:siteid) union (select 1 from locancestor where multiassetlocci.location=locancestor.location and multiassetlocci.siteid=locancestor.siteid and locancestor.ancestor=:location and locancestor.siteid=:siteid )))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWORK_WORKSITENULL",
            "target": "WORKVIEW",
            "remarks": "Relationship to the workview table, used to find the work records with a null siteid involving the current cofiguration item and its related containment and non-containment configuration items. The resulting set will contain zero or more objects.",
            "whereClause": "exists (select 1 from multiassetlocci where (multiassetlocci.worksiteid is null and multiassetlocci.recordkey=workview.recordkey and multiassetlocci.recordclass=workview.class) and ( multiassetlocci.cinum=:cinum and multiassetlocci.siteid=:siteid ))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "VIEWWOPMS",
            "source": "AMCREW",
            "remarks": "Relationship from the AMCREW to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from the AREASAFFECTED to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field    .",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "ASSET",
            "remarks": "Relationship from the ASSET to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "ASSETMOVEDFLT",
            "remarks": "Relationship from the ASSETMOVEDFLT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "CI",
            "remarks": "Relationship from the CI to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "CIRELATION",
            "remarks": "ting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship from the COLLECTDETAILS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "CONTLEASEENDASST",
            "remarks": "Relationship from the CONTLEASEENDASST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "CONTLINEASSET",
            "remarks": "Relationship from the CONTLINEASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "CONTRACTASSET",
            "remarks": "Relationship from the CONTRACTASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "CREATERELINPUT",
            "remarks": "Relationship from the CREATERELINPUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "DRILLDOWN",
            "remarks": "Relationship from the non-persistent Drilldown object to the non-persistent ViewWOPMS object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "INVOICECOST",
            "remarks": "Relationship from the INVOICECOST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "INVOICELINE",
            "remarks": "Relationship from the INVOICELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "INVRESERVE",
            "remarks": "Relationship from the INVRESERVE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "INVUSELINE",
            "remarks": "Relationship from the INVUSELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship from the ISSUECURRENT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "ITEMSTRUCT",
            "remarks": "Relationship from the ITEMSTRUCT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship from the JPASSETSPLINK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "KPIOEE",
            "remarks": "Relationship from the KPIOEE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "LABOR",
            "remarks": "Relationship from the INVOICELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "LABTRANS",
            "remarks": "Relationship from the LABTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "LOCATIONS",
            "remarks": "Relationship from the LOCATIONS to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship from the LOCHIERARCHY to the non-persistent VIEWWOPMS table (No where clause).  The resulting set will contain zero objects.  This relationship is used when the View Work Details dialog is launched from a child location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "LOCKOUT",
            "remarks": "Relationship from the LOCKOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MATRECTRANS",
            "remarks": "Relationship from the MATRECTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MATUSETRANS",
            "remarks": "Relationship from the MATUSETRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MEASUREMENT",
            "remarks": "Relationship from the MEASUREMENT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MEASUREPOINT",
            "remarks": "Relationship from the MEASUREPOINT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "METERDATA",
            "remarks": "Relationship from the METERDATA to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "METERREADING",
            "remarks": "Relationship from the METERREADING to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MODDOWNTIMEHIST",
            "remarks": "Relationship from the MODDOWNTIMEHIST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MR",
            "remarks": "Relationship from the MR to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MRLINE",
            "remarks": "Relationship from the MRLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship from the MULTIASSETLOCCI to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "NAMEDUSERS",
            "remarks": "Relationship from the NAMEDUSERS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "PERSON",
            "remarks": "Relationship from the LOCATIONS to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "PM",
            "remarks": "Relationship from the PM to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "PMMETER",
            "remarks": "Relationship from the PMMETER to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "POLINE",
            "remarks": "Relationship from the POLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "PRLINE",
            "remarks": "Relationship from the PRLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "RECEIPTINPUT",
            "remarks": "Relationship from the RECEIPTINPUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship from the RECONASSETRESULT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "RECONCILINK",
            "remarks": "Relationship from the RECONCILINK to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "source": "RECONCIRESULT",
            "remarks": "Relationship from the RECONCIRESULT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "RECONRESULT",
            "remarks": "Relationship from the RECONRESULT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "RFQLINE",
            "remarks": "Relationship from the RFQLINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "ROUTE_STOP",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship from the SAFETYLEXICON to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SCHEDULELINE",
            "remarks": "Relationship from the SCHEDULELINE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SERVRECTRANS",
            "remarks": "Relationship from the SERVRECTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SLAASSETLOC",
            "remarks": "Relationship from the SLAASSETLOC to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SPAREPART",
            "remarks": "Relationship from the SPAREPART to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship from the SPLEXICONLINK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship from the SPRELATEDASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SPWORKASSET",
            "remarks": "Relationship from the SPWORKASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View WO and PM dialog is launched from a location or asset field.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "SR",
            "remarks": "Relationship from the SR to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "TAGLOCK",
            "remarks": "Relationship from the TAGLOCK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "TAGOUT",
            "remarks": "Relationship from the TAGOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "TICKET",
            "remarks": "Relationship from the TICKET to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "TOOLTRANS",
            "remarks": "Relationship from the TOOLTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WARRANTYASSET",
            "remarks": "Relationship from the WARRANTYASSET to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WHEREUSED",
            "remarks": "Relationship from the WHEREUSED to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship from the WMASSIGNMENT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOACTIVITY",
            "remarks": "Relationship from the WOACTIVITY to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOASSETSTOMOVE",
            "remarks": "Relationship from the WOASSETSTOMOVE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOCHANGE",
            "remarks": "Relationship from the WOCHANGE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOCONTRACT",
            "remarks": "Relationship from the WOCONTRACT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOGENFORECAST",
            "remarks": "Relationship from the WOGENFORECAST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOHAZARD",
            "remarks": "Relationship from the WOHAZARD to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOLOCKOUT",
            "remarks": "Relationship from the WOLOCKOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WORELEASE",
            "remarks": "Relationship from the WORELEASE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WORKORDER",
            "remarks": "Relationship from the WORKORDER to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship from the WOSAFETYLINK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOTAGLOCK",
            "remarks": "Relationship from the WOTAGLOCK to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "source": "WOTAGOUT",
            "remarks": "Relationship from the WOTAGOUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}