import {Box, Button, Card, Typography} from '@mui/material';
import theme from "../../theme";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import {Link} from "react-router-dom";

const HL7Screen = () => {

    return (
        <Box sx={{flexGrow: 1}} textAlign="center">
            <div>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                    }}
                >
                    <Card sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 30,
                        padding: 5,
                        width: "80%",
                        mb: 2,
                        backgroundColor: theme.palette.info.main,
                        color: "white",
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}>
                                <Typography>This site is an HL7® v2.x reference. It describes each trigger event,
                                    segment, data type, and table structures as specified by the standard. We hope it is
                                    useful and helps the System Integration community to master the subject, be more
                                    productive and lower system integration hurdles.
                                </Typography>
                                <Typography>
                                    The site is a summary reference, and some details were removed for simplicity and to
                                    make the site easy to use. You can refer to the standard official documentation for
                                    further information.

                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Box>
                        <Typography variant="h5" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>HL7
                            International</Typography>
                    </Box>
                    <Card sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 30,
                        padding: 5,
                        width: "80%",
                        mb: 2,
                    }}>
                        <Box sx={{
                            width: '100%',
                        }}>
                            <Card sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                padding: 5,
                                width: '100%', // Set the inner Card to 100% width
                                backgroundColor: theme.palette.secondary.main,
                                color: '#6c6962'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}>
                                    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >
                                            HL7 v2.1
                                        </Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.3.1</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.5.1</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.7.1</Button>
                                    </div>
                                    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.2</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.4</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.6</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.8</Button>
                                    </div>
                                    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.3</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.5</Button>
                                        <Button
                                            sx={{
                                                fontSize: 20,
                                                marginBottom: 1,
                                                color: '#6c6962',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            size='large'
                                            startIcon={<CollectionsBookmarkIcon color="primary"/>}
                                        >HL7 v2.7</Button>
                                    </div>
                                </Box>
                            </Card>
                        </Box>
                    </Card>
                    <Box>
                        <Typography variant="h5" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>What is
                            HL7?</Typography>
                    </Box>
                    <Card sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 30,
                        padding: 5,
                        width: "80%",
                        mb: 2,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            color: '#6c6962'
                        }}>
                            <Typography>HL7® v2.x is the HL7 specification family that is the most commonly used.
                                The standard was created for data exchange between health systems independently of
                                the technology each system would use.
                            </Typography>
                            <Typography>
                                As a fact, HL7 specifies the exchanged data
                                format only and doesn’t determine how data will be transported or how it should be
                                secured.
                            </Typography>
                            <br></br>
                            <Typography>
                                When an event occurs on a system, it may trigger the system to send some information
                                to others. An HL7 data exchange would be message-based and this message would look
                                like this:
                            </Typography>
                            <br></br>
                            <Typography sx={{ml: 1}}>
                                <Link to={"/segments"}>MSH</Link>|^~\&|ADT1|GOOD HEALTH HOSPITAL|GHH LAB, INC.|GOOD
                                HEALTH
                                HOSPITAL|198808181126|SECURITY|ADT^A01^ADT_A01|MSG00001|T|2.5.1
                            </Typography>
                            <Typography sx={{ml: 1}}>
                                <Link to={"/segments"}>EVN</Link>||200708181123||
                            </Typography>
                            <Typography sx={{ml: 1}}>
                                <Link to={"/segments"}>PID</Link>|1||PATID1234^5^M11^ADT1^MR^GOOD HEALTH
                                HOSPITAL~123456789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19610615|M||2106-3|2222 HOME
                                STREET^^GREENSBORO^NC^27401-1020
                            </Typography>
                            <Typography sx={{ml: 1}}>
                                <Link to={"/segments"}>NK1</Link>|1|JONES^BARBARA^K|SPO^Spouse^HL70063||||NK^NEXT OF KIN
                            </Typography>
                            <Typography sx={{ml: 1}}>
                                <Link to={"/segments"}>PV1</Link>|1|I|2000^2012^01||||004777^ATTEND^AARON^A|||SUR||||7|A0|
                            </Typography>
                            <br/>
                            <Typography>
                                Each message is created based on a trigger event (in this case, a patient admission –
                                A01) and is built from a set of segments. Segments are lines starting with a
                                three-character identifier (Segment ID).
                            </Typography>
                            <Typography>
                                Every line contains a group of fields each
                                separated by a delimiter (default delimiter is “|”). The first segment of any message is
                                the <Link to={"/segments"}>MSH segment</Link>. It describes the message envelope
                            </Typography>
                            <br></br>
                            <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>What is a <Link
                                to={"/trigger"}>Trigger Event</Link>?</Typography>
                            <br></br>
                            <Typography>A trigger event is a message, or a data block exchanged describing an event that
                                happened.</Typography>
                            <br/>
                            <Typography>HL7® defines trigger events in chapter 2:</Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                The standard is written from the assumption that an event in the real world of
                                healthcare creates the need for data to flow among systems. The real-world event is
                                called the <b>trigger</b>
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                <b>event</b>. For example, the trigger event a patient is admitted may cause the need
                                for data about that patient to be sent to some other systems. The trigger event, <b>an
                                observation (e.g., a</b> </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                <b>CBC result) for a patient is available</b>, may cause the need for that observation
                                to be sent to some other systems too. When the transfer of information is initiated by
                                the application </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                system that deals with the triggering event, the exchange is termed an <b>unsolicited
                                update</b>.
                            </Typography>
                            <br></br>
                            <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>What is a <Link
                                to={"/data-type"}>Data Type</Link>?</Typography>
                            <br></br>
                            <Typography>Sometimes, HL7 users would consider each field as a string. However, the
                                standard specifies a data type for each of them. Data types are a good way to make sure
                                the data will be parsable and</Typography>
                            <Typography>consumable by the receiving system.</Typography>
                            <br/>
                            <Typography>HL7® defines Data Types in chapter 2:</Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                The basic building block used to construct or restrict the contents of a data field.
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                Each field is assigned a data type that defines the value domain of the field – the
                                possible values that it SHALL take. The data type SHALL have a type taken from the list
                                of data types defined.</Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>

                                Data types may be either primitive or composite. Primitive data types consist of a
                                series of characters as specified by the data type. Composite data types are made up of
                                a set of </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                components that are themselves assigned to a data type, which may again be either
                                primitive or composite data types. In the case of composite data types, the components
                                of a
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                component are called sub-components, and they SHALL only be assigned primitive data
                                types.
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                Note that the data types do not specify how systems store data within an application.
                                When fields are transmitted, they are sent as character strings as defined by the data
                                type.
                            </Typography>
                            <br></br>
                            <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>What is a <Link
                                to={"/segment"}>Segment</Link>?</Typography>
                            <br></br>
                            <Typography>A segment is a set of delimited fields all stored on a single line. A segment
                                describes a subject part of the message such as the message itself (MSH), a patient
                                (PID), or an order (ORC).</Typography>
                            <br/>
                            <Typography>HL7® defines segments in chapter 2:</Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                A segment is a logical grouping of data fields. Segments of a message may be required or
                                optional. They may occur only once in a message or they may be allowed to repeat. Each
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                segment is given a name. For example, the ADT message may contain the following
                                segments: Message Header (<Link to={"/segment"}>MSH</Link>), Event Type (<Link
                                to={"/segment"}>EVN</Link>), Patient ID (<Link to={"/segment"}>PID</Link>), and Patient
                                Visit
                                (PV1).</Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                Each segment is identified by a unique three-character code known as the Segment ID.
                                Although the actual segments are defined in various chapters, the ID codes assigned to
                                the </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                various segments are listed in Appendix A.
                            </Typography>
                            <Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                All Segment ID codes beginning with the letter Z are reserved for locally defined
                                segments. Z Codes SHALL NOT be defined within the HL7 Standard.
                            </Typography>


                            <br></br>
                            <Typography variant="h6" sx={{mt: 5, fontWeight: 'bold', color: '#6c6962'}}>What is a <Link
                                to={"/table"}>Table</Link>?</Typography>
                            <br></br>
                            <Typography>Tables are the way to define code sets the system uses or expects. They list all
                                the valid values for fields using that table. Note that the standard may suggest a list
                                of values, but each system can define</Typography><Typography> its own.</Typography>
                            <br/>
                            <Typography>HL7® defines four table types, reflecting content ownership in Chapter
                                2.</Typography>
                            <ul>
                                <li><Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                    <b>HL7 Standard</b>: An HL7 table is a set of values defined and published by HL7.
                                    They are
                                    a part of the HL7 standard because they affect the interpretation of the messages
                                    that contain them. These values may not be redefined locally; however, the table
                                    itself may be extended to accommodate locally defined values. This is particularly
                                    applicable in the case of HL7 Table 0003 – Event Type. The ID data type is most
                                    often used to encode values for HL7 tables. The values are listed in Appendix A.
                                    These HL7 tables also appear in the text in a standard box format (e.g., HL7 Table
                                    0003 – Event Type).
                                </Typography></li>
                                <li><Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                    <b>User Defined</b>: A user-defined table is a set of values that are locally or
                                    site
                                    defined. This accommodates specific fields, like PV1-3 - Assigned Patient Location,
                                    which will have values that vary from institution to institution. Even though these
                                    tables are not defined in the standard, they are given a user-defined table number
                                    to facilitate implementations. HL7 sometimes publishes suggested values that a site
                                    may use as a starter set (e.g., Table 0001- Sex). The CWE data type is often used to
                                    encode values for these tables. Note that some of these tables (e.g., Table 0302 -
                                    Point of Care) may reference common master files.</Typography></li>
                                <li><Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                    <b>External</b>: An External table is a set of coded values defined and published by
                                    another standards organization. External tables are used to populate fields like
                                    FT1-19-Diagnosis Code - FT1. Another example is the encoding of clinical
                                    observations using LOINC codes. The CF, CNE, and CWE data types are used to
                                    represent values for these fields.</Typography></li>
                                <li><Typography sx={{ml: 1, fontSize: 'small', fontStyle: 'italic'}}>
                                    <b>Local</b>: A local table is a table with a non-HL7 assigned table identifier and which
                                    contains a set of locally or site-defined values. It may be locally assigned to
                                    local fields in Z segments or HL7 fields having a CWE data type. A local
                                    implementation may further constrain these table types
                                </Typography></li>
                            </ul>
                        </Box>
                    </Card>
                </Box>
            </div>
        </Box>
    );
};

export default HL7Screen;
