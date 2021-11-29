mos = {
    "objectName": "WORKLOG",
    "className": "psdi.app.ticket.WorkLogSet",
    "description": "The Work Log table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORKLOGID",
    "primaryKeyColumns": [
        "WORKLOGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSIGNMENT",
            "targetObject": "WORKLOG",
            "parentKeys": "ASSIGNMENTID",
            "targetKeys": "ASSIGNMENTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assignment",
            "longDescription": null
        },
        {
            "objectName": "ASSIGNREPLOC",
            "targetObject": "WORKLOG",
            "parentKeys": "ASSIGNREPLOCID",
            "targetKeys": "ASSIGNREPLOCID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Assignment",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WORKLOG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKLOG",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WORKLOG",
            "parentKeys": "PERSONID",
            "targetKeys": "MODIFYBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Modified By",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORKLOG",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WORKLOGID",
            "required": true,
            "persistent": true,
            "title": "WorkLog ID",
            "remarks": "Work Log Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of work log entry. Enter a value or click the Select Value button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Person that created the work log entry.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Date on which the work log entry was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIENTVIEWABLE",
            "required": true,
            "persistent": true,
            "title": "Viewable",
            "remarks": "Specifies whether a self-service user can view this work log entry. If the Viewable? check box is selected, or there is a Y in the Viewable? field, the user can view this entry. If the Viewable? check box is cleared, or there is an N in the Viewable? field, the user cannot view this work log entry.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Summary",
            "remarks": "Short description of the work log entry. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Unique Identifier of the Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "MODIFYBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Person who modified or changed",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MODIFYDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date on which Work Log changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description of the work log. To check spelling of text you enter, click the Long Description button next to the Summary field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECORDKEY",
            "required": true,
            "persistent": true,
            "title": "Record",
            "remarks": "Identifies the record for the work log entry.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASS",
            "required": true,
            "persistent": true,
            "title": "Class",
            "remarks": "Class of the record for the work log entry.",
            "sameAsAttribute": "CLASS",
            "sameAsObject": "TICKET"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNMENTID",
            "required": false,
            "persistent": true,
            "title": "Assignment",
            "remarks": "Assignment Idenifier",
            "sameAsAttribute": "ASSIGNMENTID",
            "sameAsObject": "ASSIGNMENT"
        },
        {
            "attributeName": "ASSIGNREPLOCID",
            "required": false,
            "persistent": true,
            "title": "Assignment",
            "remarks": "Assignment Idenifier",
            "sameAsAttribute": "ASSIGNREPLOCID",
            "sameAsObject": "ASSIGNREPLOC"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "use for ticket record",
            "whereClause": "ticketid=:recordkey and class=:class",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WORKLOG",
            "source": "PO",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PO.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "source": "PO",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PO.",
            "whereClause": "recordkey=:ponum and class='PO' and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "WORKLOG",
            "source": "PR",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PR.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "source": "PR",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given PR.",
            "whereClause": "recordkey=:prnum and class='PR' and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "source": "TICKET",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given ticket.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOG",
            "source": "TICKET",
            "remarks": "Relationship to the ticket's worklog records, used to find the worklog records for a given ticket.",
            "whereClause": " ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CUSTOMTKWORKLOG",
            "source": "TICKET",
            "remarks": "Relationship to get WORKLOG of current TICKET.",
            "whereClause": "recordkey=:ticketid and class=:class",
            "cardinality": null
        },
        {
            "name": "WORKLOG",
            "source": "WORKORDER",
            "remarks": "Relationship to the workorder's worklog records, used to find the worklog records for a given workorder.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKLOGAPPT",
            "source": "WORKORDER",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given workorder.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MODIFYWORKLOG",
            "source": "WORKORDER",
            "remarks": "Relationship to the worklog records, used to find the worklog records for a given workorder.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CUSTOMWOWORKLOG",
            "source": "WORKORDER",
            "remarks": "Relationship to get WORKLOG of current WORKORDER.",
            "whereClause": "recordkey=:wonum and class=:woclass and siteid=:siteid",
            "cardinality": null
        }
    ]
}