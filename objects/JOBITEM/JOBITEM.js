mos = {
    "objectName": "JOBITEM",
    "className": "psdi.app.jobplan.JobItemSet",
    "description": "Base table for JobMaterial and JobServices",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JOBITEMID",
    "primaryKeyColumns": [
        "JOBITEMID"
    ],
    "logicalRelationships": [
        {
            "objectName": "JOBITEM",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "JOBITEM",
            "targetObject": "JOBSERVICE",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "JOBITEM",
            "targetObject": "JOBTOOL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTMATERIAL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTSERVICE",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        },
        {
            "objectName": "JOBITEM",
            "targetObject": "PMFORECASTTOOL",
            "parentKeys": "JOBITEMID",
            "targetKeys": "JOBITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Item",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "JOBITEM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBITEM",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Item",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBITEM",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBITEM",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "JOBITEM",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBITEM",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBITEM",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBITEM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "JPNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Job Plan Number",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "DIRECTREQ",
            "required": true,
            "persistent": true,
            "title": "Direct Request ",
            "remarks": "This is to signify if the item on this reservation will be ordered outside of standard in",
            "sameAsAttribute": "DIRECTREQ",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Item Number Referring To Inventory Table",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMQTY",
            "required": true,
            "persistent": true,
            "title": "Item Quantity",
            "remarks": "Item Quantity Required For A Job Plan Operation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "JM1",
            "required": false,
            "persistent": true,
            "title": "Jm1",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JM2",
            "required": false,
            "persistent": true,
            "title": "Jm2",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JM3",
            "required": false,
            "persistent": true,
            "title": "Jm3",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JM4",
            "required": false,
            "persistent": true,
            "title": "Jm4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JM5",
            "required": false,
            "persistent": true,
            "title": "Jm5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JM6",
            "required": false,
            "persistent": true,
            "title": "Jm6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPTASK",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Standard Cost",
            "remarks": "Line Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Primary Or Alternate Location From Inventory",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Standard Cost",
            "remarks": "Unit Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Suggested vendor to order non-stocked item from.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item in a given job plan",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "JOBITEMID",
            "required": true,
            "persistent": true,
            "title": "JOBITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique JobPlan Identifier",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Specifies the Storeroom's Site of an item",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "RATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESERVEREQ",
            "required": true,
            "persistent": true,
            "title": "Reservation Required",
            "remarks": "Reservation Required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOURS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number Of Hours For Which A Tool Is Used",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision number of associated job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Set a Condition",
            "remarks": "Defines a condition to be evaluated when copied to the Work Order. If it returns true, the Planned Job Item is copied, if not, it is not copied and none of its corresponding resources are copied either.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "JOBLABORREF",
            "required": false,
            "persistent": true,
            "title": "Crew Reference",
            "remarks": "This field identifies tool records to the associated joblabor record.",
            "sameAsAttribute": "JOBLABORID",
            "sameAsObject": "JOBLABOR"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": null,
            "whereClause": "company = :vendor and orgid=:orgid and disabled=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the JOBMATERIAL to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Job Material's Inventory records, used to find all the inventory records for a given Job Material. (inventory.itemnum=jobmaterial.itemnum and inventory.location=jobmaterial.location and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and location = :location and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEM",
            "target": "INVENTORY",
            "remarks": "Relationship to the Job Material's Inventory records, used to find all the inventory records for a given Job Material. (inventory.itemnum=jobmaterial.itemnum and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVVENDOR",
            "target": "INVVENDOR",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTVENDOR",
            "target": "INVVENDOR",
            "remarks": "Relationship to the InvVendor table, used to find default vendor for a given Item. (itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid and isdefault=:yes). The resulting set will contain one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid and isdefault=:yes and vendor in (select company from companies where disabled=:no and orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Job Material's Item records, used to find the item records for a given Job Material. (item.itemnum=jobmaterial.itemnum and item.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship from jobitem to jobplan",
            "whereClause": "jpnum=:jpnum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLANREV",
            "target": "JOBPLAN",
            "remarks": "Relationship from jobitem to jobplan",
            "whereClause": "jpnum=:jpnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null)) and pluscrevnum=:pluscjprevnum",
            "cardinality": null
        },
        {
            "name": "SERVICEITEMS",
            "target": "SERVICEITEMS",
            "remarks": "Relationship to the Job Item's Service Item records, used to find the service item records for a given Job Item. (serviceitems.itemnum=jobitem.itemnum and serviceitems.itemsetid = jobitem.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETS",
            "target": "SETS",
            "remarks": "Relationship to the Sets table, used to find the item set record for an item. This relationship will find one object.",
            "whereClause": "setid=:itemsetid and settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'ITEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "JOBITEM",
            "source": "INVENTORY",
            "remarks": "Relationship from ITEM to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the JOBITEM table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBITEM",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's JobItem records, used to find all the Material/services records for a given Job Plan. (jobitem.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        }
    ]
}