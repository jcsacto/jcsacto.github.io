mos = {
    "objectName": "JOBTOOL",
    "className": "psdi.app.jobplan.JobToolSet",
    "description": "Job Plan tool View",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "JOBITEMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "JOBTOOL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBTOOL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "JOBTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Job Tool",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "JOBTOOL",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "JOBTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "JOBTOOL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
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
            "objectName": "JOBLABOR",
            "targetObject": "JOBTOOL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "JOBLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTOOL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "JOBTOOL",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, STORELOCSITE, PLUSCJPREVNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "JOBTOOL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 101",
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
            "sameAsObject": "JOBPLAN",
            "viewColumnName": "JPNUM",
            "tableName": "JOBITEM",
            "tableColumnName": "JPNUM"
        },
        {
            "attributeName": "DIRECTREQ",
            "required": true,
            "persistent": true,
            "title": "Direct Req",
            "remarks": "This is to signify if the item on this reservation will be ordered outside of standard in",
            "sameAsAttribute": "DIRECTREQ",
            "sameAsObject": "INVRESERVE",
            "viewColumnName": "DIRECTREQ",
            "tableName": "JOBITEM",
            "tableColumnName": "DIRECTREQ"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Item Number Referring To Inventory Table",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMNUM",
            "tableName": "JOBITEM",
            "tableColumnName": "ITEMNUM"
        },
        {
            "attributeName": "ITEMQTY",
            "required": true,
            "persistent": true,
            "title": "Tool Quantity",
            "remarks": "Item Quantity Required For A Job Plan Operation",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "ITEMQTY",
            "tableName": "JOBITEM",
            "tableColumnName": "ITEMQTY"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "ITEMSETID",
            "tableName": "JOBITEM",
            "tableColumnName": "ITEMSETID"
        },
        {
            "attributeName": "JM1",
            "required": false,
            "persistent": true,
            "title": "Jm1",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM1",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM1",
            "tableName": "JOBITEM",
            "tableColumnName": "JM1"
        },
        {
            "attributeName": "JM2",
            "required": false,
            "persistent": true,
            "title": "Jm2",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM2",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM2",
            "tableName": "JOBITEM",
            "tableColumnName": "JM2"
        },
        {
            "attributeName": "JM3",
            "required": false,
            "persistent": true,
            "title": "Jm3",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM3",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM3",
            "tableName": "JOBITEM",
            "tableColumnName": "JM3"
        },
        {
            "attributeName": "JM4",
            "required": false,
            "persistent": true,
            "title": "Jm4",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM4",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM4",
            "tableName": "JOBITEM",
            "tableColumnName": "JM4"
        },
        {
            "attributeName": "JM5",
            "required": false,
            "persistent": true,
            "title": "Jm5",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM5",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM5",
            "tableName": "JOBITEM",
            "tableColumnName": "JM5"
        },
        {
            "attributeName": "JM6",
            "required": false,
            "persistent": true,
            "title": "Jm6",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM6",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JM6",
            "tableName": "JOBITEM",
            "tableColumnName": "JM6"
        },
        {
            "attributeName": "JPTASK",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Job Plan Task Number",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "JPTASK",
            "tableName": "JOBITEM",
            "tableColumnName": "JPTASK"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
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
            "sameAsObject": "PRLINE",
            "viewColumnName": "LINETYPE",
            "tableName": "JOBITEM",
            "tableColumnName": "LINETYPE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Primary Or Alternate Location From Inventory",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS",
            "viewColumnName": "LOCATION",
            "tableName": "JOBITEM",
            "tableColumnName": "LOCATION"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "JOBITEM",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "JOBITEM",
            "tableColumnName": "SITEID"
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
            "sameAsObject": "COMPANIES",
            "viewColumnName": "VENDOR",
            "tableName": "JOBITEM",
            "tableColumnName": "VENDOR"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item in a given job plan",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION",
            "viewColumnName": "CONDITIONCODE",
            "tableName": "JOBITEM",
            "tableColumnName": "CONDITIONCODE"
        },
        {
            "attributeName": "JOBITEMID",
            "required": true,
            "persistent": true,
            "title": "JOBITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "JOBITEMID",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "JOBITEMID",
            "tableName": "JOBITEM",
            "tableColumnName": "JOBITEMID"
        },
        {
            "attributeName": "JOBPLANID",
            "required": true,
            "persistent": true,
            "title": "JOBPLANID",
            "remarks": "Unique JobPlan Identifier",
            "sameAsAttribute": "JOBPLANID",
            "sameAsObject": "JOBPLAN",
            "viewColumnName": "JOBPLANID",
            "tableName": "JOBITEM",
            "tableColumnName": "JOBPLANID"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Specifies the Storeroom's Site of an item",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "STORELOCSITE",
            "tableName": "JOBITEM",
            "tableColumnName": "STORELOCSITE"
        },
        {
            "attributeName": "RATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate",
            "sameAsAttribute": "RATE",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "RATE",
            "tableName": "JOBITEM",
            "tableColumnName": "RATE"
        },
        {
            "attributeName": "RESERVEREQ",
            "required": true,
            "persistent": true,
            "title": "Reservation Required",
            "remarks": "Reservation Required",
            "sameAsAttribute": "RESERVEREQ",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "RESERVEREQ",
            "tableName": "JOBITEM",
            "tableColumnName": "RESERVEREQ"
        },
        {
            "attributeName": "HOURS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number Of Hours For Which A Tool Is Used",
            "sameAsAttribute": "HOURS",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "HOURS",
            "tableName": "JOBITEM",
            "tableColumnName": "HOURS"
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision number of associated job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN",
            "viewColumnName": "PLUSCJPREVNUM",
            "tableName": "JOBITEM",
            "tableColumnName": "PLUSCJPREVNUM"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Set a Condition",
            "remarks": "You can set a condition that is evaluated when a planned job tool is copied to a work order. The planned job tool is copied only when the specified condition is met. You enable conditions for job plans in the Organizations application. You create the conditions that are used in job plans in the Conditional Expression Manager application.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION",
            "viewColumnName": "CONDITIONNUM",
            "tableName": "JOBITEM",
            "tableColumnName": "CONDITIONNUM"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREW",
            "tableName": "JOBITEM",
            "tableColumnName": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT",
            "viewColumnName": "AMCREWTYPE",
            "tableName": "JOBITEM",
            "tableColumnName": "AMCREWTYPE"
        },
        {
            "attributeName": "JOBLABORREF",
            "required": false,
            "persistent": true,
            "title": "Crew Reference",
            "remarks": "This field identifies tool records to the associated joblabor record.",
            "sameAsAttribute": "JOBLABORID",
            "sameAsObject": "JOBLABOR",
            "viewColumnName": "JOBLABORREF",
            "tableName": "JOBITEM",
            "tableColumnName": "JOBLABORREF"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "linetype in (select value from synonymdomain where domainid='LINETYPE' and maxvalue ='TOOL')"
    },
    "outgoingRelationships": [
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from Job Tools to Condition.",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": null
        },
        {
            "name": "INVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find inventory record for jobTool item with valid status.  (inventory.itemnum = jobtool.itemnum and inventory.location = jobtool.location and inventory.itemsetid = jobtool.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEM",
            "target": "INVENTORY",
            "remarks": "Relationship to the Job Tool's Inventory records, used to find all the inventory records for a given Job Tool. (inventory.itemnum=jobmaterial.itemnum and inventory.itemsetid = jobmaterial.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVTOOLSTORELOC",
            "target": "INVENTORY",
            "remarks": "Relationship to the Job Tool's Inventory records, used to find all the inventory records for a given Job Tool. (inventory.itemnum=jobtool.itemnum and inventory.itemsetid = jobtool.itemsetid). The resulting set will contain zero or more records.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Job Tool's Tool(item) records, used to find the Tool(item) records for a given Job Tool. (item.itemnum=jobtool.itemnum). The resulting set will contain zero or one record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTATUS",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item record for jobtool item with valid status. (item.itemnum=jobtool.itemnum and item.itemsetid=jobtool.itemsetid and item.orgid=:jobtool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=jobtool.itemnum and itemorginfo.itemsetid=jobtool.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for jobtool item with valid status. (itemorginfo.itemnum=jobtool.itemnum and itemorginfo.itemsetid=jobtool.itemsetid and itemorginfo.orgid=:jobtool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
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
            "name": "JOBTOOL",
            "source": "ITEM",
            "remarks": "Relationship to the JobTool table, used to find all job records for a given item(tool). (jobtool.itemnum = item.itemnum and jobtool.orgid = tool.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBTOOL",
            "source": "JOBPLAN",
            "remarks": "Relationship to the Job Plan's JobTool records, used to find all the tool records for a given Job Plan. (jobtool.jpnum=jobplan.jpnum). The resulting set will contain zero or more records.",
            "whereClause": "jobplanid=:jobplanid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JOBTOOL",
            "source": "PMFORECASTTOOL",
            "remarks": "Relationship to JOBTOOL table.",
            "whereClause": "jobitemid=:jobitemid",
            "cardinality": null
        },
        {
            "name": "WPTOOL",
            "source": "WOGENFORECAST",
            "remarks": "Relationship to the JobTool information for this work order information. Zero to many members.",
            "whereClause": "(jpnum = :jpnum and jptask is null) or (jpnum = :parentjp and jptask = :taskid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}