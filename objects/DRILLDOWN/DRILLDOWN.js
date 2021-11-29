mos = {
    "objectName": "DRILLDOWN",
    "className": "psdi.app.common.virtual.DrillDownSet",
    "description": "The non-persistent table used for drilldown.",
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
            "attributeName": "TBNAME",
            "required": false,
            "persistent": false,
            "title": "Table",
            "remarks": "The name of the table being drilled down.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ASSETATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Asset Attribute",
            "remarks": "The name of the column that refers to the asset number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETVALUE",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "The asset number value.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Location Attribute",
            "remarks": "The name of the column that refers to the location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCVALUE",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The location value.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SYSTEMID",
            "required": false,
            "persistent": false,
            "title": "System",
            "remarks": "Identifier of the locations system that contains the current location.",
            "sameAsAttribute": "SYSTEMID",
            "sameAsObject": "LOCSYSTEM"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The site where the asset was moved. Defaults to the user's logon site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ISQBE",
            "required": true,
            "persistent": false,
            "title": "QBE",
            "remarks": "Is the drilldown object instantied from a find page?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSITEID",
            "required": false,
            "persistent": false,
            "title": "From Site",
            "remarks": "The site where the asset was located before it was moved.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETINHIERARCHY",
            "required": false,
            "persistent": false,
            "title": "Asset in Hierarchy",
            "remarks": "The asset currently in focus in the drilldown hierarchy.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCINHIERARCHY",
            "required": false,
            "persistent": false,
            "title": "Location in Hierarchy",
            "remarks": "The location currently in focus in the drilldown hierarchy.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETCOUNT",
            "required": false,
            "persistent": false,
            "title": "Asset Count",
            "remarks": "Number of Asset at the operating location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSCOUNT",
            "required": false,
            "persistent": false,
            "title": "System Count",
            "remarks": "Number of Systems the operating Location belongs to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSIDS",
            "required": false,
            "persistent": false,
            "title": "System List",
            "remarks": "List of systems for a given operating location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEXT",
            "required": false,
            "persistent": false,
            "title": "System Description List",
            "remarks": "List of matching descriptions for the systems a given operating location is associated with.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETINLOC",
            "required": false,
            "persistent": false,
            "title": "Asset in Location",
            "remarks": "The asset at a given operating location.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETMESSAGE",
            "required": false,
            "persistent": false,
            "title": "Asset Message",
            "remarks": "Message to show if there is no asset or multiple assets in a given operating location",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "LOCATIONSID",
            "required": false,
            "persistent": false,
            "title": "Location ID",
            "remarks": "unique id of the location",
            "sameAsAttribute": "LOCATIONSID",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ASSETUID",
            "required": false,
            "persistent": false,
            "title": "Unique ID",
            "remarks": "Unique Id of the Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LOCISON",
            "required": true,
            "persistent": false,
            "title": "Location Is On",
            "remarks": "Is the location tree being selected in DrillDown?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISNETWORK",
            "required": true,
            "persistent": false,
            "title": "Is Networked",
            "remarks": "Is the system networked?",
            "sameAsAttribute": "NETWORK",
            "sameAsObject": "LOCSYSTEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the information for the asset which is being referenced by drilldown. (asset.assetnum = drilldown.assetvalue or ((asset.location=drilldown.locvalue and asset.parent is null) or (asset.location=drilldown.locvalue and asset.parent not in (select assetnum from asset b where b.location= drilldown.locvalue and b.assetnum=asset.parent)))). The resulting set will contain one object.",
            "whereClause": "((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists(select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and b.assetnum=asset.parent)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_ID",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the asset record for a given assetnum. (drilldown.assetnum = asset.assetnum and drilldown.siteid=asset.siteid). The resulting set will contain zero or 1 objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_INLOC",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset record in a given operating location (asset.assetnum = drilldown.assetinloc). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetvalue and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_INLOCATION",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset records in a given operating location (asset.location = drilldown.locvalue). The resulting set will contain zero or more objects.",
            "whereClause": "((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists (select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and  b.assetnum=asset.parent)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETDDCHILDREN",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the children of the current asset in focus in the drilldown hierarchy. (asset.parent = drilldown.assethierarchy ). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:assetinhierarchy and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINLOC",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the asset record for a given assetinloc.",
            "whereClause": "assetnum=:assetinloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MIN_ASSET_INLOCATION",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the minimum asset in a given set.",
            "whereClause": "assetnum in (select min(assetnum) from asset where (((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists (select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and  b.assetnum=asset.parent)))))",
            "cardinality": null
        },
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the contractasset table, used to find the contract asset records for a given location or asset shown on DrilDown. (((contractasset.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (contractasset.assetid=drilldown.assetinhierarchy and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetid=:assetuid and :locison=:no)) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find information about the location which is being referenced by drilldown. ( locations.location = drilldown.locvalue). The resulting set will contain one object.",
            "whereClause": "location=:locvalue and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSDDCHILDREN",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the children of the current location in focus in the drilldown hierarchy. (location in (select lochierarchy.location from lochierarchy where locations.siteid = lochierarchy.siteid and lochierarchy.parent = drilldown.locInHierarchy and lochierarchy.systemid = drilldown.systemid)). The resulting set will contain zero or more objects.",
            "whereClause": "location in (select lochierarchy.location from lochierarchy where lochierarchy.parent = :locinhierarchy and lochierarchy.systemid = :systemid and lochierarchy.siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDLOCHIERARCHY",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the child lochierarchy records of the current location in focus in the drilldown hierarchy. (lochierarchy.parent= drilldown.locInHierarchy and lochierarchy.systemid = drilldown.systemid). The resulting set will contain zero or more objects.",
            "whereClause": "parent= :locinhierarchy and systemid = :systemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the Locsystem table, used to find the information for the system to which an operating location is associated. (locsystem.systemid = drilldown.systemid). The resulting set will contain one object.",
            "whereClause": "systemid=:systemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEMS_FOR_LOCATION",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the Locsystem table, used to find the systems the current location is associated with. (exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=drilldown.locvalue )). The resulting set will contain zero or more objects.",
            "whereClause": "exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=:locvalue )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMVIAROUTE",
            "target": "PM",
            "remarks": "Relationship to the pm table, used to find the pm records for a given location or asset shown on DrilDown. (((pm.location = drilldown.locvalue and drilldown.locison=:yes) or (pm.assetnum=drilldown.assetvalue and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the route records for a given location or asset shown on DrilDown. (((route_stop.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (route_stop.assetnum=drilldown.assetvalue and drilldown.locison=:no))",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the non-persistent Drilldown object to the non-persistent ViewWOPMS object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPENWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the work order table, used to find the work order records for a given location or asset shown on DrilDown. (((workorder.location = drilldown.locinhierarchy and drilldown.locison=:yes) or (workorder.assetnum=drilldown.assetValue and drilldown.locison=:no)) and workorder.historyflag = :no and workorder.siteid=drilldown.siteid",
            "whereClause": "((location = :locvalue and :locison=:yes) or (assetnum=:assetvalue and :locison=:no)) and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DRILLDOWN",
            "source": "AMCREW",
            "remarks": "Relationship from the AMCREW to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from the AREASAFFECTED to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "ASSET",
            "remarks": "Relationship from the ASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "ASSETMOVEDFLT",
            "remarks": "Relationship from the ASSETMOVEDFLT to the non-persistent DrillDown table. The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "CI",
            "remarks": "Relationship from the CI to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a CI field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship from the CollectDetails to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a CollectDetails - asset or location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "COLLECTION",
            "remarks": "Relationship from the COLLECTION to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the drill down non-persistent object",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "CREATERELINPUT",
            "remarks": "Relationship from the CREATERELINPUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "GENERATEWO",
            "remarks": "Relationship from the GENERATEWO to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "INVENTORY",
            "remarks": "Relationship from the INVENTORY to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "INVOICE",
            "remarks": "Relationship from the INVOICE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "INVOICECOST",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "INVOICELINE",
            "remarks": "Relationship from the INVOICELINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "INVRESERVE",
            "remarks": "Relationship from the INVRESERVE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "INVUSELINE",
            "remarks": "Relationship from the INVUSELINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship from the ISSUECURRENTITEM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "ISSUEITEMTOASSET",
            "remarks": "Relationship from the ISSUEITEMTOASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "JOBITEM",
            "remarks": "Relationship from the JOBMATERIAL to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "JOBPLAN",
            "remarks": "Relationship from the JOBPLAN to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "JOBPLANFILTER",
            "remarks": "Relationship from the JOBPLANFILTER to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship from the JPASSETSPLINK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LABOR",
            "remarks": "Relationship from the LABOR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LABTRANS",
            "remarks": "Relationship from the LABTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LEASEVIEW",
            "remarks": "Relationship from the LEASEVIEW object to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LOCATIONS",
            "remarks": "Relationship to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship from the LOCHIERARCHY to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "LOCKOUT",
            "remarks": "Relationship from the LOCKOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MASTERPM",
            "remarks": "Relationship from the MasterPM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a itemnum",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MATRECTRANS",
            "remarks": "Relationship from the MATRECTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MATUSETRANS",
            "remarks": "Relationship from the MATUSETRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MAXUSER",
            "remarks": "Relationship from the MAXUSER to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "MEASUREPOINT",
            "remarks": "Relationship from the MEASUREPOINT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MR",
            "remarks": "Relationship from the MR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MRLINE",
            "remarks": "Relationship from the MRLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship from the MULTIASSETLOCCI to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PERSON",
            "remarks": "Relationship from PERSON to the non-persistent DrillDown table. (No whereclause.)  The resulting set will contain zero objects.  This relationship is used when the DrillDown page is launched from a location field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PLUSCDSASSETLINK",
            "remarks": "Relationship from the PLUSCDSASSETLINK to the non-persistent DrillDown table. (No where clause). Used on the Work Asset tab from Data Sheets",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "PLUSCSPOTCHECK",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "PM",
            "remarks": "Relationship from the PM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PMWORKGENERATION",
            "remarks": "Relationship from the PMWORKGENERATION to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a Location or Asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "PO",
            "remarks": "Relationship from the PO to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "POLINE",
            "remarks": "Relationship from the POLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PR",
            "remarks": "Relationship from the PR to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PRLINE",
            "remarks": "Relationship from the PRLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "PURCHVIEW",
            "remarks": "Relationship from the PURCHVIEW to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "RFQ",
            "remarks": "Relationship from the RFQ to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "RFQLINE",
            "remarks": "Relationship from the RFQLINE to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "ROUTE_STOP",
            "remarks": "Relationship from the ROUTE_STOP to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "ROUTES",
            "remarks": "Relationship from the ROUTES to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship from the SAFETYLEXICON to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SAFETYPLAN",
            "remarks": "Relationship from the SAFETYPLAN to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SERVRECTRANS",
            "remarks": "Relationship from the SERVRECTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SFWVIEW",
            "remarks": "Relationship from the SFWVIEW to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SKDACTIVITYQBE",
            "remarks": "Relationship from the skdactivityqbe to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "SLA",
            "remarks": "SLA to Drilldown relation",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SLAASSETLOC",
            "remarks": "SLAAssetLoc to Drilldown relation",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SPAREPART",
            "remarks": "Relationship from the SPAREPART to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship from the SPLEXICONLINK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship from the SPRELATEDASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "SPWORKASSET",
            "remarks": "Relationship from the SPWORKASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "TAGLOCK",
            "remarks": "Relationship from the TAGLOCK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "TAGOUT",
            "remarks": "Relationship from the TAGOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from non-persistent Computer Promotion Defaults to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from non-persistent Computer Promotion Values to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from non-persistent Computer Promotion to Drilldown (no where clause). Returns one record.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "source": "TOOLTRANS",
            "remarks": "Relationship from the TOOLTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "TRANSFERCURITEM",
            "remarks": "Relationship from the TRANSFERCURITEM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the drill down non-persistent object",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship from the WARRANTYVIEW object to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WHEREUSED",
            "remarks": "Relationship from the WHEREUSED to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WOLINEARSEARCH",
            "remarks": "Relationship from the WOLINEARSEARCH to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WOLOCKOUT",
            "remarks": "Relationship from the WOLOCKOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WORKORDER",
            "remarks": "Relationship to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship from the WOSAFETYLINK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WOTAGLOCK",
            "remarks": "Relationship from the WOTAGLOCK to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "source": "WOTAGOUT",
            "remarks": "Relationship from the WOTAGOUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}