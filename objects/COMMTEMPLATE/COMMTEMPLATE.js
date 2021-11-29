mos = {
    "objectName": "COMMTEMPLATE",
    "className": "psdi.common.commtmplt.CommTemplateSet",
    "description": "The Comm Template table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "COMMTEMPLATEID",
    "primaryKeyColumns": [
        "TEMPLATEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "COMMTEMPLATEDOCS",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template Documents",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "COMMTMPLTSENDTO",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The list of addresses to send the communication to.",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "ESCNOTIFICATION",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification from the escalation.",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "COMMTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILST",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATENOST",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply, No Status Change",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "COMMTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATENOST",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply, No Status Change",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILSTVALCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWF",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "NOTIFYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWF",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template For Reply",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWFNODECFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "NOTIFYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "MFMAILWFVALCFG",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "REPLYTEMPLATE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Template for Reply",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "WFASSIGNMENT",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification about an assignment from the Workflow process.",
            "longDescription": null
        },
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "WFNOTIFICATION",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "TEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CommTemplate used to send a notification from the Workflow process.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "EMAIL",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address to reply to.",
            "longDescription": null
        },
        {
            "objectName": "EMAIL",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "EMAILADDRESS",
            "targetKeys": "SENDFROM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Email address to use as the sender.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object type this CommTemplate is designed for.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMMTEMPLATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The person who created this CommTemplate",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the communication template record. This value must be unique for all communication template records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the communication template. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDFROM",
            "required": true,
            "persistent": true,
            "title": "Send From",
            "remarks": "E-mail address that the communication is sent from.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "SUBJECT",
            "required": false,
            "persistent": true,
            "title": "Subject",
            "remarks": "Subject of the communication. Click the Detail Menu button to add substitution variables in the Subject line. Maximo populates the substitution variables with the appropriate information from the applicable record when the message is sent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYTO",
            "required": false,
            "persistent": true,
            "title": "Reply To",
            "remarks": "The email address to which a recipient of the communication replies. If an email address is not specified in this field, then the reply email is sent to the email addrress in the Send From field.",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "CREATEBY",
            "required": true,
            "persistent": true,
            "title": "Created By",
            "remarks": "Name of person who created the template. Maximo uses the logged in user's ID to automatically populate this field.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Date",
            "remarks": "Date and time the communication template was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Applies To",
            "remarks": "Maximo business object to which this communication template applies. Some examples include INCIDENT, SR, and CHANGE. For example, if a user is in the Incidents application and applies a template to a record, the list of templates that Maximo displays are those with the Applies To value of INCIDENT. Click the Select Value button to choose an object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TOLIST",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "List of recipients included in the To field of the communication. These recipients are the direct audience for the communication. Maximo populates this field based on the role(s), person(s), person group(s), or e-mail address(es) you selected on the Recipients tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CCLIST",
            "required": false,
            "persistent": false,
            "title": "cc",
            "remarks": "List of recipients included in the cc field of the communication. These recipients receive a copy of the communication. Maximo populates this field based on the role(s), person(s), person group(s), or e-mail address(es) you selected on the Recipients tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BCCLIST",
            "required": false,
            "persistent": false,
            "title": "bcc",
            "remarks": "List of recipients included in the bcc field of the communication. These recipients receive a copy of the communication without the knowledge of any other recipients. Maximo populates this field based on the role(s), person(s), person group(s), or e-mail address(es) you selected on the Recipients tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMTEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "COMMTEMPLATEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the communication template. The status can be either ACTIVE or INACTIVE. Only active templates can be applied from Escalations, Workflow, or the Create Communication action in the Maximo applications.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date of last status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Accessible From",
            "remarks": "Indicates from where in Maximo the template is accessible. Possible values include: ALL, APPS, ESCALATION, and WORKFLOW. If you choose ALL, the template can be used from any Maximo application. If you choose APPS, the template is available from the Create Communication action in all applications, but cannot be used in Escalations or Workflow. Chosing either ESCALATION or WORKFLOW limits the use of the template to within that specific application. Click the Select Value button to indicate from where the template can be accessed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Communication Template Description",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "Body of the communication. Click the Detail Menu button to add substitution variables. Maximo populates the substitution variables with the appropriate information from the applicable record when the message is sent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREEFORM",
            "required": true,
            "persistent": true,
            "title": "Free Form",
            "remarks": "Indicates whether template is created as free form.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGFLAG",
            "required": true,
            "persistent": true,
            "title": "Comm Log Entry",
            "remarks": "Determines if a Comm Log Entry is generated for communications utilizing this communications template",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRACKFAILEDMESSAGES",
            "required": true,
            "persistent": true,
            "title": "Track Failed Messages",
            "remarks": "Flag to specifiy if failed email messages should be logged in the COMMLOG table",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship for commlog",
            "whereClause": "ownerid=:commtemplateid and ownertable=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTDOCS",
            "target": "COMMTEMPLATEDOCS",
            "remarks": "Relationship to get all selected doc folders for the template.",
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTCHANGESTATUS",
            "target": "COMMTMPLTCHGSTAT",
            "remarks": "Relationship to the non-persistent COMMTMPLTCHANGESTAT table for changing status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_BCC",
            "target": "COMMTMPLTSENDTO",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all BCC recipients.",
            "whereClause": "templateid=:templateid and bcc=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_CC",
            "target": "COMMTMPLTSENDTO",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all CC recipients.",
            "whereClause": "templateid=:templateid and cc=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTO",
            "target": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of a commtemplate.",
            "whereClause": "templateid=:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOEMAIL",
            "target": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type EMAIL's for a commtemplate.",
            "whereClause": "templateid=:templateid and type='EMAIL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOGROUP",
            "target": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type GROUP for a commtemplate.",
            "whereClause": "templateid=:templateid and type='GROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOPERSON",
            "target": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type PERSON for a commtemplate.",
            "whereClause": "templateid=:templateid and type='PERSON'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_SENDTOROLE",
            "target": "COMMTMPLTSENDTO",
            "remarks": "Relationship to the commtmpltsendto table, used to get all recipients of type ROLE for a commtemplate.",
            "whereClause": "templateid=:templateid and type='ROLE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLT_TO",
            "target": "COMMTMPLTSENDTO",
            "remarks": " Relationship to the COMMTMPLTSENDTO table, used to find all TO recipients.",
            "whereClause": "templateid=:templateid and sendto=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMDOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to get an empty doclinks set.",
            "whereClause": "1=0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": " Relationship to the Doclink table, used to find all document records for a given commtemplate.",
            "whereClause": "ownertable = 'COMMTEMPLATE' and ownerid = :commtemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from COMMTEMPLATE.",
            "whereClause": "ldkey=:commtemplateid and ldownertable = 'COMMTEMPLATE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTMPLTAPP",
            "target": "MAXAPPS",
            "remarks": "Relationship to get all applications for the object type.",
            "whereClause": "maintbname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to get description of current status.",
            "whereClause": "domainid='COMMTMPLTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ESCCOMM",
            "source": "ESCNOTIFICATION",
            "remarks": "Relationship for comm templates",
            "whereClause": "templateid =:templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOTIFICATION",
            "source": "MFMAILSTCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "templateid = :commtemplate",
            "cardinality": null
        },
        {
            "name": "REPLYTEMPLATENOST",
            "source": "MFMAILSTCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of COMMTEMPLATE field",
            "whereClause": "templateid = :replytemplatenost",
            "cardinality": null
        },
        {
            "name": "REPLYTEMPLATE",
            "source": "MFMAILSTVALCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of REPLYTEMPLATE field",
            "whereClause": "templateid = :replytemplate",
            "cardinality": null
        },
        {
            "name": "NOTIFYTEMPLATE",
            "source": "MFMAILWFNODECFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of NOTIFYTEMPLATE field",
            "whereClause": "templateid = :notifytemplate",
            "cardinality": null
        },
        {
            "name": "REPLYTEMPLATE",
            "source": "MFMAILWFVALCFG",
            "remarks": "Relationship to the COMMTEMPLATE table, used to show the description of REPLYTEMPLATE",
            "whereClause": "templateid = :replytemplate",
            "cardinality": null
        },
        {
            "name": "COMMTEMPLATE",
            "source": "NOTIFICATIONWF",
            "remarks": "Gets the communication template used by a notification dialog. (templateid = :templateid). Empty or one member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTEMPLATE",
            "source": "STOPWF",
            "remarks": "Gets the communication template used by a stop workflow dialog. (templateid = :templateid). Empty or one member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTEMPLATE",
            "source": "WFASSIGNMENT",
            "remarks": "Link to communication template used by the assignment. (templateid = :templateid). One member set.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTEMPLATE",
            "source": "WFNOTIFICATION",
            "remarks": "Communication Template used by the Notification. (templateid = :templateid) Returns a single record.",
            "whereClause": "templateid = :templateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTEMPLATEINT",
            "source": "WFNOTIFICATION",
            "remarks": "Relationship to get the Comm Template for MEA",
            "whereClause": "templateid = :templateid  and objectname = :objectname and status in (select value from synonymdomain where domainid = 'COMMTMPLTSTATUS' and maxvalue = 'ACTIVE') and usewith in (select value from synonymdomain where domainid = 'TEMPLATEUSEWITH' and maxvalue in ('WORKFLOW','APPS','ALL')) and freeform = :no",
            "cardinality": "UNDEFINED"
        }
    ]
}