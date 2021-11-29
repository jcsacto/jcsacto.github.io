mos = {
    "objectName": "FAILURELIST",
    "className": "psdi.app.failure.FailureListSet",
    "description": "The FAILURELIST Table",
    "longDescription": "This MboSet organizes the failure codes defined in FailureCode into failure hierarchies. The failure codes from the FailureCode table can be used in multiple failure hierarchies and even in the same hierarchy at different levels. A top-level failure list, where the parent attribute is null, defines a \"Failure Class\". The failure code type name of the other levels is defined by the user. As an example, in the MaxDemo database, Failure Classes are where things can go wrong - Package Line, Pumps, Boilers, etc. The first level under the Failure Class is called \"Problem\". Under problem there's the \"Cause\" level and under that is the \"Remedy\" level. ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "FAILURELIST",
    "primaryKeyColumns": [
        "ORGID",
        "FAILURELIST"
    ],
    "logicalRelationships": [
        {
            "objectName": "FAILURELIST",
            "targetObject": "FAILURELIST",
            "parentKeys": "ORGID, FAILURELIST",
            "targetKeys": "ORGID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The parent of the failure code in this failure list.",
            "longDescription": null
        },
        {
            "objectName": "FAILURELIST",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "ORGID, FAILURELIST",
            "targetKeys": "ORGID, LINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure List hierarchy position.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "FAILURECODE",
            "targetObject": "FAILURELIST",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of failure code in a failure list hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURELIST",
            "targetObject": "FAILURELIST",
            "parentKeys": "ORGID, FAILURELIST",
            "targetKeys": "ORGID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The parent of the failure code in this failure list.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FAILURELIST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FAILURELIST",
            "required": true,
            "persistent": true,
            "title": "Failure List",
            "remarks": "Failure List Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILURECODE",
            "required": true,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Failure Code",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent Failure List Number",
            "sameAsAttribute": "FAILURELIST",
            "sameAsObject": "FAILURELIST"
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "What type or level of failure code is this?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "FLCDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "FLCDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILURECLASS",
            "required": false,
            "persistent": false,
            "title": "Failure Class",
            "remarks": "FAILURECLASS",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given failurecode. (failurelist.failurelist = doclinks.keyvalue and doclinks.keycolumn='FAILURELIST' and doclinks.keytable='FAILURELIST'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'FAILURELIST' and ownerid = :failurelist",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURECODE",
            "target": "FAILURECODE",
            "remarks": "Relationship to the Failurecode table, used to find failurecode for a given failurelist. (failurelist.failurecode=failurecode.failurecode). The resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find the parent for a given failurelist. (failurelist.failurelist=failurelist.parent). The resulting set will contain zero or one object.",
            "whereClause": "failurelist=:parent and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPROBLEMS",
            "target": "FAILURELIST",
            "remarks": "Relationship to the ShowAllProblems Set used by UI for display. This is a  special MboSet used for displaying the all problemcodes. (failurelist.parent in (select failurelist from failurelist where parent is null)). The resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPROBLEMCODE",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find all problem codes. (failurelist.parent in (select failurelist from failurelist where parent is null)). The resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find all children for a given failurelist. (failurelist.parent=failurelist.failurelist). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:failurelist and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FAILURELIST",
            "source": "ASSET",
            "remarks": "Relationship to the Failurelist table,used to find all failure list for a given asset when there is no parent. (failurelist.failurecode = asset.failurecode and failurelist.parent is null). This resulting set will contain zero or one object.",
            "whereClause": "failurecode = :failurecode and parent is null and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "FAILURELIST",
            "source": "FAILURECODE",
            "remarks": "Relationship to the FailureList table, used to find all failurelists for a given failurecode. (failurelist.failurecode = failurecode.failurecode). This relationship will find zero or more objects.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find the parent for a given failurelist. (failurelist.failurelist=failurelist.parent). The resulting set will contain zero or one object.",
            "whereClause": "failurelist=:parent and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPROBLEMS",
            "source": "FAILURELIST",
            "remarks": "Relationship to the ShowAllProblems Set used by UI for display. This is a  special MboSet used for displaying the all problemcodes. (failurelist.parent in (select failurelist from failurelist where parent is null)). The resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPROBLEMCODE",
            "source": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find all problem codes. (failurelist.parent in (select failurelist from failurelist where parent is null)). The resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find all children for a given failurelist. (failurelist.parent=failurelist.failurelist). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:failurelist and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "source": "FAILUREREPORT",
            "remarks": "Relationship to the FailureList table, used to find the failurelist for a given failurereport. (Failurelist.parent = FailureReport.linenum). This resulting set will contain zero or more objects.",
            "whereClause": "parent=:linenum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "source": "LOCATIONS",
            "remarks": "Relationship to the FailureList table for a given location. (failurelist.failurecode=locations.failurecode). The resulting set will contain zero or one object. Note: FailureCode is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "failurecode = :failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKFAILLIST",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "parent in (select failurelist from failurelist where failurecode = :failurecode and parent is null) and orgid=:assetorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOFAILLIST",
            "source": "WORKORDER",
            "remarks": "Relationship to the FALIURELIST table, used to find all problem records for a work order's failure class. (failurelist.parent = (select failurelist from failurelist where failurecode = :workorder.failurecode). This resulting set will contain zero or more objects.",
            "whereClause": "parent in (select failurelist from failurelist where failurecode = :failurecode and parent is null) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}